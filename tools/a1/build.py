#!/usr/bin/env python3
"""Sinh vocab-a1.js (bộ A1 theo chủ đề) từ tools/a1/src_*.txt + verbs.txt.

Cần: node, pyphen, german-nouns (đối chiếu giống/số nhiều), và từ điển phát âm
ipa-dict tiếng Đức (gốc Wiktionary):
  https://raw.githubusercontent.com/open-dict-data/ipa-dict/master/data/de.txt
Chạy:  python3 tools/a1/build.py /đường/dẫn/de.txt  → ghi vocab-a1.js + báo cáo.
"""
import json, re, subprocess, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent
DICT_PATH = Path(sys.argv[1] if len(sys.argv) > 1 else "/home/claude/a1/ipadict_de.txt")
OUT = REPO / "vocab-a1.js"
GROUP = "A1 đầy đủ theo chủ đề"
warns = []
def warn(*a): warns.append(" ".join(str(x) for x in a))

# ---------- dữ liệu sẵn có ----------
JS = r"""const fs=require('fs');global.window={};eval(fs.readFileSync(process.argv[1],'utf8'));
console.log(JSON.stringify({sets:window.VOCAB_SETS,conj:window.VERB_CONJ,syl:window.VOCAB_SYL,origin:window.VOCAB_ORIGIN,gt:window.GENDER_TRICK}))"""
EX = json.loads(subprocess.run(["node", "-e", JS, str(REPO / "vocab-data.js")], capture_output=True, text=True, check=True).stdout)
EXW = {}
for s in EX["sets"]:
    for w in s["words"]:
        EXW.setdefault(w["w"], w)

# ---------- nguồn ----------
SETS = []
for f in sorted(HERE.glob("src_*.txt")):
    cur = None
    for ln, line in enumerate(f.read_text(encoding="utf-8").splitlines(), 1):
        line = line.rstrip()
        if not line or line.startswith("#"):
            continue
        where = f"{f.name}:{ln}"
        if line.startswith("@"):
            sid, title, sec = line[1:].split("|")
            cur = {"id": sid, "title": title, "sec": int(sec), "words": []}
            SETS.append(cur)
            continue
        if line.startswith("="):
            ref = line[1:]
            if ref not in EXW:
                warn("THIẾU MỤC DÙNG LẠI", ref, where)
                continue
            w = dict(EXW[ref]); w["_reuse"] = True
            cur["words"].append(w)
            continue
        parts = line.split("|")
        if len(parts) != 7:
            warn("SAI SỐ CỘT", where, line); continue
        t, term, plf, m, ex, exv, n = parts
        w = {"t": t}
        if t == "n":
            mm = re.match(r"^(der|die|das) (.+)$", term)
            if mm:
                w["a"], w["w"] = mm.group(1), mm.group(2)
            else:
                w["w"] = term
            if plf:
                w["pl"] = "—" if plf in ("–", "-", "—") else plf
        else:
            w["w"] = term
            if t == "v" and plf:
                w["f"] = plf
        w["m"], w["ex"], w["exv"] = m, ex, exv
        if n:
            w["n"] = n
        if not re.search(r"\[.+?\]", ex):
            warn("CÂU VÍ DỤ THIẾU [..]", where)
        w["_where"] = where
        cur["words"].append(w)

# ---------- từ điển IPA ----------
sys.path.insert(0, str(HERE))
from extras import IPA_OVR, SYL_OVR  # noqa: E402
D = {}
with open(DICT_PATH, encoding="utf-8") as fh:
    for line in fh:
        k, _, v = line.rstrip("\n").partition("\t")
        D[k] = [x.strip().strip("/") for x in v.split(",") if x.strip()]

def norm_ipa(s):
    s = s.strip().strip("/[]")
    s = s.replace("͡", "").replace("͜", "").replace("(", "").replace(")", "")
    s = s.replace("ɔɪ̯", "ɔʏ̯").replace("χ", "x").replace("ɾ", "ʁ").replace("ʀ", "ʁ").replace("r", "ʁ")
    s = s.replace("g", "ɡ").replace(":", "ː").replace("ˑ", "").replace("'", "ˈ")
    s = re.sub(r"^([ˈˌ]?)ʔ", r"\1", s)
    return s

