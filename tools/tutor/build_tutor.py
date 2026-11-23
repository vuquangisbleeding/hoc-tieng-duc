#!/usr/bin/env python3
"""Sinh tutor-data.js (lộ trình 180 kit) từ tools/tutor/s01..s18.txt + glossary.txt.

Chạy:  python3 tools/tutor/build_tutor.py      (từ thư mục gốc repo; cần node để đọc dữ liệu từ vựng)

Định dạng file chặng (mỗi dòng một mục, phân cách bằng |):
  #|số chặng|tên chặng|mục tiêu
  =số kit|tên kit|từ1; từ2; …       (từ = đúng chữ trong bộ A1; trùng chữ thì ghi từ@id-bộ, vd zu@a1-gioi-tu)
  =số kit|tên|*                       kit ôn tập chặng (từ = toàn bộ từ của chặng)
  =180|tên|**                         thi thử (từ = toàn bộ A1)
  N|ghi chú ngữ pháp (HTML)           (nhiều dòng = nhiều đoạn)
  P|nhãn|từ, từ, …                   luyện đọc to
  C|nhãn A|từ A, …|nhãn B|từ B, …     nghe phân biệt âm
  T|tiêu đề                           bắt đầu một bài nghe/đọc mới (mặc định đã có 1 bài)
  D|người nói|câu tiếng Đức|dịch      (người nói rỗng = đoạn văn)
  L|câu hỏi|đáp án đúng|sai|sai…      câu hỏi nghe (về bài gần nhất)
  R|câu hỏi|đáp án đúng|sai|sai…      câu hỏi đọc
  S|câu hỏi (máy đọc)|câu mẫu|từ khoá|gợi ý   (từ khoá: nhóm cách nhau bởi “,”, đồng nghĩa bởi “/”; rỗng = tự đánh giá)
  W|đề viết|bài mẫu|từ khoá
  G|dạng bài tự sinh; dạng bài…      conj:v1,v2 · art · pl · akk · kein · poss · dat:auf,unter · pf:v1,v2 · num:a-b · num:price
                                      time:full|halb|viertel · ord · date · seq:days|months · opp · sep:v1,v2 · modal:v1,v2
  F|câu có ___|đáp án|gợi ý|sai|sai   điền ngữ pháp (có “sai” → trắc nghiệm; nhiều chỗ trống: đáp án “a … b”)

glossary.txt:  từ|nghĩa|loại   (danh từ ghi kèm mạo từ: der Wolf|con sói|n)  ·  ~dạng|từ gốc|ghi chú  (dạng biến đổi)
"""
import json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(ROOT, "tools", "tutor")
OUT = os.path.join(ROOT, "tutor-data.js")

def load_vocab():
    js = r"""
    global.window={VOCAB_SETS:[]};const fs=require('fs');
    eval(fs.readFileSync('vocab-data.js','utf8'));eval(fs.readFileSync('vocab-a1.js','utf8'));
    process.stdout.write(JSON.stringify({sets:window.VOCAB_SETS,conj:window.VERB_CONJ}));
    """
    r = subprocess.run(["node", "-e", js], cwd=ROOT, capture_output=True, text=True, check=True)
    return json.loads(r.stdout)

V = load_vocab()
A1 = [s for s in V["sets"] if s["id"].startswith("a1-")]
CONJ = V["conj"]
by_word = {}
for s in A1:
    for w in s["words"]:
        by_word.setdefault(w["w"], []).append((s["id"], w))
ALL_KEYS = [s["id"] + "|" + w["w"] for s in A1 for w in s["words"]]
TYPE_OF = {s["id"] + "|" + w["w"]: w for s in A1 for w in s["words"]}

errors, warns = [], []
def err(f, ln, msg): errors.append(f"{f}:{ln}: {msg}")
def warn(f, ln, msg): warns.append(f"{f}:{ln}: {msg}")

G_TYPES = {"conj", "art", "pl", "akk", "kein", "poss", "dat", "pf", "num", "time", "ord", "date", "seq", "opp", "sep", "modal"}

