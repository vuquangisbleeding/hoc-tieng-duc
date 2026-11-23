/* ============ Tra từ: chỉ tra những từ có trong tài liệu học ============
   Nguồn: bộ A1 + bộ khởi động + bộ tự tạo (tab Từ vựng), từ trong tab Phát âm, từ trong các bài kit (glossary).
   Phần lõi (DictCore) không phụ thuộc giao diện → dùng được cả khi kiểm tra bằng node. */
(function(){
const G=typeof window!=="undefined"?window:globalThis;
const fold=s=>String(s??"").normalize("NFC").toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")
  .replace(/[.,!?;:"'„“”‚‘’()…–—\-]/g," ").replace(/\s+/g," ").trim();
const foldVi=s=>String(s??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"d").toLowerCase();
const PERSON=["ich","du","er/sie/es","wir","ihr","sie/Sie"];

/* ---------- Số đếm (dùng chung cho bài tập số của gia sư) ---------- */
const U=["null","eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun","zehn","elf","zwölf","dreizehn","vierzehn","fünfzehn","sechzehn","siebzehn","achtzehn","neunzehn"];
const T=["","","zwanzig","dreißig","vierzig","fünfzig","sechzig","siebzig","achtzig","neunzig"];
function lt100(n){if(n<20)return U[n];const t=Math.floor(n/10),u=n%10;return u?(u===1?"ein":U[u])+"und"+T[t]:T[t]}
function numDe(n){n=Math.floor(n);if(n<100)return lt100(n);
  if(n<1000){const h=Math.floor(n/100),r=n%100;return (h===1?"ein":U[h])+"hundert"+(r?lt100(r):"")}
  if(n<1000000){const th=Math.floor(n/1000),r=n%1000;return (th===1?"ein":numDe(th))+"tausend"+(r?numDe(r):"")}
  return String(n)}
function ordStem(n){if(n===1)return"erst";if(n===3)return"dritt";if(n===7)return"siebt";if(n===8)return"acht";
  return n<20?numDe(n)+"t":numDe(n).replace(/eins$/,"ein")+"st"}
let NUMMAP=null;
function numMap(){if(NUMMAP)return NUMMAP;NUMMAP=new Map();
  const put=(w,n,kind)=>{const f=fold(w);if(!NUMMAP.has(f))NUMMAP.set(f,{n,kind})};
  for(let n=0;n<=2100;n++){const w=numDe(n);put(w,n,"num");if(/^einhundert|^eintausend/.test(w))put(w.replace(/^ein/,""),n,"num")}
  for(let y=1900;y<2000;y++)put("neunzehnhundert"+(y%100?lt100(y%100):""),y,"year");
  for(let n=1;n<=100;n++){const s=ordStem(n);for(const e of["e","en","er","es","em"])put(s+e,n,"ord")}
  return NUMMAP}

/* ---------- Xây chỉ mục ---------- */
let IDX=null;
function build(){
  const sets=(G.VocabAPI&&G.VocabAPI.allSets)?G.VocabAPI.allSets():(G.VOCAB_SETS||[]);
  const CONJ=G.VERB_CONJ||{};
  const entries=[],byKey=new Map(),F=new Map(),kitOf=new Map();
  const TUT=G.TUTOR;
  if(TUT)for(const k of TUT.kits)for(const key of (k.w||[]))kitOf.set(key,k.n);
  const groupOf=s=>s.custom?"Bộ của bạn":(s.group||(s.id.startsWith("a1-")?"A1":"Bộ khởi động"));
  function entryFor(w,src,obj,set){
    const key=(w.a||"")+"|"+w.w+"|"+(w.t||"");
    let e=byKey.get(key);
    if(!e){e={id:entries.length,w:w.w,a:w.a||"",m:w.m||"",t:w.t||"",obj:obj||null,set:set||null,src:[],kit:0};entries.push(e);byKey.set(key,e)}
    else if(obj&&(!e.obj||(set&&set.id.startsWith("a1-")&&!(e.set&&e.set.id.startsWith("a1-"))))){e.obj=obj;e.set=set;if(w.m)e.m=w.m}
    if(src&&!e.src.some(x=>x.label===src.label))e.src.push(src);
    return e}
  const add=(form,e,why,p)=>{const f=fold(form);if(!f)return;let a=F.get(f);if(!a)F.set(f,a=[]);
    const old=a.find(x=>x.e===e);if(old){if(p<old.p){old.p=p;old.why=why}return}a.push({e,why,p})};
  function nounForms(e,w){
    add(w.w,e,"",0);
    const pl=(w.pl||"").replace(/^die /,"");
    if(pl&&!/[—(]/.test(pl)&&pl!==w.w){add(pl,e,"số nhiều",1);if(!/[ns]$/.test(pl))add(pl+"n",e,"số nhiều (cách 3)",2)}
    if(!w.w.includes(" ")){
      add(w.w+"n",e,"dạng biến đổi",2);add(w.w+"en",e,"dạng biến đổi",2);add(w.w+"s",e,"sở hữu cách",3);add(w.w+"es",e,"sở hữu cách",3);
      if(w.a==="der"){const st=w.w.replace(/e$/,"");add(st+"in",e,"dạng giống cái",2);add(st+"innen",e,"dạng giống cái, số nhiều",2)}}
  }
  function adjForms(e,w){
    const x=w.w;add(x,e,"",0);if(x.includes(" "))return;
    const st=/e$/.test(x)?x.slice(0,-1):x, alt=/[^aeiouäöü](el|er)$/.test(x)?x.replace(/e([lr])$/,"$1"):null;
    for(const end of["e","en","er","es","em"]){add(st+end,e,"tính từ có đuôi",1);if(alt)add(alt+end,e,"tính từ có đuôi",1)}
    if(w.t==="adj"){
      add(st+"er",e,"so sánh hơn",2);
      const um=x.replace(/^([^aou]*)([aou])([^aeiouäöü]*)$/,(m,a,v,c)=>a+{a:"ä",o:"ö",u:"ü"}[v]+c);
      if(um!==x){add(um+"er",e,"so sánh hơn",2);for(const end of["e","en","es","em"])add(um+"er"+end,e,"so sánh hơn",2)}
      for(const end of["e","en","es","em"])add(st+"er"+end,e,"so sánh hơn",2);
      add(st+"sten",e,"so sánh nhất",2);add(st+"esten",e,"so sánh nhất",2)}
  }
  function verbForms(e,w,c){
    add(w.w,e,"",0);
    if(!c){const st=w.w.replace(/e?n$/,"");add(st,e,"dạng chia",2);for(const end of["e","st","t","en","et","est","te","ten","test"])add(st+end,e,"dạng chia",2);add("ge"+st+"t",e,"phân từ II",2);if(/ieren$/.test(w.w))add(st+"t",e,"phân từ II",2);return}
    const p=c.p.split(";").map(x=>x.replace(/^\*/,"").split("|")[0]);
    let particle="";
    p.forEach((f,i)=>{const parts=f.replace(/ \(.*\)/,"").split(" ");add(parts[0],e,`${w.w} (${PERSON[i]})`,parts.length>1?2:1);if(parts.length>1){particle=parts.slice(1).join(" ");add(f,e,`${w.w} (${PERSON[i]})`,1)}});
    const prt=c.prt.replace(/^\*/,"").split("|")[0].replace(/ \(.*\)/,"").split(" ");add(prt[0],e,`${w.w} (quá khứ)`,1);
    for(const end of /e$/.test(prt[0])?["st","n","t"]:["st","en","t"])add(prt[0]+end,e,`${w.w} (quá khứ)`,2);
    const pf=c.pf.replace(/^\*/,"").split("|")[0].replace(/ \(.*\)/,"").split(" ");const part=pf[pf.length-1];
    add(part,e,`${w.w} (phân từ II – Perfekt: ${pf[0]} ${pf.slice(1).join(" ")})`,1);
    // mệnh lệnh ngôi du
    const du=p[1].split(" ")[0],inf=particle?w.w.slice(particle.length):w.w,stem=inf.replace(/e?n$/,"");
    let imp=stem;if(/i/.test(du)&&/e/.test(stem)&&!/i/.test(stem))imp=/[sßz]$/.test(stem)?du.slice(0,-1):du.replace(/st$/,"");
    add(imp,e,`${w.w} (mệnh lệnh – du)`,2);if(/[td]$|[^aeiouäöülrh]n$/.test(stem))add(stem+"e",e,`${w.w} (mệnh lệnh – du)`,2);
    if(particle){add(particle+"zu"+inf,e,`${w.w} (zu + nguyên mẫu)`,2)}
  }
  function pronForms(e,w){add(w.w,e,"",0);const x=w.w;
    if(/^(mein|dein|sein|unser|Ihr|ihr|kein|euer)$/.test(x)){const st=x==="euer"?"eur":x;for(const end of["e","en","er","es","em"])add(st+end,e,"có đuôi theo giống/cách",1);if(x==="unser")for(const end of["e","en","er","es","em"])add("unsr"+end,e,"có đuôi theo giống/cách",2)}
    if(x==="welcher")for(const end of["e","en","es","em"])add("welch"+end,e,"có đuôi theo giống/cách",1);
    if(x==="alle")for(const end of["er","en","es","em"])add("all"+end,e,"có đuôi",1)}
  function phraseForms(e,w){add(w.w,e,"",0);const toks=fold(w.w).split(" ");if(toks.length>1)for(const t of toks)if(t.length>2)add(t,e,"nằm trong cụm “"+w.w+"”",4)}
  function indexWord(w,src,set){
    const e=entryFor(w,src,w,set);
    if(set&&!e.kit){const k=kitOf.get(set.id+"|"+w.w);if(k)e.kit=k}
    if(w.t==="n")nounForms(e,w);
    else if(w.t==="v")verbForms(e,w,CONJ[w.w]);
    else if(w.t==="adj"||w.t==="adv")adjForms(e,w);
    else if(w.t==="pron"||w.t==="art"||w.t==="qw")pronForms(e,w);
    else if(w.t==="phr"||w.w.includes(" "))phraseForms(e,w);
    else add(w.w,e,"",0);
    return e}
  for(const s of sets)for(const w of s.words){
    const src={kind:s.custom?"custom":s.id.startsWith("a1-")?"a1":"start",label:(s.custom?"Bộ của bạn: ":s.id.startsWith("a1-")?"A1 · ":"Khởi động · ")+s.title,setId:s.id};
    indexWord(w,src,s)}
  for(const w of (G.APP_WORDS||[])){const ww={w:w.w,a:w.a||"",m:w.m||"",t:w.a?"n":"",i:w.i};const e=entryFor(ww,{kind:"speak",label:"Phát âm · "+(w.c||"")},null,null);add(w.w,e,"",0);if(!e.obj)e.obj=ww}
  for(const w of (G.TUTOR_GLOSS||[])){const e=entryFor(w,{kind:"gloss",label:"Từ trong bài kit"},w,null);e.gl=e.gl!==false&&!e.set;
    if(w.t==="n")nounForms(e,w);else if(w.t==="v")verbForms(e,w,CONJ[w.w]);else if(w.t==="adj"||w.t==="adv")adjForms(e,w);else if(w.t==="phr")phraseForms(e,w);else add(w.w,e,"",0)}
  for(const [form,lemma,note] of (G.TUTOR_ALIAS||[])){
    const [lw,sid]=lemma.split("@");
    const targets=entries.filter(e=>(e.w===lw||(!sid&&fold(e.w)===fold(lw)))&&(!sid||(e.set&&e.set.id===sid)));
    for(const e of targets)add(form,e,note||("dạng của "+lemma),1)}
  IDX={entries,F,byKey};
  return IDX}
const idx=()=>IDX||build();

/* ---------- Tra một token (chạm vào từ trong bài đọc) ---------- */
function tokens(text){return String(text).match(/\p{L}+(?:-\p{L}+)*/gu)||[]}
function rank(hits,orig){return hits.slice().sort((a,b)=>a.p-b.p||((b.e.w===orig)-(a.e.w===orig))||((b.e.w[0]===orig[0])-(a.e.w[0]===orig[0]))||(!!b.e.set-!!a.e.set))}
function lookup(token){
  const {F}=idx();const f=fold(token);if(!f)return{hits:[]};
  let hits=F.get(f);
  if(hits&&hits.some(h=>h.p<4))return{hits:rank(hits.filter(h=>h.p<4),token)};
  const nm=numMap().get(f);
  if(nm)return{hits:[],num:nm};
  if(token.includes("-")){const parts=token.split("-").filter(Boolean);const sub=parts.map(p=>({p,r:lookup(p)}));if(sub.some(x=>x.r.hits.length||x.r.num))return{hits:[],parts:sub}}
  // từ ghép: phần sau là danh từ đã biết
  if(f.length>=6){
    for(let i=2;i<=f.length-3;i++){const right=f.slice(i),rh=F.get(right);if(!rh)continue;const rn=rh.filter(h=>h.p<3&&h.e.t==="n");if(!rn.length)continue;
      for(const cut of [f.slice(0,i),f.slice(0,i).replace(/(s|n|en|e|es)$/,"")]){if(cut.length<2)continue;const lh=F.get(cut);
        if(lh&&lh.some(h=>h.p<3)){return{hits:[],compound:[{t:token.slice(0,i),hits:rank(lh.filter(h=>h.p<3),cut)},{t:token.slice(i),hits:rank(rn,right)}]}}}}}
  // bỏ đuôi phổ biến
  for(const end of["en","em","er","es","e","n","s","st","t","et","est","te","ten"]){
    if(f.length>end.length+2&&f.endsWith(end)){const h=F.get(f.slice(0,-end.length));if(h&&h.some(x=>x.p<4))return{hits:rank(h.filter(x=>x.p<4),token),approx:true}}}
  if(hits)return{hits:rank(hits,token)};
  return{hits:[]}}

/* ---------- Tìm kiếm (ô tra từ) ---------- */
function search(q){
  const {entries,F}=idx();q=String(q||"").trim();if(!q)return[];
  const qf=fold(q),qv=foldVi(q),out=new Map();
  const put=(e,sc,why)=>{const o=out.get(e);if(!o||o.sc<sc)out.set(e,{e,sc,why:why||(o&&o.why)||""})};
  (F.get(qf)||[]).forEach(h=>put(h.e,100-h.p*8,h.why));
  const r=lookup(q);if(r.approx)r.hits.forEach(h=>put(h.e,55,h.why));
  if(r.compound)r.compound.forEach(c=>c.hits.slice(0,1).forEach(h=>put(h.e,50,"phần của từ ghép")));
  for(const e of entries){
    const wf=fold(e.w);
    if(wf===qf)put(e,98);
    else if(wf.startsWith(qf))put(e,80-Math.min(20,wf.length-qf.length));
    else if(qf.length>=3&&(" "+wf).includes(" "+qf))put(e,68);
    else if(qf.length>=3&&wf.includes(qf))put(e,52);
    if(qv.length>=2){const mv=foldVi(e.m);
      if(mv===qv)put(e,90);
      else if(new RegExp("(^|[^a-z])"+qv.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"($|[^a-z])").test(mv))put(e,62-Math.min(15,mv.length/6));
      else if(qv.length>=3&&mv.includes(qv))put(e,40)}}
  return [...out.values()].sort((a,b)=>b.sc-a.sc||a.e.w.length-b.e.w.length).slice(0,60)}

/* ---------- Câu trong bài kit có chứa từ ---------- */
let OCC=null;
function occurrences(e){
  if(!OCC){OCC=new Map();const TUT=G.TUTOR;if(TUT)for(const k of TUT.kits)for(const x of k.X||[])for(const d of x.d){
    const seenE=new Set();for(const t of tokens(d[1])){const r=lookup(t);const hs=(r.hits||[]).filter(h=>h.p<4).slice(0,2);
      for(const h of hs){if(seenE.has(h.e))continue;seenE.add(h.e);let a=OCC.get(h.e);if(!a)OCC.set(h.e,a=[]);if(a.length<40)a.push({k:k.n,de:d[1],vi:d[2],sp:d[0]})}}}}
  return OCC.get(e)||[]}

G.DictCore={fold,foldVi,build,idx,lookup,search,tokens,occurrences,numDe,ordStem,numMap,reset(){IDX=null;OCC=null}};
if(typeof document==="undefined")return;

/* ================= Giao diện ================= */
const root=document.getElementById("vDict");
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const speak=(t,s)=>G.appSpeak&&G.appSpeak(t,s);
const VA=()=>G.VocabAPI||{};
const TYPE={n:"danh từ",v:"động từ",adj:"tính từ",adv:"trạng từ",phr:"cụm từ",num:"số từ",pron:"đại từ",prep:"giới từ",conj:"liên từ",qw:"từ để hỏi",art:"mạo từ",name:"tên riêng"};
const termOf=e=>(e.a?e.a+" ":"")+e.w;
const termHtml=e=>(e.a?`<span class="art-${e.a}">${e.a}</span> `:"")+esc(e.w);
let HIST=[];try{HIST=JSON.parse(localStorage.getItem("deDictHist"))||[]}catch(e){}
const saveHist=()=>{try{localStorage.setItem("deDictHist",JSON.stringify(HIST.slice(0,30)))}catch(e){}};
let q="",detail=null,lastInput=null;

function srcChips(e){
  const chips=[];if(e.kit)chips.push(`<button class="chip kit" data-kit="${e.kit}">🎓 Kit ${e.kit}</button>`);
  e.src.forEach(s=>{if(s.kind==="gloss"&&e.set)return;chips.push(`<span class="chip ${s.kind}">${esc(s.label)}</span>`)});
  return chips.join("")}
function row(r){const e=r.e;return `<button class="drow" data-e="${e.id}"><span class="dterm">${termHtml(e)}</span><span class="dmean">${esc(e.m)}</span>
  <span class="dmeta">${e.t?`<i>${TYPE[e.t]||e.t}</i>`:""}${r.why?` · ${esc(r.why)}`:""}${e.kit?` · Kit ${e.kit}`:""}${e.src.some(s=>s.kind==="custom")?" · Bộ của bạn":""}</span></button>`}
function home(){
  detail=null;
  const list=q?search(q):[];
  const kb=`<div class="kbd">${["ä","ö","ü","ß"].map(c=>`<button type="button" data-ch="${c}">${c}</button>`).join("")}</div>`;
  root.innerHTML=`<div class="card dsearch"><label for="dQ" class="small">Tra từ tiếng Đức hoặc nghĩa tiếng Việt — chỉ trong tài liệu học của bạn</label>
    <div class="dqrow"><input id="dQ" data-kbd="1" type="search" value="${esc(q)}" placeholder="vd: Bahnhof, ging, nhà ga, kommst…" autocomplete="off" autocapitalize="off" spellcheck="false"></div>${kb}</div>
    <div id="dRes">${resultsHtml(list)}</div>`;
  const inp=document.getElementById("dQ");
  inp.oninput=()=>{q=inp.value;clearTimeout(home.t);home.t=setTimeout(()=>{document.getElementById("dRes").innerHTML=resultsHtml(search(q))},120)};
  inp.onkeydown=ev=>{if(ev.key==="Enter"){const first=root.querySelector(".drow");if(first)first.click()}};
}
function resultsHtml(list){
  if(!q){const {entries}=idx();const n=entries.length;
    const recent=HIST.map(id=>entries.find(e=>e.w+"|"+e.t===id)).filter(Boolean).slice(0,12);
    const pick=entries.filter(e=>e.set&&e.set.id.startsWith("a1-"));const today=pick.length?pick[Math.floor(Date.now()/864e5)%pick.length]:null;
    return `<div class="card"><p class="small">Từ điển gồm <b>${n}</b> mục: bộ A1, bộ khởi động, bộ bạn tự tạo, tab Phát âm và các từ xuất hiện trong bài kit. Gõ được cả dạng đã chia (kommst, ging, Bücher), không dấu (Bruecke = Brücke) hoặc nghĩa tiếng Việt.</p>
      ${today?`<p class="small">Từ của hôm nay:</p>${row({e:today})}`:""}</div>
      ${recent.length?`<div class="card"><div class="sgh" style="margin-top:0">Vừa tra</div>${recent.map(e=>row({e})).join("")}</div>`:""}`}
  if(!list.length){const r=lookup(q);
    if(r.num)return `<div class="card"><b>${esc(q)}</b> = ${r.num.kind==="ord"?"số thứ tự "+r.num.n+".":r.num.kind==="year"?"năm "+r.num.n:"số "+r.num.n} <button class="spk" data-say="${esc(q)}">🔊</button></div>`;
    return `<div class="card center"><p>Không có “<b>${esc(q)}</b>” trong tài liệu học của bạn.</p><p class="small">Thử gõ dạng gốc (vd: <i>gehen</i> thay cho <i>gegangen</i>) hoặc nghĩa tiếng Việt. Bạn có thể tự thêm từ mới ở tab Từ vựng → “Tạo bộ của bạn”.</p></div>`}
  return `<div class="card dlist">${list.map(row).join("")}</div>`}
function show(e){
  detail=e;const id=e.w+"|"+e.t;HIST=[id,...HIST.filter(x=>x!==id)];saveHist();
  const V=VA();let body="";
  if(e.obj&&V.infoBlock&&e.set)body=V.infoBlock(e.obj,{set:e.set});
  else body=`<div class="winfo"><div class="wterm">${termHtml(e)} <button class="spk" data-say="${esc(termOf(e))}" aria-label="Nghe">🔊</button></div>
    ${e.obj&&e.obj.i?`<div class="wipa">/${esc(e.obj.i)}/</div>`:""}<div class="wmean">${esc(e.m)} <span class="wtype">${TYPE[e.t]||""}</span></div></div>`;
  const occ=occurrences(e).slice(0,8);
  const TUT=G.TUTOR,kt=e.kit&&TUT?TUT.kits[e.kit-1]:null;
  root.innerHTML=`<div class="vtop"><button class="ibtn" data-dact="back" aria-label="Quay lại">‹</button><div class="vtitle">Tra từ</div><span></span></div>
    <div class="card">${body}</div>
    <div class="card"><div class="sgh" style="margin-top:0">Có trong tài liệu</div><div class="chips">${srcChips(e)}</div>
      ${kt?`<p class="small">Học trong <b>Kit ${kt.n}: ${esc(kt.t)}</b> <button class="ibtn mini" data-kit="${kt.n}">Mở kit ›</button></p>`:""}</div>
    ${occ.length?`<div class="card"><div class="sgh" style="margin-top:0">Gặp trong bài hội thoại</div>${occ.map(o=>`<div class="docc"><button class="spk sm" data-say="${esc(o.de)}">🔊</button> <span>${esc(o.de)}</span><br><span class="small">${esc(o.vi)} · <button class="linkb" data-kit="${o.k}">Kit ${o.k}</button></span></div>`).join("")}</div>`:""}`;
  window.scrollTo({top:0});
}
root.addEventListener("click",ev=>{
  if(VA().infoClick&&VA().infoClick(ev))return;
  const t=ev.target.closest("button");if(!t)return;
  if(t.dataset.ch&&lastInput){const i=lastInput,s=i.selectionStart??i.value.length;i.value=i.value.slice(0,s)+t.dataset.ch+i.value.slice(i.selectionEnd??s);i.focus();i.setSelectionRange(s+1,s+1);i.dispatchEvent(new Event("input"));return}
  if(t.dataset.e!=null){show(idx().entries[+t.dataset.e]);return}
  if(t.dataset.kit){G.tutorOpenKit&&G.tutorOpenKit(+t.dataset.kit);return}
  if(t.dataset.say){speak(t.dataset.say);return}
  if(t.dataset.dact==="back")home();
});
root.addEventListener("focusin",ev=>{if(ev.target.matches("input"))lastInput=ev.target});
root.querySelector&&root.addEventListener("mousedown",ev=>{if(ev.target.closest("[data-ch]"))ev.preventDefault()});

/* ---------- Bảng tra nhanh khi chạm vào một từ ---------- */
let sheet=null;
function closeSheet(){if(sheet){sheet.remove();sheet=null}}
function popup(token){
  closeSheet();const r=lookup(token);
  const hitHtml=h=>`<div class="lkrow"><div><b class="lkterm">${termHtml(h.e)}</b> <button class="spk sm" data-say="${esc(termOf(h.e))}" aria-label="Nghe">🔊</button></div>
    <div>${esc(h.e.m)}${h.e.t?` <span class="wtype">${TYPE[h.e.t]||""}</span>`:""}</div>${h.why?`<div class="small">↳ ${esc(h.why)}</div>`:""}
    <button class="linkb" data-e="${h.e.id}">Xem đầy đủ ›</button></div>`;
  let body="";
  if(r.hits&&r.hits.length)body=(r.approx?`<div class="small">Gần đúng với:</div>`:"")+r.hits.slice(0,3).map(hitHtml).join("");
  else if(r.num)body=`<div class="lkrow">${r.num.kind==="ord"?"Số thứ tự: <b>"+r.num.n+".</b>":r.num.kind==="year"?"Năm <b>"+r.num.n+"</b>":"Số <b>"+r.num.n+"</b>"}</div>`;
  else if(r.compound)body=`<div class="small">Từ ghép:</div>`+r.compound.map(c=>c.hits.length?`<div class="lkrow"><span class="small">${esc(c.t)} →</span> ${hitHtml(c.hits[0])}</div>`:"").join("");
  else if(r.parts)body=r.parts.map(x=>x.r.hits&&x.r.hits.length?hitHtml(x.r.hits[0]):x.r.num?`<div class="lkrow">${esc(x.p)} = ${x.r.num.n}</div>`:"").join("");
  else body=`<div class="small">Không có trong tài liệu học.</div>`;
  sheet=document.createElement("div");sheet.className="lksheet";sheet.setAttribute("role","dialog");
  sheet.innerHTML=`<div class="lkbox"><div class="lkhead"><b>${esc(token)}</b> <button class="spk sm" data-say="${esc(token)}">🔊</button><button class="ibtn mini lkx" aria-label="Đóng">✕</button></div>${body}</div>`;
  document.body.appendChild(sheet);
  sheet.addEventListener("click",ev=>{
    const t=ev.target.closest("button");
    if(!t){if(ev.target===sheet)closeSheet();return}
    if(t.classList.contains("lkx")){closeSheet();return}
    if(t.dataset.say){speak(t.dataset.say);return}
    if(t.dataset.e!=null){const e=idx().entries[+t.dataset.e];closeSheet();G.appSetView&&G.appSetView("dict");show(e)}
  });
}
/* bọc từng từ trong câu để chạm tra nghĩa */
function wrap(text){
  const parts=[];let last=0;const re=/\p{L}+(?:-\p{L}+)*/gu;let m;
  while((m=re.exec(text))){parts.push(esc(text.slice(last,m.index)));parts.push(`<span class="tw" data-lk="${esc(m[0])}">${esc(m[0])}</span>`);last=m.index+m[0].length}
  parts.push(esc(text.slice(last)));return parts.join("")}
document.addEventListener("click",ev=>{const t=ev.target.closest(".tw");if(t){ev.preventDefault();popup(t.dataset.lk)}});
document.addEventListener("keydown",ev=>{if(ev.key==="Escape")closeSheet()});

let SIG="";const sig=()=>{const s=VA().allSets?VA().allSets():[];return s.length+":"+s.reduce((a,x)=>a+x.words.length,0)};
G.DictAPI={home(again){const g=sig();if(g!==SIG){if(SIG)DictCore.reset();SIG=g;if(!detail||again){detail=null;home()}return}if(again){detail=null;home()}},reset(){DictCore.reset();if(!detail)home()},open(word){q=word||"";home();const r=search(q);if(r[0]&&fold(r[0].e.w)===fold(q))show(r[0].e)},show,popup,wrap,lookup,search};
SIG=sig();home();
})();