def score(v, vs=()):
    sc = 0
    if "m̩" in v or "ŋ̍" in v or "ŋ̩" in v or "ɱ" in v: sc += 2
    if re.search(r"ɪk(?=$|[st])", v) and re.sub(r"ɪk(?=$|[st])", "ɪç", v) in vs: sc += 1   # chuẩn: -ig = [ɪç]
    return sc

MULTI = set()
def lookup(word):
    if word in IPA_OVR:
        return IPA_OVR[word]
    for k in (word, word.lower(), word[:1].upper() + word[1:]):
        if k in D:
            vs = [norm_ipa(v) for v in D[k]]
            if len(set(vs)) > 1: MULTI.add(word)
            return min(vs, key=lambda v: (score(v, vs), vs.index(v)))
    return None

LINK = ["", "s", "es", "n", "en", "e", "er"]
def compound(word):
    best = None
    for i in range(3, len(word) - 2):
        a, b = word[:i], word[i:]
        bb = b[:1].upper() + b[1:]
        ib = lookup(bb)
        if not ib:
            continue
        for l in LINK:
            if l and not a.endswith(l):
                continue
            a0 = a[: len(a) - len(l)] if l else a
            ia = lookup(a0) or lookup(a0[:1].upper() + a0[1:])
            if not ia:
                continue
            il = lookup_link(l)
            ib2 = ib.replace("ˈ", "ˌ")
            if not ib2.startswith("ˌ") and "ˌ" not in ib2:
                ib2 = "ˌ" + ib2
            ia2 = ia if "ˈ" in ia else "ˈ" + ia
            cand = ia2 + il + ib2
            if best is None or len(b) > best[0]:
                best = (len(b), cand)
    return best[1] if best else None

def lookup_link(l):
    return {"": "", "s": "s", "es": "əs", "n": "n", "en": "ən", "e": "ə", "er": "ɐ"}[l]

VOW = "aeiouyøœɛɪɔʊʏəɐɑæɒɜɘɵɤɯʌɨʉ"
def nsyl(ipa):
    return len(nuclei_tokens(tokenize(ipa)))

def ipa_word(tok, cap_stress=False, lower_first=False):
    tok = tok.strip(",.!?;:„“\"")
    if not tok or tok == "…":
        return None, False
    if lower_first and tok.lower() != tok and tok.lower() in D and tok not in IPA_OVR:
        tok = tok.lower()
    if "-" in tok and not lookup(tok):
        parts = [p for p in tok.split("-") if p]
        ips = [ipa_word(p)[0] for p in parts]
        if all(ips):
            return " ".join(ips).replace(" ", ""), True
    ip = lookup(tok)
    guessed = False
    if not ip:
        ip = compound(tok)
        guessed = True
    if not ip:
        return None, True
    if cap_stress and "ˈ" not in ip and nsyl(ip) == 1:
        ip = "ˈ" + ip
    return ip, guessed

def ipa_term(w):
    toks = [t for t in w.split(" ") if t.strip(",.!?;:„“\"…")]
    out, g = [], False
    for k, t in enumerate(toks):
        ip, gu = ipa_word(t, cap_stress=(len(toks) > 1 and k > 0 and t[:1].isupper()), lower_first=(k == 0 and len(toks) > 1))
        if ip is None:
            return None, True
        out.append(ip); g = g or gu
    return " ".join(out), g

# ---------- tách âm tiết ----------
COMB = "\u0303\u032f\u0329\u030d\u0306"
AFF = {("t", "s"), ("t", "ʃ"), ("p", "f"), ("d", "ʒ")}
def tokenize(ipa):
    """→ list of [kind, text]; kind: S (dấu nhấn), V (hạt nhân âm tiết), C (phụ âm / bán nguyên âm)."""
    segs, i = [], 0
    while i < len(ipa):
        ch = ipa[i]; j = i + 1
        while j < len(ipa) and (ipa[j] in COMB or ipa[j] == "ː"):
            j += 1
        seg = ipa[i:j]
        if ch in "ˈˌ":
            segs.append(["S", seg])
        elif ch in VOW:
            if "\u032f" in seg:
                if segs and segs[-1][0] == "V":
                    segs[-1][1] += seg          # aɪ̯, aʊ̯, ɔʏ̯, -ɐ̯
                else:
                    segs.append(["C", seg])     # i̯ đứng trước nguyên âm = âm lướt
            else:
                segs.append(["V", seg])
        elif "\u0329" in seg or "\u030d" in seg:
            segs.append(["V", seg])             # n̩, l̩
        elif segs and segs[-1][0] == "C" and (segs[-1][1], seg) in AFF:
            segs[-1][1] += seg                  # ts, tʃ, pf, dʒ = một phụ âm
        else:
            segs.append(["C", seg])
        i = j
    return segs