stages, kits = [], []
for i in range(1, 19):
    fn = f"s{i:02d}.txt"
    path = os.path.join(SRC, fn)
    stage = None; kit = None; text = None
    for ln, raw in enumerate(open(path, encoding="utf-8"), 1):
        line = raw.rstrip("\n").strip()
        if not line or line.startswith("# "): continue
        p = [x.strip() for x in line.split("|")]
        tag = p[0]
        if tag == "#":
            stage = {"n": int(p[1]), "t": p[2], "g": p[3]}
            if stage["n"] != i: err(fn, ln, "số chặng không khớp tên file")
            stages.append(stage); continue
        if tag.startswith("="):
            n = int(tag[1:]); title = p[1]; ws = p[2] if len(p) > 2 else ""
            kit = {"n": n, "s": i, "t": title, "w": [], "rv": 0, "nt": [], "P": [], "C": [], "X": [], "S": [], "W": [], "G": [], "F": []}
            text = {"t": "", "d": [], "L": [], "R": []}; kit["X"].append(text)
            if (n - 1) // 10 + 1 != i: err(fn, ln, f"kit {n} không thuộc chặng {i}")
            if ws == "**": kit["rv"] = 2
            elif ws == "*": kit["rv"] = 1
            else:
                for tok in [x.strip() for x in ws.split(";") if x.strip()]:
                    if "@" in tok:
                        w, sid = tok.split("@", 1)
                        cand = [c for c in by_word.get(w, []) if c[0] == sid]
                    else:
                        w = tok; cand = by_word.get(w, [])
                    if not cand: err(fn, ln, f"không tìm thấy từ “{tok}” trong bộ A1")
                    elif len(cand) > 1: err(fn, ln, f"từ “{tok}” có ở nhiều bộ {[c[0] for c in cand]} – ghi rõ @id")
                    else: kit["w"].append(cand[0][0] + "|" + w)
            kits.append(kit); continue
        if kit is None: err(fn, ln, "dòng nằm ngoài kit"); continue
        if tag == "N": kit["nt"].append(p[1])
        elif tag == "P":
            if len(p) != 3: err(fn, ln, "P cần 3 phần")
            kit["P"].append([p[1], p[2]])
        elif tag == "C":
            if len(p) != 5: err(fn, ln, "C cần 5 phần")
            kit["C"].append(p[1:5])
        elif tag == "T":
            if text["d"] or text["L"] or text["R"]:
                text = {"t": p[1], "d": [], "L": [], "R": []}; kit["X"].append(text)
            else: text["t"] = p[1]
        elif tag == "D":
            if len(p) != 4: err(fn, ln, f"D cần 4 phần, có {len(p)}")
            text["d"].append([p[1], p[2], p[3]])
        elif tag in ("L", "R"):
            opts = [x for x in p[2:] if x != ""]
            if len(opts) < 2: err(fn, ln, f"{tag} cần ít nhất 2 lựa chọn")
            if len(set(opts)) != len(opts): err(fn, ln, f"{tag} có lựa chọn trùng")
            text[tag].append([p[1]] + opts)
        elif tag == "S":
            if len(p) not in (4, 5): err(fn, ln, f"S cần 4–5 phần, có {len(p)}")
            kit["S"].append([p[1], p[2], p[3], p[4] if len(p) > 4 else ""])
        elif tag == "W":
            if len(p) not in (3, 4): err(fn, ln, f"W cần 3–4 phần, có {len(p)}")
            kit["W"].append([p[1], p[2], p[3] if len(p) > 3 else ""])
        elif tag == "G":
            for spec in [x.strip() for x in p[1].split(";") if x.strip()]:
                t = spec.split(":")[0]
                if t not in G_TYPES: err(fn, ln, f"dạng bài lạ: {spec}")
                if t in ("conj", "pf", "sep", "modal"):
                    for v in spec.split(":")[1].split(","):
                        if v not in CONJ: err(fn, ln, f"{t}: chưa có bảng chia cho “{v}”")
                kit["G"].append(spec)
        elif tag == "F":
            if len(p) < 3: err(fn, ln, "F cần ít nhất 3 phần")
            sent, ans = p[1], p[2]
            nb = sent.count("___"); na = len([x for x in ans.split("…")])
            if nb == 0: err(fn, ln, "F thiếu ___")
            elif nb != na: err(fn, ln, f"F có {nb} chỗ trống nhưng {na} đáp án")
            kit["F"].append([sent, ans, p[3] if len(p) > 3 else ""] + [x for x in p[4:] if x])
        else: err(fn, ln, f"thẻ lạ “{tag}”")

