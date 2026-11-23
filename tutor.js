/* ============ Gia sư: 180 kit từ con số 0 đến A1 ============
   Mỗi kit: Ôn bài cũ → Từ mới → Ngữ pháp → Nghe → Nói → Đọc → Viết → Tổng kết.
   Dữ liệu bài: tutor-data.js (sinh từ tools/tutor/*.txt). Tiến độ: localStorage "deTutor" (đồng bộ qua sync.js). */
(function(){
const T=window.TUTOR,root=document.getElementById("vTutor");
if(!T||!root)return;
const V=window.VocabAPI,DC=window.DictCore;
const {esc,shuffle,fold}=V;
const speak=(t,s)=>window.appSpeak&&window.appSpeak(t,s);
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let S=Object.assign({v:1,cur:1,kits:{},days:{}},store.get("deTutor",{}));
const saveS=()=>store.set("deTutor",S);
const pick=a=>a[Math.floor(Math.random()*a.length)];
const day=(d=new Date())=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const pct=(r,n)=>n?Math.round(100*r/n):null;

/* ---------- Dữ liệu ---------- */
const KITS=T.kits,STAGES=T.stages;
const WM=new Map();for(const s of window.VOCAB_SETS)for(const w of s.words)WM.set(s.id+"|"+w.w,{s,w});
const kitW=k=>(k.w||[]).map(x=>WM.get(x)).filter(Boolean);
const stageKits=s=>KITS.filter(k=>k.s===s&&!k.rv);
const stageW=s=>stageKits(s).flatMap(kitW);
const allW=()=>KITS.filter(k=>!k.rv).flatMap(kitW);
const priorW=n=>KITS.filter(k=>k.n<n&&!k.rv).flatMap(kitW);
const kitOfKey=new Map();KITS.forEach(k=>(k.w||[]).forEach(x=>kitOfKey.set(x,k.n)));
function poolFor(k){let p=k.rv===2?allW():stageW(k.s);if(p.length<12)p=p.concat(stageW(k.s+1),stageW(Math.max(1,k.s-1)));return p}
const isText=sp=>!sp||/^(E-Mail|SMS|Anzeige|Prospekt|Aushang|Schild|Einladung|Postkarte|Speisekarte|Formular)$/.test(sp);
const SPK_VI={"Frau Schmidt":"cô giáo","Herr Weber":"chủ nhà",Kellner:"phục vụ",Kellnerin:"phục vụ",Sekretärin:"thư ký",Verkäufer:"người bán",Verkäuferin:"người bán",Kassiererin:"thu ngân",
  Beamter:"nhân viên",Beamtin:"nhân viên",Mitarbeiterin:"nhân viên",Sprechstundenhilfe:"lễ tân",Ärztin:"bác sĩ",Rezeption:"lễ tân",Ansage:"thông báo",Anzeige:"quảng cáo",Prospekt:"tờ rơi",
  Aushang:"thông báo",Schild:"biển báo",Einladung:"thiệp mời",Postkarte:"bưu thiếp",SMS:"tin nhắn","E-Mail":"email",Speisekarte:"thực đơn",Tourist:"khách du lịch",Touristin:"khách du lịch",
  Frau:"một phụ nữ",Mann:"một người đàn ông",Rotkäppchen:"cô bé",Wolf:"con sói",Telefon:"điện thoại",Mia:"đồng nghiệp",Formular:"biểu mẫu"};
const STEP={on:{i:"🔁",t:"Ôn bài cũ"},tu:{i:"🆕",t:"Từ mới"},ngu:{i:"🧩",t:"Ngữ pháp"},nghe:{i:"👂",t:"Nghe"},noi:{i:"🗣",t:"Nói"},doc:{i:"📖",t:"Đọc"},viet:{i:"✍️",t:"Viết"}};
const SKILL=[["nghe","👂 Nghe"],["noi","🗣 Nói"],["doc","📖 Đọc"],["viet","✍️ Viết"],["tu","🆕 Từ vựng"],["ngu","🧩 Ngữ pháp"]];
const stepsOf=k=>k.rv===2?["nghe","doc","viet","noi"]:k.rv===1?["tu","ngu","nghe","doc","noi","viet"]:["on","tu","ngu","nghe","noi","doc","viet"];

/* ---------- Giọng đọc hội thoại (nam / nữ) ---------- */
const GENDER={Minh:"m",Tom:"m",Lukas:"m","Herr Weber":"m",Kellner:"m",Mann:"m",Verkäufer:"m",Beamter:"m",Wolf:"m",Tourist:"m",
  Anna:"f",Lena:"f",Sara:"f",Mia:"f","Frau Schmidt":"f",Frau:"f",Rotkäppchen:"f",Rezeption:"f",Ansage:"f"};
const genderOf=sp=>GENDER[sp]||(/^Frau\b/.test(sp)?"f":/^Herr\b/.test(sp)?"m":/in$/.test(sp)?"f":"");
let VOICES=[];const loadV=()=>{try{VOICES=speechSynthesis.getVoices().filter(v=>/^de/i.test(v.lang))}catch(e){}};
if("speechSynthesis" in window){loadV();try{speechSynthesis.addEventListener("voiceschanged",loadV)}catch(e){}}
const FEM=/anna|helena|katja|petra|marlene|vicki|hedda|elke|sabine|leonie|amala|seraphina|katharina|female|google deutsch/i;
const MAL=/stefan|markus|conrad|hans|yannick|klaus|günter|martin|florian|killian|male/i;
const rate=()=>+(store.get("deCfg",{}).rate)||0.85;
const speakable=s=>String(s).replace(/[„“”"]/g,"").replace(/…/g,", ").replace(/ – /g,", ").replace(/·/g,". ").replace(/\s+/g," ").trim();
let playTok=0;
/* Giọng Azure cho từng nhân vật (nữ / nam khác nhau) */
const AZV={Anna:"de-DE-KatjaNeural",Lena:"de-DE-AmalaNeural",Sara:"de-DE-LouisaNeural","Frau Schmidt":"de-DE-TanjaNeural",Mia:"de-DE-MajaNeural",
  Minh:"de-DE-ConradNeural",Tom:"de-DE-KillianNeural",Lukas:"de-DE-KasperNeural","Herr Weber":"de-DE-KlausNeural"};
const azVoiceOf=sp=>AZV[sp]||(genderOf(sp)==="m"?"de-DE-ConradNeural":genderOf(sp)==="f"?"de-DE-KatjaNeural":(store.get("deCfg",{}).voice||"de-DE-KatjaNeural"));
async function playLinesAz(lines,slow,onLine,tok){
  const rel=rate()*(slow?0.72:1),az=window.azTok();
  const urls=lines.map(([sp,de])=>azAudioUrl(speakable(de),azVoiceOf(sp),rel));   // tải trước cả đoạn hội thoại
  urls.forEach(u=>u.catch(()=>{}));
  for(let i=0;i<lines.length;i++){if(tok!==playTok||az!==window.azTok())return;
    await urls[i];if(tok!==playTok||az!==window.azTok())return;onLine&&onLine(i);
    await azPlay(speakable(lines[i][1]),azVoiceOf(lines[i][0]),rel,az)}
  if(tok===playTok&&onLine)onLine(-1)}
function playLines(lines,slow,onLine){
  window.stopAzAudio&&stopAzAudio();
  if(window.useAzTts&&useAzTts()){const tok=++playTok;try{speechSynthesis.cancel()}catch(e){}
    playLinesAz(lines,slow,onLine,tok).catch(e=>{console.warn("Azure TTS lỗi, dùng giọng trình duyệt:",e);if(tok===playTok)playLinesBrowser(lines,slow,onLine)});return}
  playLinesBrowser(lines,slow,onLine)}
function playLinesBrowser(lines,slow,onLine){
  if(!("speechSynthesis" in window))return;
  try{speechSynthesis.cancel()}catch(e){}
  const tok=++playTok,fv=VOICES.find(v=>FEM.test(v.name)),mv=VOICES.find(v=>MAL.test(v.name)),def=fv||VOICES[0]||null;
  lines.forEach(([sp,de],i)=>{
    const g=genderOf(sp),u=new SpeechSynthesisUtterance(speakable(de));u.lang="de-DE";
    const v=g==="m"?mv:g==="f"?fv:null;u.voice=v||def;u.pitch=v?1:(g==="m"?0.78:g==="f"?1.12:1);u.rate=rate()*(slow?0.72:1);
    u.onstart=()=>{if(tok===playTok&&onLine)onLine(i)};
    if(i===lines.length-1)u.onend=()=>{if(tok===playTok&&onLine)onLine(-1)};
    speechSynthesis.speak(u)})}
function stopPlay(){playTok++;window.stopAzAudio&&stopAzAudio();try{speechSynthesis.cancel()}catch(e){}}

/* ---------- So sánh câu trả lời ---------- */
const deum=s=>fold(s).replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").replace(/ss/g,"s");
const normDots=s=>String(s).replace(/\.\.\.|…/g," ");
function cmp(inp,answers){
  const f=fold(normDots(inp));if(!f)return{v:"empty"};
  for(const a of answers)if(f===fold(normDots(a)))return{v:"ok",a};
  for(const a of answers)if(deum(normDots(inp))===deum(normDots(a)))return{v:"umlaut",a};
  for(const a of answers){const fa=fold(normDots(a));if(fa.length>4&&V.lev(f,fa)<=1)return{v:"near",a}}
  return{v:"bad"}}
const cmpMsg=r=>r.v==="umlaut"?`Thiếu dấu ¨ hoặc ß — viết đúng là <b>${esc(r.a)}</b> (dùng bàn phím ä ö ü ß bên dưới).`:r.v==="near"?"Gần đúng — sai một chữ cái, kiểm tra lại chính tả.":r.v==="empty"?"Bạn chưa nhập gì.":"";
function kwCheck(text,kw){
  if(!kw)return null;const t=" "+fold(text)+" ";
  const res=kw.split(",").map(g=>g.trim()).filter(Boolean).map(g=>({g,ok:g.split("/").some(a=>{a=fold(a);return a&&t.includes(a)})}));
  return{ok:res.every(r=>r.ok),res}}
function lcsMatch(a,b){const n=a.length,m=b.length,d=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for(let i=1;i<=n;i++)for(let j=1;j<=m;j++)d[i][j]=a[i-1]===b[j-1]?d[i-1][j-1]+1:Math.max(d[i-1][j],d[i][j-1]);
  const ok=new Array(n).fill(false);let i=n,j=m;while(i&&j){if(a[i-1]===b[j-1]){ok[i-1]=true;i--;j--}else if(d[i-1][j]>=d[i][j-1])i--;else j--}
  return ok}

/* ---------- Số, giờ, ngày ---------- */
const numDe=n=>DC.numDe(n);
const hourW=n=>n===1?"eins":numDe(n);
function timeDe(H,M){
  const h12=(H%12)||12,nx=((H+1)%12)||12;let inf;
  if(M===0)inf=(h12===1?"ein":numDe(h12))+" Uhr";else if(M===15)inf="Viertel nach "+hourW(h12);else if(M===30)inf="halb "+hourW(nx);
  else if(M===45)inf="Viertel vor "+hourW(nx);else if(M<25)inf=numDe(M)+" nach "+hourW(h12);else if(M===25)inf="fünf vor halb "+hourW(nx);
  else if(M===35)inf="fünf nach halb "+hourW(nx);else inf=numDe(60-M)+" vor "+hourW(nx);
  const off=(H===1?"ein":numDe(H))+" Uhr"+(M?" "+numDe(M):"");
  return{inf,acc:[inf,"es ist "+inf,off,"es ist "+off]}}
const DAYS=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"];
const MONTHS=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const ordW=n=>DC.ordStem(n)+"e";
const ANT=[["groß","klein"],["hell","dunkel"],["neu","alt"],["jung","alt"],["früh","spät"],["laut","leise"],["laut","ruhig"],["billig","teuer"],["voll","leer"],["gut","schlecht"],
  ["lang","kurz"],["schnell","langsam"],["leicht","schwer"],["einfach","schwierig"],["richtig","falsch"],["interessant","langweilig"],["glücklich","traurig"],["krank","gesund"],
  ["warm","kalt"],["heiß","kalt"],["nah","weit"],["links","rechts"],["immer","nie"],["kaufen","verkaufen"],["öffnen","schließen"],["geöffnet","geschlossen"],["fragen","antworten"],
  ["anfangen","aufhören"],["einsteigen","aussteigen"],["abfahren","ankommen"],["Abfahrt","Ankunft"],["schwarz","weiß"],["besetzt","frei"],["mit","ohne"],["heute","morgen"],["kommen","gehen"],["lachen","weinen"]];
const MASS=new Set(["Wasser","Milch","Zucker","Salz","Geld","Obst","Gemüse","Reis","Fleisch","Butter","Marmelade","Hunger","Durst","Zeit","Musik","Sport","Spaß","Lust","Regen","Schnee","Wind","Wetter","Gepäck","Kleidung","Fieber","Internet"]);
const countable=x=>x.w.t==="n"&&x.w.a&&/^die \S+$/.test(x.w.pl||"")&&!MASS.has(x.w.w)&&!x.w.w.includes(" ");

/* ---------- Tạo câu hỏi ---------- */
function mcWord(x,pool,dir){
  const others=shuffle(pool.filter(y=>y.w!==x.w&&y.w.m!==x.w.m&&y.w.w!==x.w.w)).sort((a,b)=>(b.w.t===x.w.t)-(a.w.t===x.w.t)).slice(0,3);
  const opts=shuffle([x,...others]).map(y=>({h:dir==="de"?esc(y.w.m):V.termHtml(y.w),ok:y===x}));
  return dir==="de"?{type:"mc",q:`<p class="qlabel">Chọn nghĩa đúng</p><div class="qbig">${V.termHtml(x.w)}</div>`,opts,w:x,say:{text:V.term(x.w)},after:`${V.termHtml(x.w)} = <b>${esc(x.w.m)}</b>`}
    :{type:"mc",q:`<p class="qlabel">Chọn từ tiếng Đức đúng</p><div class="qbig vi">${esc(x.w.m)}</div>`,opts,w:x,after:`${esc(x.w.m)} = <b>${V.termHtml(x.w)}</b>`,sayAfter:V.term(x.w)}}
function listenWord(x,pool){
  const others=shuffle(pool.filter(y=>y.w!==x.w&&y.w.m!==x.w.m)).slice(0,3);
  return{type:"mc",q:`<p class="qlabel">Nghe rồi chọn nghĩa đúng</p>`,audio:true,say:{text:V.term(x.w)},opts:shuffle([x,...others]).map(y=>({h:esc(y.w.m),ok:y===x})),w:x,after:`Bạn vừa nghe: <b>${V.termHtml(x.w)}</b> = ${esc(x.w.m)}`}}
const typeWord=x=>({type:"type",q:`<p class="qlabel">Viết bằng tiếng Đức${x.w.a?" (kèm der/die/das)":""}</p><div class="qbig vi">${esc(x.w.m)}</div>`,w:x,art:true});
const dictWord=x=>({type:"type",q:`<p class="qlabel">Nghe rồi viết lại${x.w.a?" (kèm der/die/das)":""}</p>`,w:x,art:true,audio:true,say:{text:V.term(x.w)}});
function fillItem(f){
  const [sent,ans,hint,...wrong]=f;
  if(wrong.length)return{type:"mc",q:`<p class="qlabel">Chọn từ đúng điền vào chỗ trống</p><div class="tsent">${esc(sent).replace(/___/g,'<span class="tgap">___</span>')}</div>${hint?`<div class="small center">${esc(hint)}</div>`:""}`,
    opts:shuffle([ans,...wrong]).map(o=>({h:esc(o),ok:o===ans})),after:`Đáp án: <b>${esc(sent.replace("___",ans))}</b>`,sayAfter:sent.replace("___",ans).replace(/\(.*?\)/g,"")};
  return{type:"fill",sent,ans:ans.split("…").map(s=>s.trim()),hint}}
function genDrills(k,limit=8){
  const out=[],ws=kitW(k),prior=priorW(k.n),stage=stageW(k.s);
  const nounsFrom=(pred,n)=>{let a=ws.filter(pred);if(a.length<n)a=a.concat(shuffle(stage.filter(x=>pred(x)&&!a.includes(x))));if(a.length<n)a=a.concat(shuffle(prior.filter(x=>pred(x)&&!a.includes(x))));return a.slice(0,n)};
  for(const spec of k.G||[]){
    const [type,arg=""]=spec.split(":");
    if(type==="art")nounsFrom(x=>x.w.t==="n"&&!!x.w.a&&!x.w.w.includes(" "),4).forEach(x=>out.push({type:"mc",q:`<p class="qlabel">Chọn đúng giống</p><div class="qbig">${esc(x.w.w)}</div><div class="small center">${esc(x.w.m)}</div>`,layout:"g3",fixed:true,
      opts:["der","die","das"].map(a=>({h:`<span class="g-${a}">${a}</span>`,ok:a===x.w.a})),w:x,after:`<b>${V.termHtml(x.w)}</b> ${V.genderHint(x.w)?"<br>"+V.genderHint(x.w):""}`,sayAfter:V.term(x.w)}));
    if(type==="pl")nounsFrom(x=>x.w.t==="n"&&/^die \S+$/.test(x.w.pl||"")&&x.w.pl!=="die "+x.w.w,3).forEach(x=>out.push({type:"type",q:`<p class="qlabel">Viết dạng số nhiều</p><div class="qbig">${V.termHtml(x.w)}</div><div class="small center">${esc(x.w.m)}</div>`,
      ans:[x.w.pl,x.w.pl.replace(/^die /,"")],strict:true,ph:"die …",after:`Số nhiều: <b>${esc(x.w.pl)}</b>`,sayAfter:x.w.pl,w:x}));
    if(type==="akk"){const verb=k.s===4?"Ich habe":(k.s===7||k.s===8)?"Ich möchte":"Ich brauche";
      nounsFrom(countable,4).forEach(x=>{const ok={der:"einen",die:"eine",das:"ein"}[x.w.a];out.push({type:"mc",q:`<p class="qlabel">Akkusativ – chọn mạo từ đúng</p><div class="tsent">${verb} <span class="tgap">___</span> ${esc(x.w.w)}.</div><div class="small center">(${esc(x.w.m)} – ${x.w.a})</div>`,
        layout:"g3",fixed:true,opts:["einen","eine","ein"].map(o=>({h:o,ok:o===ok})),w:x,after:`${verb} <b>${ok} ${esc(x.w.w)}</b>. ${x.w.a==="der"?"Giống đực: ein → <b>einen</b> ở cách 4.":"Giống "+(x.w.a==="die"?"cái":"trung")+" không đổi ở cách 4."}`,sayAfter:`${verb} ${ok} ${x.w.w}.`})})}
    if(type==="kein")nounsFrom(x=>x.w.t==="n"&&!!x.w.a&&!x.w.w.includes(" "),3).forEach(x=>{const plOnly=/chỉ có số nhiều/.test(x.w.pl||"");const ok=plOnly||x.w.a==="die"?"keine":"kein";
      out.push({type:"mc",q:`<p class="qlabel">Phủ định danh từ: kein hay keine?</p><div class="tsent">Das ${plOnly?"sind":"ist"} <span class="tgap">___</span> ${esc(x.w.w)}.</div><div class="small center">(${esc(x.w.m)} – ${x.w.a})</div>`,layout:"g3",fixed:true,
        opts:["kein","keine","keinen"].map(o=>({h:o,ok:o===ok})),w:x,after:`Das ${plOnly?"sind":"ist"} <b>${ok} ${esc(x.w.w)}</b>.`,sayAfter:`Das ${plOnly?"sind":"ist"} ${ok} ${x.w.w}.`})});
    if(type==="poss"){const P=[["mein","của tôi"],["dein","của bạn"],["unser","của chúng tôi"],["Ihr","của ông/bà"],["sein","của anh ấy"]];
      nounsFrom(x=>x.w.t==="n"&&!!x.w.a&&!x.w.w.includes(" "),4).forEach(x=>{const [p,vi]=pick(P),plOnly=/chỉ có số nhiều/.test(x.w.pl||""),ok=plOnly||x.w.a==="die"?p+"e":p;
        out.push({type:"mc",q:`<p class="qlabel">Chọn dạng đúng</p><div class="tsent">Das ${plOnly?"sind":"ist"} <span class="tgap">___</span> ${esc(x.w.w)}.</div><div class="small center">(${vi} · ${x.w.a} ${esc(x.w.w)})</div>`,layout:"g3",fixed:true,
          opts:[p,p+"e",p+"en"].map(o=>({h:o,ok:o===ok})),w:x,after:`Das ${plOnly?"sind":"ist"} <b>${ok} ${esc(x.w.w)}</b>. ${ok.endsWith("e")?"Giống cái / số nhiều → thêm -e.":"Giống đực / trung → không thêm gì."}`})})}
    if(type==="dat"){const preps=arg.split(",");
      nounsFrom(x=>x.w.t==="n"&&!!x.w.a&&!x.w.w.includes(" ")&&!/chỉ có số nhiều/.test(x.w.pl||""),4).forEach(x=>{const p=pick(preps),ok=x.w.a==="die"?"der":"dem";
        out.push({type:"mc",q:`<p class="qlabel">Ở đâu? (Wo?) → Dativ</p><div class="tsent">${esc(p)} <span class="tgap">___</span> ${esc(x.w.w)}</div><div class="small center">(${esc(x.w.m)} – ${x.w.a})</div>`,layout:"g3",fixed:true,
          opts:["dem","der","den"].map(o=>({h:o,ok:o===ok})),w:x,after:`<b>${esc(p)} ${ok} ${esc(x.w.w)}</b> — der/das → dem, die → der (cách 3).`,sayAfter:`${p} ${ok} ${x.w.w}`})})}
    if(type==="conj"||type==="modal"||type==="sep"){
      const verbs=arg.split(",").filter(v=>window.VERB_CONJ[v]),used=new Set();
      const n=type==="conj"?Math.min(5,2+verbs.length*2):3;
      for(let i=0;i<n&&verbs.length;i++){
        const v=verbs[i%verbs.length],c=window.VERB_CONJ[v],forms=c.p.split(";").map(x=>x.replace(/^\*/,"").split("|")[0]);
        let pi;do{pi=Math.floor(Math.random()*6)}while(used.has(v+pi)&&used.size<12);used.add(v+pi);
        const pron=pi===2?pick(["er","sie","es"]):pi===5?pick(["sie","Sie"]):["ich","du","","wir","ihr"][pi];
        const f=forms[pi],parts=f.split(" ");
        if(type==="sep"&&parts.length>1){const P=pron[0].toUpperCase()+pron.slice(1);
          out.push({type:"fill",sent:`${P} ___ heute ___.`,ans:[parts[0],parts.slice(1).join(" ")],hint:`(${v})`,say:`${P} ${parts[0]} heute ${parts.slice(1).join(" ")}.`});continue}
        if(type==="modal"){const PH=["heute arbeiten","gut schwimmen","Deutsch sprechen","hier parken","im Bett bleiben","eine Fahrkarte kaufen","das Fenster öffnen"];const P=pron[0].toUpperCase()+pron.slice(1),ph=pick(PH);
          out.push({type:"fill",sent:`${P} ___ ${ph}.`,ans:[f],hint:`(${v})`,say:`${P} ${f} ${ph}.`});continue}
        out.push({type:"type",q:`<p class="qlabel">Chia động từ <b>${esc(v)}</b></p><div class="qbig"><span class="small" style="font-size:18px">${esc(pron)}</span> ___</div>`,ans:[f,f.replace(" ","…")],ph:"dạng đúng…",
          after:`${esc(pron)} <b>${esc(f)}</b>${parts.length>1?" — động từ tách: phần “"+esc(parts.slice(1).join(" "))+"” đứng cuối câu.":""}`,sayAfter:`${pron} ${f}`,verb:v})}}
    if(type==="pf"){const verbs=arg.split(",").filter(v=>window.VERB_CONJ[v]&&!/\(/.test(window.VERB_CONJ[v].pf));
      const AUX={hat:["habe","hast","hat","haben","habt","haben"],ist:["bin","bist","ist","sind","seid","sind"]};
      verbs.slice(0,4).forEach(v=>{const pf=window.VERB_CONJ[v].pf.replace(/^\*/,"").split("|")[0],aux=pf.split(" ")[0],part=pf.split(" ").slice(1).join(" "),pi=pick([0,1,3]);
        const pron=["ich","du","","wir"][pi],a=AUX[aux][pi],P=pron[0].toUpperCase()+pron.slice(1);
        out.push({type:"fill",sent:`${P} ___ gestern ___.`,ans:[a,part],hint:`(Perfekt của ${v} – dùng ${aux==="hat"?"haben":"sein"})`,say:`${P} ${a} gestern ${part}.`})})}
    if(type==="num"){
      const price=arg==="price";let [a,b]=price?[0,0]:arg.split("-").map(Number);
      for(let i=0;i<4;i++){
        if(price){const e=1+Math.floor(Math.random()*19),c=pick([0,10,20,25,49,50,80,90,95,99]),w=(e===1?"ein":numDe(e))+" Euro"+(c?" "+numDe(c):""),dig=`${e},${String(c).padStart(2,"0")}`;
          out.push(i%2?{type:"type",_expect:w,q:`<p class="qlabel">Viết giá tiền bằng chữ</p><div class="qbig">${dig} €</div>`,ans:[w,w.replace(/^ein /,"eins ")],after:`<b>${esc(w)}</b>`,sayAfter:w}
            :{type:"type",_expect:dig,q:`<p class="qlabel">Nghe giá tiền rồi viết bằng số (vd: 3,49)</p>`,audio:true,say:{text:w},check:inp=>{const t=String(inp).replace(/[€\s]/g,"").replace(".",",");return t===dig||t===dig.replace(/,00$/,"")},after:`<b>${dig} €</b> = ${esc(w)}`});continue}
        const n=a+Math.floor(Math.random()*(b-a+1)),w=numDe(n);
        out.push(i%2?{type:"type",_expect:w,q:`<p class="qlabel">Viết số bằng chữ tiếng Đức</p><div class="qbig">${n}</div>`,check:inp=>{const f=fold(inp).replace(/ /g,"");const m=DC.numMap().get(f);return!!m&&m.n===n&&m.kind!=="ord"},after:`${n} = <b>${esc(w)}</b>`,sayAfter:w}
          :{type:"type",_expect:String(n),q:`<p class="qlabel">Nghe rồi viết số (bằng chữ số)</p>`,audio:true,say:{text:w},check:inp=>String(inp).replace(/\D/g,"")===String(n),after:`<b>${n}</b> = ${esc(w)}`})}}
    if(type==="time"){
      for(let i=0;i<4;i++){const H=arg==="full"?pick([1,2,3,6,7,8,9,10,11,12,13,15,18,20,22]):1+Math.floor(Math.random()*11),M=arg==="halb"?30:arg==="viertel"?pick([15,45]):0;
        const t=timeDe(H,M),shown=`${H}:${String(M).padStart(2,"0")}`;
        out.push({type:"type",q:`<p class="qlabel">Mấy giờ rồi? Viết bằng chữ${arg==="full"?"":" (kiểu nói hằng ngày)"}</p><div class="qbig">🕒 ${shown}</div>`,ans:t.acc,after:`<b>${esc(t.inf)}</b>${M?` (hoặc chính thức: ${esc(t.acc[2])})`:""}`,sayAfter:"Es ist "+t.inf})}}
    if(type==="ord")for(let i=0;i<4;i++){const n=pick([1,2,3,4,5,7,8,10,12,20,21,30]),w=ordW(n);out.push({type:"type",q:`<p class="qlabel">Viết số thứ tự bằng chữ</p><div class="qbig">${n}.</div>`,ans:[w,w+"n","der "+w,"die "+w,"das "+w],after:`${n}. = <b>${esc(w)}</b>`,sayAfter:w})}
    if(type==="date")for(let i=0;i<3;i++){const d=1+Math.floor(Math.random()*28),m=Math.floor(Math.random()*12),w=ordW(d);
      out.push({type:"type",q:`<p class="qlabel">Đọc ngày tháng (Heute ist …)</p><div class="qbig">${d}.${m+1}.</div>`,ans:[`der ${w} ${MONTHS[m]}`,`${w} ${MONTHS[m]}`,`heute ist der ${w} ${MONTHS[m]}`,`am ${w}n ${MONTHS[m]}`],after:`<b>der ${esc(w)} ${MONTHS[m]}</b> · vào ngày: <b>am ${esc(w)}n ${MONTHS[m]}</b>`,sayAfter:`der ${w} ${MONTHS[m]}`})}
    if(type==="seq"){const L=arg==="months"?MONTHS:DAYS;for(let i=0;i<3;i++){const j=Math.floor(Math.random()*L.length),nx=L[(j+1)%L.length];
      out.push({type:"mc",q:`<p class="qlabel">${arg==="months"?"Tháng":"Ngày"} nào đến ngay sau?</p><div class="qbig">${esc(L[j])} → ?</div>`,opts:shuffle([nx,...shuffle(L.filter(x=>x!==nx&&x!==L[j])).slice(0,2)]).map(o=>({h:esc(o),ok:o===nx})),after:`${esc(L[j])} → <b>${esc(nx)}</b>`,sayAfter:nx})}}
    if(type==="opp"){const names=new Set([...ws,...stage].map(x=>x.w.w));let pairs=ANT.filter(([a,b])=>ws.some(x=>x.w.w===a||x.w.w===b));
      if(pairs.length<3)pairs=pairs.concat(shuffle(ANT.filter(p=>!pairs.includes(p)&&(names.has(p[0])||names.has(p[1])))));
      if(pairs.length<3)pairs=pairs.concat(shuffle(ANT.filter(p=>!pairs.includes(p))));
      pairs.slice(0,3).forEach(([a,b])=>{const [q,ans]=Math.random()<.5?[a,b]:[b,a];const pool=[...new Set(ANT.flat())].filter(x=>x!==ans&&x!==q);
        out.push({type:"mc",q:`<p class="qlabel">Chọn từ trái nghĩa</p><div class="qbig">${esc(q)}</div>`,opts:shuffle([ans,...shuffle(pool).slice(0,2)]).map(o=>({h:esc(o),ok:o===ans})),after:`${esc(q)} ↔ <b>${esc(ans)}</b>`,sayAfter:`${q}, ${ans}`})})}
  }
  for(const f of k.F||[])out.push(fillItem(f));
  // trộn nhưng giữ nhóm F ở cuối nếu có nhiều
  return out.slice(0,limit)}

/* ---------- Ôn từ cũ (lặp lại ngắt quãng đơn giản) ---------- */
function dueWords(n,limit){
  const P=V.getP(),prior=priorW(n).filter(x=>P[V.keyOf(x.s,x.w)]);
  const lv=x=>P[V.keyOf(x.s,x.w)];
  const weak=shuffle(prior.filter(x=>lv(x).lv<3)).sort((a,b)=>lv(a).lv-lv(b).lv||lv(b).bad-lv(a).bad);
  let out=weak.slice(0,limit);
  if(out.length<limit)out=out.concat(shuffle(prior.filter(x=>!out.includes(x))).slice(0,Math.min(2,limit-out.length)));
  if(!out.length&&n>1)out=shuffle(KITS.filter(k=>k.n<n&&k.n>=n-3&&!k.rv).flatMap(kitW)).slice(0,4);
  return out}
function reviewItems(words,pool){return words.map((x,i)=>[()=>mcWord(x,pool,"de"),()=>listenWord(x,pool),()=>typeWord(x),()=>mcWord(x,pool,"vi")][i%4]())}

/* ---------- Xây từng bước của kit ---------- */
function textBlocks(k){return(k.X||[]).filter(x=>x.d&&x.d.length)}
function roleOf(lines){const sps=[...new Set(lines.map(l=>l[0]).filter(sp=>!isText(sp)))];if(!sps.length)return null;return sps.includes("Minh")?"Minh":(lines[1]&&!isText(lines[1][0])?lines[1][0]:sps[0])}
function buildStep(k,st){
  const ws=k.rv?(k.rv===1?shuffle(stageW(k.s)).slice(0,10):shuffle(allW()).slice(0,10)):kitW(k),pool=poolFor(k),X=textBlocks(k),main=X[0];
  const items=[];
  if(st==="on"){const due=dueWords(k.n,6);if(!due.length)return[];
    items.push({type:"intro",html:`<div class="tintro"><div class="big">🔁</div><p>Trước khi học bài mới, ôn nhanh <b>${due.length} từ</b> của các kit trước (ưu tiên từ bạn hay sai).</p></div>`,btn:"Bắt đầu ôn"});
    items.push(...reviewItems(due,pool.concat(priorW(k.n))));return items}
  if(st==="tu"){
    if(k.rv){items.push({type:"intro",html:`<div class="tintro"><div class="big">🧠</div><p>Ôn tập từ vựng cả chặng ${k.s}: ${ws.length} từ ngẫu nhiên.</p></div>`,btn:"Bắt đầu"});items.push(...reviewItems(shuffle(ws),pool));return items}
    items.push({type:"intro",html:`<div class="tintro"><div class="big">🆕</div><p>Kit này có <b>${ws.length} từ mới</b>. Xem từng thẻ: nghe 🔊, đọc thử 🎤, đọc ví dụ. Sau đó làm nhanh ${ws.length} câu kiểm tra.</p><div class="tchips">${ws.map(x=>`<span class="chip">${V.termHtml(x.w)}</span>`).join("")}</div></div>`,btn:"Xem thẻ từ"});
    ws.forEach((x,i)=>items.push({type:"card",w:x,idx:i+1,of:ws.length}));
    ws.forEach((x,i)=>items.push(mcWord(x,pool.length>4?pool:allW(),i%2?"vi":"de")));return items}
  if(st==="ngu"){
    if(k.rv){const kits=stageKits(k.s);
      items.push({type:"intro",html:`<div class="tnote"><b>Ôn ngữ pháp chặng ${k.s}: ${esc(STAGES[k.s-1].t)}</b><ul>${kits.map(x=>`<li>Kit ${x.n}: ${esc(x.t)}</li>`).join("")}</ul></div>`,btn:"Làm bài tập"});
      items.push(...shuffle(kits.flatMap(x=>genDrills(x,3))).slice(0,8));return items}
    if(k.nt&&k.nt.length)items.push({type:"intro",html:`<div class="tnote">${k.nt.map(p=>`<p>${p}</p>`).join("")}</div>`,btn:(k.G||k.F)?"Làm bài tập ngữ pháp":"Đã hiểu ✓",note:true});
    items.push(...genDrills(k));return items}
  if(st==="nghe"){
    if(k.rv!==2)shuffle(ws).slice(0,k.rv?4:Math.min(3,ws.length)).forEach(x=>items.push(listenWord(x,pool)));
    (k.C||[]).forEach(c=>{const A=c[1].split(",").map(s=>s.trim()),B=c[3].split(",").map(s=>s.trim());
      shuffle([...A.map(w=>[w,0]),...B.map(w=>[w,1])]).slice(0,4).forEach(([w,g])=>items.push({type:"mc",q:`<p class="qlabel">Nghe và chọn âm bạn nghe thấy</p>`,audio:true,say:{text:w},layout:"g2",fixed:true,
        opts:[c[0],c[2]].map((l,i)=>({h:esc(l),ok:i===g})),after:`Bạn vừa nghe: <b>${esc(w)}</b> → ${esc(g?c[2]:c[0])}`}))});
    X.forEach((x,xi)=>(x.L||[]).forEach((q,qi)=>items.push({type:"listenq",x,q,first:qi===0,title:x.t})));
    if(!k.rv&&ws.length)items.push(dictWord(pick(ws)));
    if(k.rv!==2&&main){const cand=main.d.filter(l=>!isText(l[0])||k.rv).map(l=>l[1]).filter(t=>{const n=t.split(/\s+/).length;return n>=3&&n<=8&&!/[–…]/.test(t)});if(cand.length)items.push({type:"dict",text:pick(cand)})}
    return items}
  if(st==="noi"){
    if(k.rv!==2){
      if(k.P&&k.P.length&&!k.rv){const P=k.P[0];items.push({type:"intro",html:`<div class="tintro"><p><b>Luyện phát âm: ${esc(P[0])}</b></p><p class="small">Bấm 🔊 nghe mẫu, rồi bấm 🎤 và đọc to. Chấm nghiêm: cần ≥ 80%, đúng đủ các từ và không từ nào dưới 60.</p></div>`,btn:"Bắt đầu"});
        P[1].split(",").map(s=>s.trim()).filter(Boolean).slice(0,5).forEach(t=>items.push({type:"speak",text:t,label:"Đọc to"}))}
      else items.push({type:"intro",html:`<div class="tintro"><div class="big">🗣</div><p>Đọc to từ mới, đóng vai, trả lời câu hỏi — rồi <b>nói trôi chảy cả đoạn hội thoại</b>. Máy chấm nghiêm: từng âm, đủ từ, tốc độ và chỗ ngắt.</p><p class="small">Không dùng được micro? Bạn vẫn có thể tự đánh giá.</p></div>`,btn:"Bắt đầu"});
      const hasP=!!(k.P&&k.P.length);
      if(!k.rv&&!hasP)ws.slice(0,4).forEach(x=>items.push({type:"speak",text:V.term(x.w),label:"Đọc to từ mới",w:x,sub:esc(x.w.m)}));
      if(main){const role=roleOf(main.d),maxR=hasP?2:3;
        if(role&&!k.rv){let c=0;main.d.forEach((l,i)=>{if(l[0]===role&&c<maxR&&l[1].split(/\s+/).length<=14){c++;items.push({type:"speak",text:l[1],label:`Đóng vai <b>${esc(role)}</b>`,ctx:i?main.d[i-1]:null,sub:esc(l[2])})}})}
        else shuffle(main.d.filter(l=>l[1].split(/\s+/).length<=14)).slice(0,2).forEach(l=>items.push({type:"speak",text:l[1],label:"Đọc to câu trong bài",sub:esc(l[2])}))}}
    (k.S||[]).forEach(s=>items.push({type:"answer",s}));
    // Bậc thang nói trôi chảy: nửa đầu → nửa sau → cả đoạn (mục tiêu cuối của mỗi kit)
    if(main){const Lp=main.d.filter(l=>l[1]&&!isText(l[0]));   // chỉ lời thoại (bỏ thực đơn, biển báo… đọc to không tự nhiên)
      if(Lp.length>=4&&k.rv!==2){const h=Math.ceil(Lp.length/2);
        items.push({type:"passage",lines:Lp.slice(0,h),label:"🧱 Nối câu (1/2): nói liền nửa đầu hội thoại"});
        items.push({type:"passage",lines:Lp.slice(h),label:"🧱 Nối câu (2/2): nói liền nửa sau"})}
      if(Lp.length>=2)items.push({type:"passage",lines:Lp,label:"🎯 Thử thách cuối kit: nói trôi chảy cả đoạn",final:true})}
    return items}
  if(st==="doc"){
    X.forEach(x=>{if(!(x.R&&x.R.length)&&k.rv===2)return;
      items.push({type:"read",x});(x.R||[]).forEach(q=>items.push({type:"readq",x,q}))});
    if(k.rv!==2&&main){const lines=main.d.filter(l=>l[2]&&l[1].split(/\s+/).length>=3);
      if(lines.length>=2){const l=pick(lines),others=shuffle(KITS.flatMap(kk=>(kk.X||[]).flatMap(x=>x.d)).filter(d=>d[2]!==l[2]&&d[1]!==l[1])).slice(0,2);
        items.push({type:"mc",q:`<p class="qlabel">Chọn bản dịch đúng</p><div class="tsent">${window.DictAPI?DictAPI.wrap(l[1]):esc(l[1])}</div>`,say:{text:l[1]},opts:shuffle([l,...others]).map(o=>({h:esc(o[2]),ok:o===l}))})}}
    return items}
  if(st==="viet"){
    if(k.rv!==2){const pickW=shuffle(ws).sort((a,b)=>(a.w.w.includes(" ")-b.w.w.includes(" "))).slice(0,k.rv?3:Math.min(3,ws.length));
      pickW.forEach(x=>items.push(typeWord(x)));
      const cl=shuffle(ws.filter(x=>x.w.ex&&/\[.+?\]/.test(x.w.ex))).sort((a,b)=>(b.w.t==="v")-(a.w.t==="v"))[0];if(cl&&!k.rv)items.push({type:"cloze",w:cl});
      if(main){const cand=main.d.map(l=>l).filter(l=>{const n=l[1].split(/\s+/).length;return n>=4&&n<=9&&!/[–…„]/.test(l[1])});if(cand.length)items.push({type:"order",l:pick(cand)})}}
    (k.W||[]).forEach(w=>items.push({type:"write",wq:w}));return items}
  return items}

/* ============ Bộ chạy bài ============ */
let RUN=null;
function startKit(n,only){
  const k=KITS[n-1];stopPlay();
  const steps=only?[only]:stepsOf(k);
  RUN={k,steps,si:-1,res:{},wrong:[],only:!!only,title:`Kit ${k.n}`};
  nextStep()}
function startQuick(){
  const done=Object.keys(S.kits).map(Number).filter(n=>S.kits[n].done);
  const maxN=done.length?Math.max(...done)+1:S.cur;
  const due=dueWords(maxN,10);if(!due.length){home();return}
  const fake={n:maxN,s:KITS[Math.min(179,maxN-1)].s};
  RUN={k:fake,quick:true,steps:["on"],si:0,res:{on:{r:0,n:0}},wrong:[],title:"Ôn nhanh",items:reviewItems(due,allW()),ii:0};
  renderItem()}
function nextStep(){
  stopPlay();RUN.si++;
  if(RUN.si>=RUN.steps.length)return finish();
  const st=RUN.steps[RUN.si];RUN.items=buildStep(RUN.k,st);RUN.ii=0;RUN.res[st]={r:0,n:0};
  if(!RUN.items.length)return nextStep();
  renderItem()}
function frame(){
  const st=RUN.steps[RUN.si];
  return `<div class="trun"><div class="vtop"><button class="ibtn" data-t="exit" aria-label="Thoát">✕</button><div class="vtitle">${esc(RUN.title)} · ${STEP[st].t}</div><span class="small center">${RUN.ii+1}/${RUN.items.length}</span></div>
    ${RUN.steps.length>1?`<div class="tsteps">${RUN.steps.map((s,i)=>`<span class="tstep ${i<RUN.si?"done":i===RUN.si?"on":""}" title="${STEP[s].t}"><b>${STEP[s].i}</b><small>${STEP[s].t}</small></span>`).join("")}</div>`:""}
    <span class="pbar"><i style="width:${Math.round(100*RUN.ii/RUN.items.length)}%"></i></span>
    <div class="card q" id="tq"></div></div>`}
let busyMic=false;
function renderItem(){
  stopPlay();if(busyMic){window.appScoreStop&&appScoreStop()}
  const it=RUN.items[RUN.ii];root.innerHTML=frame();window.scrollTo({top:0});
  const box=document.getElementById("tq");it.answered=false;
  (R[it.type]||R.intro)(it,box)}
function nextItem(){RUN.ii++;if(RUN.ii<RUN.items.length)renderItem();else stepDone()}
function nextBtn(label="Tiếp →"){return `<div class="row stickynext"><button class="prim" id="tnext">${label}</button></div>`}
/* Enter (khi không gõ chữ) = bấm nút Tiếp đang hiện */
document.addEventListener("keydown",e=>{if(e.key!=="Enter"||e.shiftKey||e.isComposing)return;const t=e.target;
  if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"||t.isContentEditable||t.tagName==="BUTTON"))return;
  const b=document.getElementById("tnext")||document.getElementById("tdone");if(b&&b.offsetParent){e.preventDefault();b.click()}});
function bindNext(){const b=document.getElementById("tnext");if(b){b.onclick=nextItem;b.focus({preventScroll:true})}}
/* ghi kết quả một câu */
function answer(it,good,fbHtml,opts={}){
  if(it.answered)return;it.answered=true;
  const st=RUN.steps[RUN.si],r=RUN.res[st];
  if(good!==null){r.n++;if(good)r.r++;if(it.w)V.mark(it.w.s,it.w.w,good);if(!good)RUN.wrong.push(it)}
  if(opts.direct){nextItem();return}   // kết quả đã hiện sẵn (vd. bài đọc to) → sang câu tiếp luôn, không hiện thêm khung phản hồi
  const box=document.getElementById("tq");
  box.querySelectorAll("input,textarea,.mco,.gopt,.tile").forEach(e=>{if(!e.closest(".fb"))e.disabled=true});
  const fb=document.createElement("div");fb.className="fb "+(good===null?"":good?"good":"bad");
  fb.innerHTML=(good===null?"":`<div class="fbh">${good?pick(["✅ Chính xác!","✅ Đúng rồi!","✅ Giỏi lắm!"]):"❌ Chưa đúng"}</div>`)+(fbHtml?`<div class="tfbtxt">${fbHtml}</div>`:"")+
    (it.w&&opts.info!==false?V.infoBlock(it.w.w,{set:it.w.s}):"")+
    (good===false&&opts.override?`<div class="row"><button class="ibtn mini" id="tover">Tôi trả lời đúng (gõ nhầm / máy chấm sai)</button></div>`:"")+nextBtn();
  box.appendChild(fb);
  const ov=document.getElementById("tover");if(ov)ov.onclick=()=>{r.r++;RUN.wrong=RUN.wrong.filter(x=>x!==it);if(it.w)V.mark(it.w.s,it.w.w,true);ov.textContent="✓ Đã tính là đúng";ov.disabled=true;fb.classList.remove("bad");fb.classList.add("good")};
  if(opts.say)setTimeout(()=>speak(opts.say),250);
  bindNext();fb.scrollIntoView({behavior:"smooth",block:"nearest"})}
const audioBtns=(say,big)=>`<div class="row"><button class="${big?"prim big2":"ibtn"}" data-t="play">🔊 Nghe</button><button class="ibtn${big?" big2":""}" data-t="slow">🐢 Chậm</button></div>`;
function bindAudio(box,say){const p=box.querySelector('[data-t="play"]'),s=box.querySelector('[data-t="slow"]');
  if(p)p.onclick=()=>say.lines?playLines(say.lines,false):speak(say.text,false);if(s)s.onclick=()=>say.lines?playLines(say.lines,true):speak(say.text,true)}
const kbdHtml=`<div class="kbd">${["ä","ö","ü","ß","Ä","Ö","Ü"].map(c=>`<button type="button" data-ch="${c}">${c}</button>`).join("")}</div>`;
function bindKbd(box){box.querySelectorAll("[data-ch]").forEach(b=>b.onmousedown=e=>e.preventDefault())}
function textHtml(x,opts={}){
  const wrap=t=>window.DictAPI?DictAPI.wrap(t):esc(t);
  return `<div class="ttext${opts.showVi?" showvi":""}">${x.t?`<div class="ttitle">${esc(x.t)}</div>`:""}${x.d.map((l,i)=>{const txt=isText(l[0]);
    return `<div class="tline${txt?" txt":""}${opts.role&&l[0]===opts.role?" me":""}" data-li="${i}">${l[0]&&!txt?`<span class="tsp">${esc(l[0])}${SPK_VI[l[0]]?` <i>(${SPK_VI[l[0]]})</i>`:""}</span>`:l[0]?`<span class="tsp">${esc(SPK_VI[l[0]]?SPK_VI[l[0]][0].toUpperCase()+SPK_VI[l[0]].slice(1):l[0])}</span>`:""}
      <div class="tde">${wrap(l[1])} <button class="spk sm" data-say="${esc(l[1])}" aria-label="Nghe câu">🔊</button></div><div class="tvi">${esc(l[2])}</div></div>`}).join("")}</div>`}

/* ---------- Các dạng bài ---------- */
const R={};
R.intro=(it,box)=>{box.innerHTML=it.html+nextBtn(it.btn||"Tiếp →");bindNext()};
R.card=(it,box)=>{box.innerHTML=`<p class="qlabel">Từ mới ${it.idx}/${it.of}</p>${V.infoBlock(it.w.w,{set:it.w.s})}${nextBtn(it.idx===it.of?"Làm bài kiểm tra nhanh →":"Từ tiếp →")}`;
  setTimeout(()=>speak(V.term(it.w.w)),200);bindNext()};
R.mc=(it,box)=>{
  const opts=it.opts;
  box.innerHTML=`${it.q||""}${it.audio?audioBtns(it.say,true):it.say?`<div class="row"><button class="ibtn mini" data-t="play">🔊 Nghe</button></div>`:""}
    <div class="${it.layout==="g3"?"gopts":it.layout==="g2"?"gopts g2":"mcopts"}">${opts.map((o,i)=>`<button class="${it.layout?"gopt":"mco"}" data-o="${i}">${o.h}</button>`).join("")}</div>`;
  if(it.say){bindAudio(box,it.say);setTimeout(()=>it.say.lines?playLines(it.say.lines):speak(it.say.text),250)}
  box.querySelectorAll("[data-o]").forEach(b=>b.onclick=()=>{if(it.answered)return;const o=opts[+b.dataset.o];b.classList.add(o.ok?"right":"wrong");
    if(!o.ok)box.querySelectorAll("[data-o]").forEach((x,i)=>{if(opts[i].ok)x.classList.add("right")});
    answer(it,o.ok,it.after||"",{say:it.sayAfter,info:!!it.w&&!o.ok})})};
R.type=(it,box)=>{
  box.innerHTML=`${it.q}${it.audio?audioBtns(it.say,true):""}<form class="ansf" id="tform"><input id="tans" data-kbd="1" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(it.ph||(it.w&&it.w.w.a?"vd: der Tisch":"Nhập câu trả lời…"))}">${kbdHtml}
    <div class="row"><button type="button" class="ibtn" data-t="hint">Gợi ý</button><button type="button" class="ibtn" data-t="idk">Không biết</button><button class="prim">Kiểm tra</button></div></form><div class="small center" id="thint"></div>`;
  bindKbd(box);if(it.say){bindAudio(box,it.say);setTimeout(()=>speak(it.say.text),300)}
  const inp=document.getElementById("tans");setTimeout(()=>inp.focus({preventScroll:true}),60);
  const expect=()=>it.w?V.term(it.w.w):(it.ans?it.ans[0]:"");
  box.querySelector('[data-t="hint"]').onclick=()=>{const e=expect();document.getElementById("thint").innerHTML=e?`Bắt đầu bằng: <b>${esc(e.slice(0,Math.min(e.length,(it.w&&it.w.w.a?it.w.w.a.length+1:0)+2)))}…</b> (${e.length} ký tự)`:"Nghe lại thật kỹ nhé."};
  box.querySelector('[data-t="idk"]').onclick=()=>{inp.value="";submit(true)};
  const submit=(gaveUp)=>{if(it.answered)return;const v=inp.value;
    if(it.check){const ok=!gaveUp&&it.check(v);inp.classList.add(ok?"right":"wrong");answer(it,ok,(ok?"":`Bạn viết: <b>${esc(v||"(trống)")}</b><br>`)+(it.after||""),{say:it.sayAfter||(it.say&&it.say.text),override:!gaveUp});return}
    if(it.w&&it.art){const r=V.check(v,it.w.w,!!it.w.w.a);inp.classList.add(r.ok?"right":"wrong");answer(it,r.ok,(r.ok?"":`Đáp án: <b>${V.termHtml(it.w.w)}</b>. `)+(r.msg||""),{say:V.term(it.w.w),override:!gaveUp&&!r.ok&&r.near});return}
    const r=gaveUp?{v:"bad"}:cmp(v,it.ans),ok=r.v==="ok";inp.classList.add(ok?"right":"wrong");
    answer(it,ok,(ok?"":`Bạn viết: <b>${esc(v||"(trống)")}</b> ${cmpMsg(r)}<br>`)+(it.after||`Đáp án: <b>${esc(it.ans[0])}</b>`),{say:it.sayAfter,override:!gaveUp&&r.v==="near",info:false})};
  document.getElementById("tform").onsubmit=e=>{e.preventDefault();submit(false)}};
R.fill=(it,box)=>{
  let b=0;const html=esc(it.sent).replace(/___/g,()=>`<input class="blank" data-b="${b}" data-kbd="1" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${Math.max(5,(it.ans[b++]||"").length+2)}ch" aria-label="Chỗ trống">`);
  box.innerHTML=`<p class="qlabel">Điền vào chỗ trống</p><div class="cloze">${html}</div>${it.hint?`<div class="small center">${esc(it.hint)}</div>`:""}
    <form id="tform">${kbdHtml}<div class="row"><button type="button" class="ibtn" data-t="hint">Gợi ý</button><button class="prim">Kiểm tra</button></div></form><div class="small center" id="thint"></div>`;
  bindKbd(box);const ins=[...box.querySelectorAll(".blank")];setTimeout(()=>ins[0]&&ins[0].focus({preventScroll:true}),60);
  ins.forEach(i=>i.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();document.getElementById("tform").requestSubmit()}});
  box.querySelector('[data-t="hint"]').onclick=()=>{document.getElementById("thint").innerHTML="Bắt đầu bằng: "+it.ans.map(a=>`<b>${esc(a.slice(0,1))}…</b>`).join(", ")};
  document.getElementById("tform").onsubmit=e=>{e.preventDefault();if(it.answered)return;let all=true;const msgs=[];
    ins.forEach((inp,i)=>{const r=cmp(inp.value,[it.ans[i]]),ok=r.v==="ok";inp.classList.add(ok?"right":"wrong");if(!ok){all=false;const m=cmpMsg(r);if(m)msgs.push(m)}});
    const full=it.sent.split("___").map((p,i)=>p+(i<it.ans.length?`<b>${esc(it.ans[i])}</b>`:"")).join("");
    answer(it,all,`Câu đúng: ${full}${msgs.length?"<br>"+msgs.join("<br>"):""}`,{say:(it.say||it.sent.split("___").map((p,i)=>p+(it.ans[i]||"")).join("")).replace(/\(.*?\)/g,""),override:msgs.some(m=>/Gần đúng/.test(m))})}};
R.cloze=(it,box)=>{
  const w=it.w.w,parts=w.ex.split(/\[(.+?)\]/),blanks=parts.filter((_,i)=>i%2);let b=0;
  box.innerHTML=`<p class="qlabel">Điền từ còn thiếu vào câu</p><div class="cloze">${parts.map((p,i)=>i%2?`<input class="blank" data-b="${b++}" data-kbd="1" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${Math.max(5,p.length+2)}ch" aria-label="Chỗ trống">`:esc(p)).join("")}</div>
    <div class="small center">${esc(w.exv||"")}</div><div class="small center">Gợi ý: <b>${esc(w.m)}</b>${w.t==="v"?" – nhớ chia động từ":""}</div>
    <form id="tform">${kbdHtml}<div class="row"><button type="button" class="ibtn" data-t="hint">Chữ cái đầu</button><button class="prim">Kiểm tra</button></div></form><div class="small center" id="thint"></div>`;
  bindKbd(box);const ins=[...box.querySelectorAll(".blank")];setTimeout(()=>ins[0]&&ins[0].focus({preventScroll:true}),60);
  ins.forEach(i=>i.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();document.getElementById("tform").requestSubmit()}});
  box.querySelector('[data-t="hint"]').onclick=()=>{document.getElementById("thint").innerHTML="Bắt đầu bằng: "+blanks.map(x=>`<b>${esc(x[0])}…</b> (${x.length})`).join(", ")};
  document.getElementById("tform").onsubmit=e=>{e.preventDefault();if(it.answered)return;let all=true;const msgs=[];
    ins.forEach((inp,i)=>{const r=cmp(inp.value,[blanks[i]]),ok=r.v==="ok";inp.classList.add(ok?"right":"wrong");if(!ok){all=false;msgs.push(`Bạn viết: <b>${esc(inp.value||"(trống)")}</b> ${cmpMsg(r)}`)}});
    const info=V.explainForm(w,blanks.join(" "));
    answer(it,all,info.html+(msgs.length?"<br>"+msgs.join("<br>"):""),{say:w.ex.replace(/[\[\]]/g,""),override:true})}};
R.order=(it,box)=>{
  const target=it.l[1].split(/\s+/);let tiles=target.map((t,i)=>({t,i}));do{tiles=shuffle(tiles)}while(tiles.length>2&&tiles.every((x,i)=>x.i===i));
  const sel=[];
  const draw=()=>{box.innerHTML=`<p class="qlabel">Sắp xếp thành câu đúng</p><div class="small center">${esc(it.l[2])}</div>
    <div class="tans">${sel.map((x,j)=>`<button class="tile on" data-s="${j}">${esc(x.t)}</button>`).join("")||'<span class="small">Bấm các từ bên dưới theo thứ tự…</span>'}</div>
    <div class="tiles">${tiles.map((x,j)=>sel.includes(x)?"":`<button class="tile" data-p="${j}">${esc(x.t)}</button>`).join("")}</div>
    <div class="row"><button class="ibtn" data-t="clr">Xoá</button><button class="prim" data-t="chk" ${sel.length===tiles.length?"":"disabled"}>Kiểm tra</button></div>`;
    box.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>{sel.push(tiles[+b.dataset.p]);draw()});
    box.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{sel.splice(+b.dataset.s,1);draw()});
    box.querySelector('[data-t="clr"]').onclick=()=>{sel.length=0;draw()};
    box.querySelector('[data-t="chk"]').onclick=()=>{const ok=fold(sel.map(x=>x.t).join(" "))===fold(target.join(" "));
      box.querySelector(".tans").classList.add(ok?"right":"wrong");answer(it,ok,`Câu đúng: <b>${esc(it.l[1])}</b>`,{say:it.l[1]})}};
  draw()};
async function micRun(btn,target,onDone,live,extra={}){
  if(busyMic){window.appScoreStop&&appScoreStop();return}
  if(!window.appScore){onDone(null,new Error("Máy không hỗ trợ nhận diện giọng nói."));return}
  busyMic=true;btn.classList.add("on");const lbl=btn.innerHTML;btn.innerHTML="⏳ Đợi mic…";
  const old=document.getElementById("tres");if(old)old.innerHTML="";   // xoá lỗi/kết quả của lần đọc trước
  if(live)live.innerHTML="";const lv=live?liveBind(live):null;
  try{const r=await appScore(target,{...extra,onReady:()=>{if(!busyMic)return;btn.innerHTML="⏹ Đang nghe… bấm để dừng & chấm";lv&&lv.ready()},
      onInterim:s=>{if(busyMic&&lv)lv.interim(s)},onLevel:v=>{lv&&lv.level(v)},
      onProcessing:()=>{btn.innerHTML="⏳ Đang chấm…";lv&&lv.processing()}});
    if(live)live.innerHTML="";onDone(r,null)}
  catch(e){if(live)live.innerHTML=lv&&lv.text?heardHtml(lv.text,"🎧 Máy đã nghe được:"):"";if(!(e&&e.cancelled))onDone(null,e)}
  finally{busyMic=false;btn.classList.remove("on");btn.innerHTML=lbl;const l=live&&live.querySelector(".lvl");if(l)l.remove()}}
R.speak=(it,box)=>{
  const long=it.text.split(/\s+/).length>3;let best=null;
  box.innerHTML=`<p class="qlabel">${it.label||"Đọc to"}</p>${it.ctx?`<div class="tctx"><span class="tsp">${esc(it.ctx[0])}:</span> ${esc(it.ctx[1])} <button class="spk sm" data-t="ctx">🔊</button></div>`:""}
    <div class="qbig${long?" tlong":""}">${esc(it.text)}</div>${it.sub?`<div class="small center">${it.sub}</div>`:""}
    <div class="row"><button class="ibtn" data-t="play">🔊 Nghe mẫu</button><button class="ibtn" data-t="slow">🐢</button></div>
    <div class="row"><button class="trybtn" data-t="mic">🎤 Đọc</button><button class="ibtn" data-t="skip">Bỏ qua</button></div>
    <div class="small center">Đọc xong có thể bấm 🎤 lần nữa để dừng và chấm ngay.</div><div class="small center tlive"></div><div class="tryres" id="tres"></div>`;
  bindAudio(box,{text:it.text});
  const c=box.querySelector('[data-t="ctx"]');if(c)c.onclick=()=>playLines([it.ctx]);
  if(it.ctx)setTimeout(()=>playLines([it.ctx]),250);
  box.querySelector('[data-t="skip"]').onclick=()=>{if(it.answered)return;it.answered=true;nextItem()};
  box.querySelector('[data-t="mic"]').onclick=e=>micRun(e.currentTarget,it.text,(r,err)=>{
    const res=document.getElementById("tres");if(!res)return;
    if(err){res.innerHTML=`<div class="tryerr">⚠️ ${esc(err.message||err)}</div><div class="row"><button class="ibtn" data-t="selfok">✓ Tôi đọc được</button><button class="ibtn" data-t="selfno">✗ Chưa ổn</button></div>`;
      res.querySelector('[data-t="selfok"]').onclick=()=>answer(it,true,"",{direct:true});res.querySelector('[data-t="selfno"]').onclick=()=>answer(it,false,"",{direct:true});return}
    if(!best||r.pct>best.pct)best=r;const j=judge(r,kindOf(it.text));if(j.ok)it.passed=true;
    res.innerHTML=V.renderTry(r)+fluHtml(r)+verdictHtml(j,j.ok);
    if(!it.answered){const ok=!!it.passed;
      res.insertAdjacentHTML("beforeend",`<div class="row stickynext"><button class="prim${ok?"":" soft"}" id="tdone">${ok?`✅ Đạt · Tiếp →`:"Bỏ qua, tiếp →"}</button></div>`);
      document.getElementById("tdone").onclick=()=>answer(it,ok,"",{direct:true})}
  },box.querySelector(".tlive"))};
/* ---------- Chấm nghiêm (Azure) ----------
   word: ≥80%, không từ nào dưới 60, phải đúng hết các từ
   sent: như trên + trôi chảy ≥65, không ngắt >1 giây giữa câu
   passage: ≥75%, đúng ≥90% số từ, trôi chảy ≥70, tốc độ ≥70 từ/phút, ngắt giữa câu rất ít, ít từ yếu */
function judge(r,kind){
  const why=[];
  if(r.mode!=="azure"){const thr=kind==="passage"?75:70;if(r.pct<thr)why.push(`cần ít nhất ${thr}%`);
    return{ok:!why.length,why,note:"Chế độ miễn phí chỉ biết máy nghe ra chữ gì, không chấm được từng âm. Muốn chấm nghiêm hãy nhập khóa Azure trong ⚙."}}
  const W=r.words||[],sc=r.scores||{},P=kind==="passage";
  const thr=P?75:80;if(r.pct<thr)why.push(`tổng điểm cần ≥ ${thr}% (bạn: ${r.pct}%)`);
  const right=sc["Đúng từ"]??sc["Đầy đủ"];
  if(right!=null&&right<(P?90:100))why.push(P?`nói đúng ít nhất 90% số từ (bạn: ${Math.round(right)}%)`:"phải nói đủ và đúng tất cả các từ");
  const weak=W.filter(w=>w.acc<60),maxWeak=P?Math.max(1,Math.floor(W.length/12)):0;
  if(weak.length>maxWeak)why.push(`từ đọc chưa chuẩn (dưới 60): ${weak.slice(0,5).map(w=>`<b>${esc(w.w)}</b> ${w.acc}`).join(", ")}${weak.length>5?"…":""}`);
  const fl=sc["Trôi chảy"];
  if(kind!=="word"&&fl!=null&&fl<(P?70:65))why.push(`độ trôi chảy cần ≥ ${P?70:65} (bạn: ${Math.round(fl)})`);
  if(r.flu&&kind!=="word"){const lim=P?Math.max(1,Math.floor(W.length/25)):0;
    if(r.flu.mid>lim)why.push(`ngắt quãng giữa câu ${r.flu.mid} lần (tối đa ${lim}) — nói liền mạch, chỉ nghỉ ở dấu chấm/phẩy`);
    if(P&&r.flu.wpm&&r.flu.wpm<70)why.push(`nói hơi chậm: ${r.flu.wpm} từ/phút (cần ≥ 70)`)}
  return{ok:!why.length,why}}
const kindOf=t=>t.split(/\s+/).length<=3?"word":"sent";
function fluHtml(r){if(!r||!r.flu)return"";const f=r.flu;
  return `<div class="tflu"><span>⏱ <b>${f.wpm||"–"}</b> từ/phút</span><span>⏸ Ngắt giữa câu: <b>${f.mid}</b></span><span>Lâu nhất: <b>${f.longest}s</b></span></div>`}
function verdictHtml(j,passed){
  if(passed)return `<div class="tverd good">✅ <b>Đạt chuẩn!</b> Muốn tốt hơn nữa thì bấm 🎤 nói lại.</div>`;
  return `<div class="tverd bad"><b>Chưa đạt chuẩn:</b><ul>${j.why.map(x=>`<li>${x}</li>`).join("")}</ul>${j.note?`<div class="small">${j.note}</div>`:""}<div class="small">Nghe mẫu 🔊, bắt chước ngữ điệu rồi bấm 🎤 nói lại.</div></div>`}
const pclean=t=>String(t).replace(/[„“”"]/g,"").replace(/…/g,"").replace(/\s+–\s+/g,", ").replace(/\s+/g," ").trim();
/* Nói cả đoạn: nhìn chữ Đức, hoặc chỉ nhìn tiếng Việt (nói thuộc lòng) */
R.passage=(it,box)=>{
  const L=it.lines,target=L.map(l=>pclean(l[1])).join(" ");let mode="read",best=null,passed=false,starred=false;
  const say=L.map(l=>[l[0],l[1]]);
  const draw=()=>{
    box.innerHTML=`<p class="qlabel">${it.label}</p>
      <div class="pmodes"><button class="chip" aria-pressed="${mode==="read"}" data-m="read">📖 Nhìn chữ Đức</button><button class="chip" aria-pressed="${mode==="vi"}" data-m="vi">🇻🇳 Chỉ nhìn tiếng Việt</button></div>
      <div class="ptext">${L.map((l,i)=>`<div class="pline" data-i="${i}">${l[0]&&!isText(l[0])?`<span class="tsp">${esc(l[0])}:</span> `:""}${mode==="vi"?`<span class="pvi">${esc(l[2]||"")}</span>`:`<span class="pde">${esc(l[1])}</span>`}</div>`).join("")}</div>
      <div class="row"><button class="ibtn" data-t="playall">🔊 Nghe cả đoạn</button><button class="ibtn" data-t="slowall">🐢</button></div>
      <div class="row"><button class="trybtn" data-t="mic">🎤 Nói cả đoạn</button><button class="ibtn" data-t="skip">Bỏ qua</button></div>
      <div class="small center">${mode==="vi"?"Nhìn tiếng Việt, nói lại bằng tiếng Đức — đây là mục tiêu cuối: nói thuộc, trôi chảy.":"Nói liền một mạch, không đọc tên nhân vật."} Nói xong bấm 🎤 để dừng và chấm.</div>
      <div class="small center tlive"></div><div class="tryres" id="tres"></div>`;
    box.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{if(busyMic)return;mode=b.dataset.m;draw()});
    const hl=i=>box.querySelectorAll(".pline").forEach((e,k)=>e.classList.toggle("on",k===i));
    box.querySelector('[data-t="playall"]').onclick=()=>playLines(say,false,hl);
    box.querySelector('[data-t="slowall"]').onclick=()=>playLines(say,true,hl);
    box.querySelector('[data-t="skip"]').onclick=()=>{if(it.answered)return;it.answered=true;nextItem()};
    box.querySelector('[data-t="mic"]').onclick=e=>{stopPlay();micRun(e.currentTarget,target,(r,err)=>{
      const res=document.getElementById("tres");if(!res)return;
      if(err){res.innerHTML=`<div class="tryerr">⚠️ ${esc(err.message||err)}</div>`;if(!it.answered)res.insertAdjacentHTML("beforeend",`<div class="row stickynext"><button class="prim soft" id="tdone">Bỏ qua, tiếp →</button></div>`);
        const d=document.getElementById("tdone");if(d)d.onclick=()=>answer(it,false,"",{direct:true});return}
      const j=judge(r,"passage");if(j.ok){passed=true;if(mode==="vi")starred=true}
      if(!best||r.pct>best.pct)best=r;
      res.innerHTML=passageResult(r,L)+verdictHtml(j,j.ok)+
        (passed&&mode==="read"&&it.final?`<div class="small center">⭐ Thử tiếp chế độ <b>🇻🇳 Chỉ nhìn tiếng Việt</b> để nói thuộc lòng.</div>`:"");
      if(it.final&&!RUN.quick){const ks=S.kits[RUN.k.n]=S.kits[RUN.k.n]||{steps:{},best:{}};const f=ks.flu||{};
        ks.flu={best:Math.max(f.best||0,j.ok?r.pct:0),star:!!(f.star||starred),tries:(f.tries||0)+1};saveS()}
      if(!it.answered){res.insertAdjacentHTML("beforeend",`<div class="row stickynext"><button class="prim${passed?"":" soft"}" id="tdone">${passed?`${starred?"⭐":"✅"} Tiếp →`:"Bỏ qua, tiếp →"}</button></div>`);
        document.getElementById("tdone").onclick=()=>answer(it,passed,"",{direct:true})}
    },box.querySelector(".tlive"),{passage:true})}};
  draw()};
function passageResult(r,L){
  const cls=v=>v>=80?"ok":v>=60?"mid":"bad";let k=0;
  const text=r.words&&r.words.length?L.map(l=>`<div class="pline">${pclean(l[1]).split(/\s+/).map(t=>{if(!/[\p{L}\d]/u.test(t))return esc(t);const w=r.words[k++];return `<span class="${w?cls(w.acc):"bad"}" title="${w?w.acc:0}">${esc(t)}</span>`}).join(" ")}</div>`).join(""):`<div>${r.targetHtml||""}</div>`;
  const c=r.pct>=85?"good":r.pct>=60?"mid":"bad",col={good:"var(--green)",mid:"var(--orange)",bad:"var(--red)"}[c];
  const weak=(r.words||[]).filter(w=>w.acc<70).slice(0,6);
  return `<div class="tryv ${c}">Cả đoạn<span class="trypct">${r.pct}%</span></div><div class="meter"><i style="width:${r.pct}%;background:${col}"></i></div>
    <div class="tryterm ptry">${text}</div>
    ${r.scores?`<div class="tryscores">${Object.entries(r.scores).map(([k,v])=>`<div><b>${v==null?"–":Math.round(v)}</b><span>${k}</span></div>`).join("")}</div>`:""}${fluHtml(r)}
    ${weak.length?`<div class="small">Từ cần luyện:</div>`+weak.map(w=>`<div class="tryph"><b>${esc(w.w)}</b>${window.ipaFor&&ipaFor(w.w)&&!ipaFor(w.w).includes("…")?` <span class="ipa-in">/${esc(ipaFor(w.w))}/</span>`:""} · ${w.acc}<br>${(w.ph||[]).map(x=>`<span class="ph ${x.s>=80?"g":x.s>=60?"o":"r"}">${esc(x.p)} ${x.s}</span>`).join("")}</div>`).join(""):""}
    ${r.heard?`<div class="small">Máy nghe thành: <i>${esc(r.heard)}</i></div>`:""}${r.note?`<div class="small">${r.note}</div>`:""}${window.recRowHtml?recRowHtml({...r,target:null}):""}`}
R.answer=(it,box)=>{
  const [q,model,kw,hint]=it.s,target=model.split(" / ")[0].replace(/…/g," ").replace(/\s+/g," ").trim();
  box.innerHTML=`<p class="qlabel">Trả lời bằng lời nói</p>${hint?`<div class="tnote small">${esc(hint)}</div>`:""}<div class="qbig tlong">${esc(q)}</div>
    <div class="row"><button class="ibtn" data-t="play">🔊 Nghe câu hỏi</button><button class="ibtn" data-t="slow">🐢</button></div>
    <div class="row"><button class="trybtn" data-t="mic">🎤 Trả lời</button><button class="ibtn" data-t="model">Xem câu mẫu</button></div>
    <div class="small center">Nói xong bấm 🎤 lần nữa để dừng.</div><div class="small center tlive"></div><div id="tres"></div>`;
  bindAudio(box,{text:q.replace(/\(.*?\)/g,"")});setTimeout(()=>speak(q.replace(/\(.*?\)/g,"")),250);
  const showModel=(heard,chk)=>{const res=document.getElementById("tres");
    res.innerHTML=`${heard!=null?`<div class="tryres"><div class="small">Máy nghe được:</div><div><b>${esc(heard||"(không nghe ra)")}</b></div>${chk?`<div class="kwl">${chk.res.map(r=>`<span class="${r.ok?"ok":"no"}">${r.ok?"✓":"✗"} ${esc(r.g.split("/")[0])}</span>`).join("")}</div>`:""}</div>`:""}
      <div class="tmodel winfo"><div class="small">Câu mẫu:</div><div><b>${esc(model)}</b> <button class="spk sm" data-say="${esc(target)}" aria-label="Nghe câu mẫu">🔊</button><button class="spk sm trymic" data-tryread="${esc(target)}" aria-label="Đọc thử câu mẫu">🎤</button></div><div class="tryres"></div></div>`;
    if(it.answered)return;
    if(chk&&heard){answer(it,chk.ok,chk.ok?"Câu trả lời có đủ ý chính. 👍":"Câu trả lời còn thiếu ý (xem các ✗). Thử nói lại theo câu mẫu.",{info:false,override:!chk.ok});return}
    const row=document.createElement("div");row.className="row";row.innerHTML=`<button class="ibtn" data-t="selfok">✓ Tôi trả lời được</button><button class="ibtn" data-t="selfno">✗ Chưa được</button>`;res.appendChild(row);
    row.querySelector('[data-t="selfok"]').onclick=()=>answer(it,true,"",{info:false});row.querySelector('[data-t="selfno"]').onclick=()=>answer(it,false,"Không sao — đọc to câu mẫu vài lần nhé.",{info:false})};
  box.querySelector('[data-t="model"]').onclick=()=>showModel(null,null);
  box.querySelector('[data-t="mic"]').onclick=e=>{const btn=e.currentTarget;
    micRun(btn,target,(r,err)=>{if(err){showModel(null,null);const res=document.getElementById("tres");res.insertAdjacentHTML("afterbegin",`<div class="tryerr">⚠️ ${esc(err.message||err)}</div>`);return}
      showModel(r.heard,kwCheck(r.heard||"",kw));document.getElementById("tres").insertAdjacentHTML("beforeend",recRowHtml(r))},box.querySelector(".tlive"))}};
R.write=(it,box)=>{
  const [q,model,kw]=it.wq;
  box.innerHTML=`<p class="qlabel">Viết</p><div class="tnote">${esc(q)}</div><textarea id="tw" data-kbd="1" rows="4" autocapitalize="sentences" spellcheck="false" placeholder="Viết bằng tiếng Đức…"></textarea>${kbdHtml}
    <div class="row"><button class="ibtn" data-t="model">Xem bài mẫu</button><button class="prim" data-t="chk">Kiểm tra</button></div>`;
  bindKbd(box);const ta=document.getElementById("tw");setTimeout(()=>ta.focus({preventScroll:true}),60);
  const done=(shown)=>{const v=ta.value.trim(),chk=kwCheck(v,kw);
    const mdl=`<div class="tmodel"><div class="small">Bài mẫu:</div><div><b>${esc(model)}</b> <button class="spk sm" data-say="${esc(model.replace(/…/g," "))}" aria-label="Nghe bài mẫu">🔊</button></div></div>`;
    if(!v&&!shown){ta.focus();return}
    if(chk&&v){answer(it,chk.ok,`<div class="kwl">${chk.res.map(r=>`<span class="${r.ok?"ok":"no"}">${r.ok?"✓":"✗"} ${esc(r.g.split("/")[0])}</span>`).join("")}</div>${chk.ok?"Đủ các ý chính. 👍":"Còn thiếu ý — so sánh với bài mẫu."}${mdl}`,{info:false,override:!chk.ok});return}
    const box2=document.createElement("div");box2.innerHTML=mdl+`<div class="row"><button class="ibtn" data-t="selfok">✓ Tôi viết đúng</button><button class="ibtn" data-t="selfno">✗ Chưa đúng</button></div>`;
    box.appendChild(box2);box.querySelector('[data-t="chk"]').disabled=true;box.querySelector('[data-t="model"]').disabled=true;
    box2.querySelector('[data-t="selfok"]').onclick=()=>{box2.remove();answer(it,true,mdl,{info:false})};
    box2.querySelector('[data-t="selfno"]').onclick=()=>{box2.remove();answer(it,false,mdl,{info:false})}};
  box.querySelector('[data-t="chk"]').onclick=()=>done(false);
  box.querySelector('[data-t="model"]').onclick=()=>{if(kw){answer(it,false,`<div class="tmodel"><div class="small">Bài mẫu:</div><div><b>${esc(model)}</b> <button class="spk sm" data-say="${esc(model.replace(/…/g," "))}" aria-label="Nghe bài mẫu">🔊</button></div></div>`,{info:false})}else done(true)}};
R.listenq=(it,box)=>{
  const x=it.x,q=it.q,opts=it._opts=shuffleOpts(q.slice(1));
  box.innerHTML=`<p class="qlabel">${it.title?esc(it.title)+" · ":""}Nghe hội thoại rồi trả lời</p>
    <div class="tplayer"><button class="prim big2" data-t="pl">▶ Nghe</button><button class="ibtn big2" data-t="sl">🐢 Chậm</button></div><div class="small center" id="tnow"></div>
    <div class="tq2">${esc(q[0])}</div><div class="mcopts">${opts.map((o,i)=>`<button class="mco" data-o="${i}">${esc(o)}</button>`).join("")}</div>`;
  const now=document.getElementById("tnow");const play=slow=>playLines(x.d,slow,i=>{if(now)now.textContent=i<0?"":`🔈 ${i+1}/${x.d.length}`});
  box.querySelector('[data-t="pl"]').onclick=()=>play(false);box.querySelector('[data-t="sl"]').onclick=()=>play(true);
  if(it.first)setTimeout(()=>play(false),300);
  box.querySelectorAll("[data-o]").forEach(b=>b.onclick=()=>{if(it.answered)return;const ok=opts[+b.dataset.o]===q[1];b.classList.add(ok?"right":"wrong");
    if(!ok)box.querySelectorAll("[data-o]").forEach((y,i)=>{if(opts[i]===q[1])y.classList.add("right")});
    answer(it,ok,`<details class="tdet"${ok?"":" open"}><summary>Xem lời thoại</summary>${textHtml(x,{showVi:true})}</details>`,{info:false})})};
function shuffleOpts(o){const fixed=o.every(v=>/^(Richtig|Falsch|Ja|Nein)$/.test(v));return fixed?o.slice().sort((a,b)=>["Richtig","Ja","Falsch","Nein"].indexOf(a)-["Richtig","Ja","Falsch","Nein"].indexOf(b)):shuffle(o)}
R.read=(it,box)=>{
  box.innerHTML=`<p class="qlabel">Đọc ${it.x.d.some(l=>!isText(l[0]))?"hội thoại":"bài"} — chạm vào từ bất kỳ để tra nghĩa</p>${textHtml(it.x)}
    <div class="row"><button class="ibtn" data-t="vi">Hiện / ẩn bản dịch</button><button class="ibtn" data-t="all">🔊 Nghe cả bài</button></div>${nextBtn("Đã đọc xong →")}`;
  box.querySelector('[data-t="vi"]').onclick=()=>box.querySelector(".ttext").classList.toggle("showvi");
  box.querySelector('[data-t="all"]').onclick=()=>playLines(it.x.d,false);
  box.querySelectorAll(".tde [data-say]").forEach(b=>b.onclick=e=>{e.stopPropagation();const li=+b.closest(".tline").dataset.li;playLines([it.x.d[li]])});
  bindNext()};
R.readq=(it,box)=>{
  const q=it.q,opts=it._opts=shuffleOpts(q.slice(1));
  box.innerHTML=`<details class="tdet" open><summary>Bài đọc</summary>${textHtml(it.x)}</details><div class="tq2">${esc(q[0])}</div><div class="mcopts">${opts.map((o,i)=>`<button class="mco" data-o="${i}">${esc(o)}</button>`).join("")}</div>`;
  box.querySelectorAll(".tde [data-say]").forEach(b=>b.onclick=e=>{e.stopPropagation();const li=+b.closest(".tline").dataset.li;playLines([it.x.d[li]])});
  box.querySelectorAll("[data-o]").forEach(b=>b.onclick=()=>{if(it.answered)return;const ok=opts[+b.dataset.o]===q[1];b.classList.add(ok?"right":"wrong");
    if(!ok)box.querySelectorAll("[data-o]").forEach((y,i)=>{if(opts[i]===q[1])y.classList.add("right")});
    box.querySelector(".ttext").classList.add("showvi");answer(it,ok,ok?"":"Đọc lại bản dịch ở trên để thấy chỗ có đáp án.",{info:false})})};
R.dict=(it,box)=>{
  box.innerHTML=`<p class="qlabel">Nghe rồi viết lại cả câu</p>${audioBtns({text:it.text},true)}
    <form id="tform"><textarea id="tans" data-kbd="1" rows="2" autocapitalize="sentences" spellcheck="false" placeholder="Viết những gì bạn nghe…"></textarea>${kbdHtml}
    <div class="row"><button type="button" class="ibtn" data-t="idk">Không nghe ra</button><button class="prim">Kiểm tra</button></div></form>`;
  bindKbd(box);bindAudio(box,{text:it.text});setTimeout(()=>speak(it.text),300);
  const ta=document.getElementById("tans");setTimeout(()=>ta.focus({preventScroll:true}),60);
  ta.onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();document.getElementById("tform").requestSubmit()}};
  const check=(v)=>{const tw=fold(it.text).split(" ").filter(Boolean),hw=fold(v).split(" ").filter(Boolean),ok=lcsMatch(tw,hw),n=ok.filter(Boolean).length,p=Math.round(100*n/tw.length);
    let k=0;const html=it.text.split(/\s+/).map(w=>fold(w)?`<span class="${ok[k++]?"ok":"bad"}">${esc(w)}</span>`:esc(w)).join(" ");
    answer(it,p>=85,`<div class="tryterm" style="font-size:20px">${html}</div><div class="small">Đúng ${n}/${tw.length} từ (${p}%). Từ đỏ là chỗ bạn viết sai hoặc thiếu.</div>`,{info:false,override:p>=60&&p<85})};
  box.querySelector('[data-t="idk"]').onclick=()=>check("");
  document.getElementById("tform").onsubmit=e=>{e.preventDefault();if(!it.answered)check(ta.value)}};

/* ---------- Kết thúc một bước / cả kit ---------- */
function stepDone(){
  stopPlay();const st=RUN.steps[RUN.si],r=RUN.res[st],p=pct(r.r,r.n);
  if(!RUN.quick){const ks=S.kits[RUN.k.n]=S.kits[RUN.k.n]||{steps:{},best:{}};ks.steps[st]=p??100;ks.best[st]=Math.max(ks.best[st]??-1,p??100);ks.t=Date.now();
    S.days[day()]=(S.days[day()]||0)+1;saveS()}
  const last=RUN.si===RUN.steps.length-1;
  if(RUN.quick)return finish();
  root.innerHTML=`<div class="trun"><div class="vtop"><button class="ibtn" data-t="exit" aria-label="Thoát">✕</button><div class="vtitle">${esc(RUN.title)}</div><span></span></div>
    <div class="card center"><div class="big">${STEP[st].i}</div><p>Xong phần <b>${STEP[st].t}</b>${p!=null?`: đúng <b>${r.r}/${r.n}</b> (${p}%)`:""}.</p>
    <p class="small">${p==null?"":p>=90?pick(["Xuất sắc! 🎉","Tuyệt vời!","Rất tốt, tiếp tục nhé!"]):p>=70?pick(["Khá lắm!","Tốt! Còn vài lỗi nhỏ.","Ổn rồi, cố thêm chút nữa!"]):"Không sao — những câu sai sẽ được ôn lại ở các kit sau."}</p>
    <div class="row">${last||RUN.only?`<button class="prim" data-t="fin">Xem tổng kết</button>`:`<button class="prim" data-t="nstep">Tiếp: ${STEP[RUN.steps[RUN.si+1]].i} ${STEP[RUN.steps[RUN.si+1]].t} →</button>`}</div></div></div>`;
  window.scrollTo({top:0})}
function finish(){
  stopPlay();const k=RUN.k;
  if(RUN.quick){const r=RUN.res.on;S.days[day()]=(S.days[day()]||0)+1;saveS();
    root.innerHTML=`<div class="card center"><div class="big">🔁</div><p>Ôn nhanh xong: đúng <b>${r.r}/${r.n}</b>.</p>${wrongHtml()}<div class="row"><button class="prim" data-t="home">Về trang Gia sư</button></div></div>`;RUN=null;window.scrollTo({top:0});return}
  const ks=S.kits[k.n]=S.kits[k.n]||{steps:{},best:{}};
  const allDone=stepsOf(k).every(s=>ks.steps[s]!=null||(s==="on"&&!dueWords(k.n,1).length));
  if(allDone&&!ks.done){ks.done=Date.now()}
  if(allDone&&S.cur===k.n)S.cur=Math.min(180,k.n+1);
  saveS();
  const rows=RUN.steps.map(s=>{const r=RUN.res[s];const p=r?pct(r.r,r.n):null;return `<div class="tsum"><span>${STEP[s].i} ${STEP[s].t}</span><span class="tmeter"><i style="width:${p??100}%;background:${p==null?"var(--line)":p>=80?"var(--green)":p>=60?"var(--orange)":"var(--red)"}"></i></span><b>${p==null?"–":p+"%"}</b></div>`}).join("");
  const F=ks.flu;const fluRow=F&&F.tries?`<div class="tsum"><span>🎯 Nói trôi chảy cả đoạn</span><b>${F.best?F.best+"%":"chưa đạt"}${F.star?" ⭐ thuộc lòng":""}</b></div>`:"";
  const tot=RUN.steps.reduce((a,s)=>a+(RUN.res[s]?RUN.res[s].r:0),0),n=RUN.steps.reduce((a,s)=>a+(RUN.res[s]?RUN.res[s].n:0),0),p=pct(tot,n);
  const nx=KITS[k.n];
  root.innerHTML=`<div class="vtop"><button class="ibtn" data-t="kit" data-n="${k.n}" aria-label="Quay lại">‹</button><div class="vtitle">Tổng kết Kit ${k.n}</div><span></span></div>
    <div class="card center"><div class="big">${p==null?"✅":p>=90?"🏆":p>=70?"🎉":"💪"}</div><div class="score">${p==null?"Xong":p+"%"}</div><p>${esc(k.t)}</p>
      ${allDone&&k.n===180?"<p><b>Chúc mừng! Bạn đã đi hết lộ trình 180 kit đến trình độ A1. 🇩🇪</b></p>":allDone?"<p class='small'>Đã hoàn thành kit này.</p>":"<p class='small'>Còn bước chưa làm — mở lại kit để học tiếp.</p>"}</div>
    <div class="card">${rows}${fluRow}</div>${wrongHtml()}
    <div class="row">${nx?`<button class="prim" data-t="kit" data-n="${nx.n}">Kit ${nx.n}: ${esc(nx.t)} →</button>`:""}<button class="ibtn" data-t="home">Trang Gia sư</button></div>`;
  RUN=null;window.scrollTo({top:0})}
function wrongHtml(){
  const ws=[...new Set(RUN.wrong.filter(it=>it.w).map(it=>it.w))];
  if(!ws.length)return RUN.wrong.length?`<div class="card"><p class="small">Bạn sai ${RUN.wrong.length} câu ngữ pháp / nghe / đọc. Làm lại kit sau vài ngày để nhớ lâu hơn.</p></div>`:"";
  return `<div class="card"><div class="sgh" style="margin-top:0"><b>Từ cần ôn</b><span class="small">sẽ xuất hiện lại ở phần Ôn bài cũ</span></div><div class="tchips">${ws.map(x=>`<button class="chip" data-lk2="${esc(x.w.w)}">${V.termHtml(x.w)}</button>`).join("")}</div></div>`}

/* ============ Trang chủ & trang kit ============ */
function streak(){let n=0;const d=new Date();if(!S.days[day(d)])d.setDate(d.getDate()-1);while(S.days[day(d)]){n++;d.setDate(d.getDate()-1)}return n}
function skillAvg(){const acc={};for(const [s] of SKILL)acc[s]={sum:0,n:0};
  for(const n in S.kits){const b=S.kits[n].best||{};for(const st in b){const key=st==="on"?"tu":st;if(acc[key]&&b[st]>=0){acc[key].sum+=b[st];acc[key].n++}}}
  const o={};for(const s in acc)o[s]=acc[s].n?Math.round(acc[s].sum/acc[s].n):null;return o}
const TIPS={nghe:"Nghe mỗi hội thoại 2 lần: lần đầu nghe ý chính, lần sau bấm 🐢 nghe chậm. Sau đó mở “Xem lời thoại” và nghe lại khi nhìn chữ.",
  noi:"Nói to mỗi ngày: đóng vai trong hội thoại, ghi âm câu trả lời. Dùng 🔊 nghe mẫu rồi bắt chước ngữ điệu.",
  doc:"Đọc chậm, chạm vào từ lạ để tra nghĩa. Đọc lại bài mà không nhìn bản dịch.",
  viet:"Gõ đầy đủ dấu ä ö ü ß và viết danh từ kèm mạo từ. Chép lại bài mẫu một lần cho quen tay.",
  tu:"Ôn từ ở tab Từ vựng → “Ôn ngay”, và làm phần Ôn bài cũ trước mỗi kit.",
  ngu:"Đọc kỹ ghi chú ngữ pháp, rồi tự đặt 3 câu theo mẫu trước khi làm bài tập."};
function home(){
  RUN=null;stopPlay();
  const done=KITS.filter(k=>S.kits[k.n]&&S.kits[k.n].done).length,cur=KITS[(S.cur||1)-1],st=STAGES[cur.s-1],sk=skillAvg(),stk=streak();
  const known=Object.values(sk).filter(v=>v!=null);let weak=null;for(const [s] of SKILL)if(sk[s]!=null&&(weak==null||sk[s]<sk[weak]))weak=s;
  const P=V.getP(),due=allW().filter(x=>{const k=kitOfKey.get(x.s.id+"|"+x.w.w);const p=P[V.keyOf(x.s,x.w)];return k&&S.kits[k]&&p&&p.lv<3}).length;
  const open=home.open??cur.s;
  root.innerHTML=`<div class="vhero thero"><div><div class="big">${done}<small>/180</small></div><div class="small">kit đã xong</div></div>
      <div class="vhero-r"><span class="small">Tiếp theo · Chặng ${cur.s}</span><b>Kit ${cur.n}: ${esc(cur.t)}</b><button class="prim" data-t="go" data-n="${cur.n}">${S.kits[cur.n]?"Học tiếp":"Bắt đầu học"} →</button></div></div>
    <div class="card tcoach"><div class="sgh" style="margin-top:0"><b>👩‍🏫 Gia sư nhắc bạn</b><span class="small">${stk?`🔥 ${stk} ngày liên tiếp`:"Học mỗi ngày 1 kit nhé!"}</span></div>
      <p>${done?`Bạn đang ở <b>chặng ${cur.s}/18: ${esc(st.t)}</b>. Mục tiêu chặng: ${esc(st.g)}`:`Chào bạn! Lộ trình gồm <b>180 kit</b> chia thành 18 chặng, đi từ con số 0 đến trình độ <b>A1</b>. Mỗi kit khoảng 15–25 phút, luyện đủ <b>nghe – nói – đọc – viết</b>.`}</p>
      ${weak&&known.length&&sk[weak]<85?`<p class="small">Kỹ năng cần luyện thêm: <b>${SKILL.find(s=>s[0]===weak)[1]} (${sk[weak]}%)</b>. ${TIPS[weak]}</p>`:""}
      <div class="row">${due?`<button class="ibtn" data-t="quick">🔁 Ôn nhanh ${Math.min(10,due)} từ cần nhớ</button>`:""}<button class="ibtn" data-t="dict">🔍 Tra từ</button></div></div>
    ${known.length?`<div class="card"><div class="sgh" style="margin-top:0"><b>Kỹ năng</b><span class="small">điểm trung bình các kit đã làm</span></div>${SKILL.map(([s,l])=>`<div class="tsum"><span>${l}</span><span class="tmeter"><i style="width:${sk[s]??0}%;background:${sk[s]==null?"var(--line)":sk[s]>=80?"var(--green)":sk[s]>=60?"var(--orange)":"var(--red)"}"></i></span><b>${sk[s]==null?"–":sk[s]+"%"}</b></div>`).join("")}</div>`:""}
    <div class="sgh"><b>Lộ trình 18 chặng</b><span class="small">bấm vào chặng để xem kit</span></div>
    ${STAGES.map(s=>{const ks=KITS.filter(k=>k.s===s.n),nd=ks.filter(k=>S.kits[k.n]&&S.kits[k.n].done).length;
      return `<div class="card tstage${open===s.n?" open":""}"><button class="tsh" data-t="stage" data-s="${s.n}"><span class="tsn">${s.n}</span><span class="tst"><b>${esc(s.t)}</b><span class="small">Kit ${ks[0].n}–${ks[ks.length-1].n} · ${nd}/10 xong</span></span><span class="pbar tsp"><i style="width:${nd*10}%"></i></span></button>
        ${open===s.n?`<p class="small">${esc(s.g)}</p><div class="tkits">${ks.map(k=>{const kk=S.kits[k.n],b=kk&&kk.best?Object.values(kk.best).filter(v=>v>=0):[],avg=b.length?Math.round(b.reduce((a,c)=>a+c,0)/b.length):null;
          return `<button class="tkit${kk&&kk.done?" done":kk?" part":""}${k.n===cur.n?" cur":""}${k.rv?" rv":""}" data-t="kit" data-n="${k.n}"><span class="tkn">${k.n}</span><span class="tkt">${esc(k.t)}</span><span class="small">${kk&&kk.done?"✓ "+(avg!=null?avg+"%":""):k.rv===2?"📝 thi thử":k.rv?"🔁 ôn chặng":kk?"đang học":(k.w||[]).length+" từ"}</span></button>`}).join("")}</div>`:""}</div>`}).join("")}`;
}
function kitPage(n){
  RUN=null;stopPlay();const k=KITS[n-1],ks=S.kits[n]||{steps:{},best:{}},ws=k.rv===1?stageW(k.s):k.rv===2?[]:kitW(k);
  const steps=stepsOf(k),firstTodo=steps.find(s=>ks.steps[s]==null&&!(s==="on"&&!dueWords(n,1).length));
  root.innerHTML=`<div class="vtop"><button class="ibtn" data-t="home" aria-label="Quay lại">‹</button><div class="vtitle">Kit ${k.n}</div><span></span></div>
    <div class="card"><div class="small">Chặng ${k.s}: ${esc(STAGES[k.s-1].t)}</div><h2 class="tkh">${esc(k.t)}</h2>
      ${ws.length?`<div class="tchips">${ws.slice(0,40).map(x=>`<button class="chip" data-lk2="${esc(x.w.w)}">${V.termHtml(x.w)}</button>`).join("")}${ws.length>40?`<span class="small">+${ws.length-40} từ</span>`:""}</div>`:k.rv===2?"<p class='small'>Bài thi thử mô phỏng 4 phần của kỳ thi A1 (Start Deutsch 1): Nghe, Đọc, Viết, Nói.</p>":""}
      <div class="row"><button class="prim big2" data-t="start" data-n="${n}">${ks.done?"Học lại cả kit":firstTodo&&firstTodo!==steps[0]&&Object.keys(ks.steps).length?"Học tiếp từ "+STEP[firstTodo].t:"Bắt đầu"} →</button></div></div>
    <div class="card"><div class="sgh" style="margin-top:0"><b>Các bước</b><span class="small">bấm để làm riêng từng bước</span></div>
      ${steps.map(s=>`<button class="tstrow" data-t="only" data-s="${s}" data-n="${n}"><span>${STEP[s].i} ${STEP[s].t}</span><span class="small">${ks.best[s]!=null?(ks.best[s]>=0?"tốt nhất "+ks.best[s]+"%":""):s==="on"&&!dueWords(n,1).length?"chưa có từ để ôn":"chưa làm"}</span></button>`).join("")}</div>
    <div class="row"><button class="ibtn" data-t="kit" data-n="${Math.max(1,n-1)}" ${n===1?"disabled":""}>‹ Kit ${n-1||""}</button><button class="ibtn" data-t="kit" data-n="${Math.min(180,n+1)}" ${n===180?"disabled":""}>Kit ${n<180?n+1:""} ›</button></div>`;
  window.scrollTo({top:0})}
function resume(n){const k=KITS[n-1],ks=S.kits[n]||{steps:{}},steps=stepsOf(k);
  const todo=ks.done?steps:steps.filter(s=>ks.steps[s]==null);startKitSteps(n,todo.length?todo:steps)}
function startKitSteps(n,steps){const k=KITS[n-1];stopPlay();RUN={k,steps,si:-1,res:{},wrong:[],only:steps.length===1,title:`Kit ${k.n}`};nextStep()}

root.addEventListener("click",e=>{
  if(V.infoClick(e))return;
  const t=e.target.closest("button");if(!t)return;
  if(t.dataset.lk2){window.DictAPI&&DictAPI.popup(t.dataset.lk2);return}
  const a=t.dataset.t;if(!a)return;
  if(a==="exit"){const n=RUN&&!RUN.quick?RUN.k.n:null;stopPlay();if(busyMic&&window.appScoreStop)appScoreStop();RUN=null;n?kitPage(n):home();return}
  if(a==="home"){home();return}
  if(a==="go"){const n=+t.dataset.n;S.kits[n]?resume(n):startKit(n);return}
  if(a==="kit"){kitPage(+t.dataset.n);return}
  if(a==="start"){resume(+t.dataset.n);return}
  if(a==="only"){startKit(+t.dataset.n,t.dataset.s);return}
  if(a==="stage"){const s=+t.dataset.s,cur=home.open??(KITS[(S.cur||1)-1].s);home.open=cur===s?0:s;home();const el=root.querySelector(".tstage.open");el&&el.scrollIntoView({block:"start",behavior:"smooth"});return}
  if(a==="quick"){startQuick();return}
  if(a==="dict"){window.appSetView&&appSetView("dict");return}
  if(a==="nstep"){nextStep();return}
  if(a==="fin"){finish();return}
});

window.tutorHome=()=>{if(!RUN)home()};
window.tutorOpenKit=n=>{window.appSetView&&appSetView("tutor");kitPage(n)};
window.__tutorTest={buildStep,genDrills,timeDe,cmp,kwCheck,KITS,startKitSteps,kitPage,home,getS:()=>S,run:()=>RUN};
home();
})();