def nuclei_tokens(segs):
    return [k for k, s in enumerate(segs) if s[0] == "V"]

ONSETS = {"pl", "pʁ", "bl", "bʁ", "tʁ", "dʁ", "kl", "kʁ", "kn", "kv", "ɡl", "ɡʁ", "ɡn", "fl", "fʁ", "ʃl", "ʃm", "ʃn",
          "ʃʁ", "ʃv", "ʃp", "ʃt", "ʃpʁ", "ʃtʁ", "ʃpl", "tsv", "pfl", "pfʁ", "vʁ", "ps", "sk"}
def legal_onset(cs):
    if cs and "\u032f" in cs[-1]:
        return len(cs) == 1 or legal_onset(cs[:-1])
    if len(cs) <= 1:
        return not (cs and cs[0] == "ŋ")
    return "".join(cs) in ONSETS

MULTI_G = ["tsch", "sch", "ch", "ck", "ph", "th", "ng", "tz", "pf", "dt", "qu", "ss", "ß"]
def coda_units(p, nxt, nucleus):
    """số phụ âm (âm) ở cuối âm tiết chữ viết p — để cắt IPA khớp với chữ (Deutsch|land, weib|lich)."""
    g = vgroups(p)
    if not g:
        return None
    coda = p[g[-1][1]:].lower()
    if nxt and coda and (coda[-1] == nxt[:1].lower() or (coda[-1] == "t" and nxt[:1].lower() == "z")):
        coda = coda[:-1]                         # Mut|ter, Kom|men, Kat|ze: phụ âm đôi thuộc âm tiết sau
    if coda.startswith("h"):
        coda = coda[1:]                          # h câm sau nguyên âm
    if coda.startswith("r") and (nucleus.endswith("ɐ̯") or nucleus.endswith("ɐ")):
        coda = coda[1:]                          # r sau nguyên âm = ɐ̯ / -er = ɐ (nằm trong hạt nhân)
    n, i = 0, 0
    while i < len(coda):
        for gph in MULTI_G:
            if coda.startswith(gph, i):
                i += len(gph); n += 1; break
        else:
            n += 2 if coda[i] == "x" else 1
            i += 2 if coda[i + 1:i + 2] == coda[i] else 1   # ll, ff, nn… = một âm
    return n

def syl_ipa(ipa, parts=None):
    segs = tokenize(ipa)
    nuc = nuclei_tokens(segs)
    if not nuc:
        return [ipa]
    cuts = []
    for q, (a, b) in enumerate(zip(nuc, nuc[1:])):
        mid = list(range(a + 1, b))
        st = [k for k in mid if segs[k][0] == "S"]
        if st:
            cuts.append(st[0]); continue
        cons = [k for k in mid if segs[k][0] == "C"]
        units = [segs[k][1] for k in cons]
        cut = None
        if parts and len(parts) == len(nuc):
            c = coda_units(parts[q], parts[q + 1], segs[a][1])
            if c is not None and c <= len(cons) and legal_onset(units[c:]):
                cut = cons[c] if c < len(cons) else b
        if cut is None:
            cut = b
            for start in range(len(cons) + 1):
                if start == len(cons) or legal_onset(units[start:]):
                    cut = cons[start] if start < len(cons) else b
                    break
        cuts.append(cut)
    out, cur = [], ""
    cs = set(cuts)
    for k, sg in enumerate(segs):
        if k in cs and cur:
            out.append(cur); cur = ""
        cur += sg[1]
    out.append(cur)
    return out