# ---- kiểm tra tổng thể ----
nums = [k["n"] for k in kits]
if nums != list(range(1, 181)): errors.append(f"số kit không liên tục 1..180 (có {len(nums)} kit)")
seen = {}
for k in kits:
    for key in k["w"]:
        if key in seen: errors.append(f"từ {key} lặp ở kit {seen[key]} và kit {k['n']}")
        seen[key] = k["n"]
missing = [key for key in ALL_KEYS if key not in seen]
if missing: errors.append(f"{len(missing)} từ A1 chưa được xếp vào kit: " + "; ".join(missing))
for k in kits:
    if k["rv"]:
        if not k["X"][0]["d"]: warns.append(f"kit {k['n']}: kit ôn tập chưa có bài đọc")
        continue
    if not (3 <= len(k["w"]) <= 7): warns.append(f"kit {k['n']}: {len(k['w'])} từ")
    for need in ("nt", "S", "W"):
        if not k[need]: errors.append(f"kit {k['n']}: thiếu {need}")
    x = k["X"][0]
    if not x["d"]: errors.append(f"kit {k['n']}: thiếu hội thoại")
    if not x["L"] or not x["R"]: errors.append(f"kit {k['n']}: thiếu câu hỏi nghe/đọc")
    if not k["G"] and not k["F"] and k["n"] > 1: warns.append(f"kit {k['n']}: không có bài ngữ pháp")

# ---- glossary ----
gloss, alias = [], []
gp = os.path.join(SRC, "glossary.txt")
if os.path.exists(gp):
    for ln, raw in enumerate(open(gp, encoding="utf-8"), 1):
        line = raw.rstrip("\n").strip()
        if not line or line.startswith("#"): continue
        p = [x.strip() for x in line.split("|")]
        if p[0].startswith("~"):
            alias.append([p[0][1:], p[1], p[2] if len(p) > 2 else ""]); continue
        if len(p) < 2: err("glossary.txt", ln, "thiếu nghĩa"); continue
        w, m, t = p[0], p[1], (p[2] if len(p) > 2 else "")
        pl = p[3] if len(p) > 3 else ""
        a = ""
        mm = re.match(r"^(der|die|das) (.+)$", w)
        if mm and t == "n": a, w = mm.group(1), mm.group(2)
        e = {"w": w, "m": m}
        if a: e["a"] = a
        if t: e["t"] = t
        if pl: e["pl"] = pl if pl.startswith("die ") or pl == "—" else "die " + pl
        gloss.append(e)

if errors:
    print("LỖI:"); print("\n".join(errors[:80])); sys.exit(1)
for wmsg in warns: print("cảnh báo:", wmsg)

def compact(k):
    o = {"n": k["n"], "s": k["s"], "t": k["t"]}
    for f in ("w", "nt", "P", "C", "S", "W", "G", "F"):
        if k[f]: o[f] = k[f]
    if k["rv"]: o["rv"] = k["rv"]
    xs = []
    for x in k["X"]:
        xo = {"d": x["d"]}
        if x["t"]: xo["t"] = x["t"]
        if x["L"]: xo["L"] = x["L"]
        if x["R"]: xo["R"] = x["R"]
        xs.append(xo)
    o["X"] = xs
    return o

data = {"v": 1, "stages": stages, "kits": [compact(k) for k in kits]}
with open(OUT, "w", encoding="utf-8") as f:
    f.write("/* Lộ trình gia sư 180 kit – sinh tự động từ tools/tutor/*.txt bởi build_tutor.py. Đừng sửa tay. */\n")
    f.write("window.TUTOR=" + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n")
    f.write("window.TUTOR_GLOSS=" + json.dumps(gloss, ensure_ascii=False, separators=(",", ":")) + ";\n")
    f.write("window.TUTOR_ALIAS=" + json.dumps(alias, ensure_ascii=False, separators=(",", ":")) + ";\n")
total_w = sum(len(k["w"]) for k in kits)
print(f"OK: {len(stages)} chặng, {len(kits)} kit, {total_w} từ, {len(gloss)} mục glossary, {len(alias)} dạng biến đổi → {os.path.relpath(OUT, ROOT)} ({os.path.getsize(OUT)//1024} KB)")