import pyphen
HY = pyphen.Pyphen(lang="de_DE")
VL = "aeiouäöüyéAEIOUÄÖÜYÉ"
DIG = ("ei", "ie", "eu", "äu", "au", "aa", "ee", "oo", "ai", "ey", "ay")
def vgroups(s):
    """[(đầu, cuối)] các nhóm nguyên âm trong chữ viết (ei, ie, au… tính là một)."""
    out, i, low = [], 0, s.lower()
    while i < len(s):
        if s[i] in VL:
            j = i + 2 if low[i:i + 2] in DIG else i + 1
            out.append((i, j)); i = j
        else:
            i += 1
    return out

def split_part(p):
    g = vgroups(p)
    if len(g) < 2:
        return None
    a_end, b_start = g[0][1], g[1][0]
    if b_start == a_end:
        cut = b_start
    else:
        cut = b_start - 1
        low = p.lower()
        if low[b_start - 3:b_start] == "sch" and b_start - 3 >= a_end: cut = b_start - 3
        elif low[b_start - 2:b_start] in ("ch", "ck", "ph", "th", "qu") and b_start - 2 >= a_end: cut = b_start - 2
    if cut <= 0 or cut >= len(p):
        return None
    return [p[:cut], p[cut:]]

def syl_ortho(word, want):
    parts = HY.inserted(word, "|").split("|")
    k = 0
    while k < len(parts):            # mẫu của pyphen đôi khi sai (Sa|lz, Fa|r|be): gộp phần không có nguyên âm
        if not vgroups(parts[k]) and len(parts) > 1:
            if k == 0: parts[0:2] = [parts[0] + parts[1]]
            else: parts[k - 1:k + 1] = [parts[k - 1] + parts[k]]
            k = 0
        else:
            k += 1
    k = 0
    while k < len(parts):            # mỗi phần đúng một nhóm nguyên âm (Uni → U|ni, enna → en|na)
        sp = split_part(parts[k])
        if sp: parts[k:k + 1] = sp
        else: k += 1
    k = 0
    while len(parts) > want and k < len(parts) - 1:   # i̯ không thành âm tiết: Mil|li|on → Mil|lion
        if parts[k][-1:].lower() in VL and parts[k + 1][:1].lower() in VL:
            parts[k:k + 2] = [parts[k] + parts[k + 1]]
        else:
            k += 1
    return parts

def syl_entry(w, ipa):
    words = [t.strip(",.!?;:„“\"") for t in w.split(" ")]
    words = [t for t in words if t and t != "…"]
    iws = ipa.split(" ")
    if len(words) != len(iws):
        return None
    sp, ip = [], []
    for wd, iw in zip(words, iws):
        n = len(nuclei_tokens(tokenize(iw)))
        osy0 = syl_ortho(wd.replace("-", ""), n) if "-" not in wd else None
        isy = syl_ipa(iw, osy0)
        if "-" in wd:
            hp = wd.split("-")
            osy = []
            for q, h in enumerate(hp):
                sub = syl_ortho(h, 1) if h else []
                if q < len(hp) - 1 and sub:
                    sub[-1] += "-"
                osy += sub
            if len(osy) != len(isy):
                osy = syl_ortho(wd.replace("-", ""), len(isy))
        else:
            osy = syl_ortho(wd, len(isy))
        if len(osy) != len(isy):
            return None
        sp.append("|".join(osy)); ip.append("|".join(isy))
    return " ".join(sp) + "=" + " ".join(ip)

# ---------- động từ ----------
CONJ_NEW = {}
for line in (HERE / "verbs.txt").read_text(encoding="utf-8").splitlines():
    if not line.strip() or line.startswith("#"):
        continue
    inf, p, prt, pf = line.split("|")
    CONJ_NEW[inf] = {"p": p.split(","), "prt": prt, "pf": pf}

AUX = {"hat", "ist"}
def form_ipa(form):
    toks = form.replace("*", "").split(" ")
    out = []
    for t in toks:
        ip = lookup(t)
        if not ip:
            ip = compound(t)
            if ip: warn("IPA DẠNG CHIA (ghép, cần xem)", form, ip)
        if not ip:
            warn("THIẾU IPA DẠNG CHIA", form); return "?"
        if len(toks) > 1 and t not in AUX and "ˈ" not in ip and nsyl(ip) == 1:
            ip = "ˈ" + ip
        out.append(ip)
    return " ".join(out)

def conj_str(c):
    p = ";".join(f"{f}|{form_ipa(f)}" for f in c["p"])
    return {"p": p, "prt": f"{c['prt']}|{form_ipa(c['prt'])}", "pf": f"{c['pf']}|{form_ipa(c['pf'])}"}

# ---------- đối chiếu danh từ ----------
try:
    from german_nouns.lookup import Nouns
    NOUNS = Nouns()
except Exception as e:  # noqa
    NOUNS = None
    warn("Không tải được german_nouns:", e)
GMAP = {"m": "der", "f": "die", "n": "das"}

def check_noun(w):
    if not NOUNS or not w.get("a"):
        return
    res = NOUNS[w["w"]]
    if not res:
        warn("KHÔNG CÓ TRONG TỪ ĐIỂN DANH TỪ", w["a"], w["w"]); return
    pl = (w.get("pl") or "").replace("die ", "")
    gen_ok = any(GMAP.get(r.get("genus")) == w["a"] or GMAP.get(r.get("genus 1")) == w["a"] or GMAP.get(r.get("genus 2")) == w["a"] for r in res)
    plurals = set()
    for r in res:
        for k, v in r.get("flexion", {}).items():
            if k.startswith("nominativ plural"):
                plurals.add(v)
    if not gen_ok and w["pl"] not in ("(chỉ có số nhiều)", "(thường dùng số nhiều)"):
        warn("GIỐNG KHÁC TỪ ĐIỂN", w["a"], w["w"], [r.get("genus") or r.get("genus 1") for r in res])
    if pl and pl not in ("–", "—") and not pl.startswith("(") and plurals and pl not in plurals:
        warn("SỐ NHIỀU KHÁC TỪ ĐIỂN", w["a"], w["w"], "→", pl, "| từ điển:", sorted(plurals))

# ---------- mẹo giống, từ mượn ----------
from extras import ORIGIN, GENDER_GROUPS, COMPOUND_EXTRA  # noqa: E402

def run():
    new_conj, new_syl, report = {}, {}, []
    known_nouns = {}
    for s in EX["sets"]:
        for w in s["words"]:
            if w.get("a"): known_nouns[w["w"]] = w["a"]
    for s in SETS:
        for w in s["words"]:
            if w.get("a"): known_nouns.setdefault(w["w"], w["a"])
    known_nouns.update(COMPOUND_EXTRA)
    gt_new = {}
    for txt, ws in GENDER_GROUPS:
        for x in ws: gt_new[x] = txt

    seen_ids = set()
    for s in SETS:
        keys = set()
        for w in s["words"]:
            if w["w"] in keys:
                warn("TRÙNG TỪ TRONG CÙNG BỘ", s["id"], w["w"])
            keys.add(w["w"])
            if w.get("_reuse"):
                continue
            ip, guessed = ipa_term(w["w"])
            if ip is None:
                warn("THIẾU IPA", w["w"], w["_where"]); ip = ""
            elif guessed:
                warn("IPA GHÉP (cần xem)", w["w"], ip)
            w["i"] = ip
            if ip and w["w"] not in EX["syl"]:
                se = SYL_OVR.get(w["w"]) or syl_entry(w["w"], ip)
                if se: new_syl[w["w"]] = se
                else: warn("KHÔNG TÁCH ĐƯỢC ÂM TIẾT", w["w"], ip, HY.inserted(w["w"], "|"))
            if w["t"] == "n":
                check_noun(w)
                if w.get("a") and w["w"] not in EX["gt"] and w["w"] not in gt_new:
                    for k in range(1, len(w["w"]) - 2):
                        tail = w["w"][k:]; T = tail[:1].upper() + tail[1:]
                        if len(T) >= 3 and T in known_nouns and known_nouns[T] == w["a"] and T != w["w"]:
                            head = w["w"][:k]
                            gt_new[w["w"]] = f"Từ ghép lấy giống của thành phần cuối: <b>{w['a']}</b> {head}<b>{tail}</b> ← {w['a']} {T}."
                            break
            if w["t"] == "v" and w["w"] not in EX["conj"]:
                c = CONJ_NEW.get(w["w"])
                if c:
                    if w["w"] not in new_conj:
                        new_conj[w["w"]] = conj_str(c)
                    exp = c["p"][2].replace("*", "") + " – " + c["pf"]
                    if w.get("f") and w["f"] != exp:
                        warn("f KHÁC BẢNG CHIA", w["w"], w.get("f"), "≠", exp)
                    forms = {x.replace("*", "").lower() for x in c["p"]} | {c["prt"].replace("*", "").lower()}
                    blank = " ".join(re.findall(r"\[(.+?)\]", w["ex"])).lower()
                    if blank not in forms and not c["pf"].lower().endswith(blank) and blank != w["w"].lower():
                        warn("CHỖ ĐIỀN KHÔNG KHỚP DẠNG CHIA", w["w"], "→", blank)
                elif not w["w"] in ("regnen", "schneien"):
                    warn("THIẾU BẢNG CHIA", w["w"])
            mark = "*" if any(t.strip(",.!?;:") in MULTI for t in w["w"].split(" ")) else " "
            report.append(f"{mark}{(w.get('a','')+' '+w['w']).strip():26s} /{w['i']}/  {new_syl.get(w['w'],'')}")
        if s["id"] in seen_ids: warn("TRÙNG ID BỘ", s["id"])
        seen_ids.add(s["id"])

    # ---------- xuất ----------
    def clean(w):
        return {k: v for k, v in w.items() if not k.startswith("_")}
    sets_js = []
    for s in SETS:
        sets_js.append({"id": s["id"], "title": s["title"], "level": "A1", "group": GROUP, "sec": s["sec"],
                        "words": [clean(w) for w in s["words"]]})
    origin = {k: v for k, v in ORIGIN.items() if k not in EX["origin"]}
    gt = {k: v for k, v in gt_new.items() if k not in EX["gt"]}
    js = ["/* Bộ A1 đầy đủ theo chủ đề – SINH TỰ ĐỘNG bởi tools/a1/build.py, đừng sửa tay (sửa src_*.txt rồi chạy lại).",
          "   IPA: ipa-dict (gốc Wiktionary) · giống/số nhiều đã đối chiếu bộ danh từ Wiktionary. */",
          "(function(){",
          "const add=(o,n)=>{for(const k in n)if(!(k in o))o[k]=n[k]};",
          "window.VOCAB_SETS.push(..." + json.dumps(sets_js, ensure_ascii=False, separators=(",", ":")) + ");",
          "add(window.VERB_CONJ," + json.dumps(new_conj, ensure_ascii=False, separators=(",", ":")) + ");",
          "add(window.VOCAB_SYL," + json.dumps(new_syl, ensure_ascii=False, separators=(",", ":")) + ");",
          "add(window.VOCAB_ORIGIN," + json.dumps(origin, ensure_ascii=False, separators=(",", ":")) + ");",
          "add(window.GENDER_TRICK," + json.dumps(gt, ensure_ascii=False, separators=(",", ":")) + ");",
          "})();", ""]
    OUT.write_text("\n".join(js), encoding="utf-8")
    (HERE / "report.txt").write_text("\n".join(report) + "\n\n" + "\n".join(warns) + "\n", encoding="utf-8")
    (HERE / "data.json").write_text(json.dumps(sets_js, ensure_ascii=False, indent=0), encoding="utf-8")
    n_new = sum(1 for s in SETS for w in s["words"] if not w.get("_reuse"))
    n_all = sum(len(s["words"]) for s in SETS)
    print(f"{len(SETS)} bộ, {n_all} mục ({n_new} mới), {len(new_conj)} bảng chia mới, {len(new_syl)} tách âm tiết mới, "
          f"{len(origin)} từ mượn, {len(gt)} mẹo giống → {OUT.name} ({OUT.stat().st_size//1024} KB)")
    print(f"{len(warns)} cảnh báo")
    for x in warns: print("  ", x)

run()
