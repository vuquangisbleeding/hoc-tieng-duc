/* ============ 📝 Luyện đọc đoạn văn của bạn (kiểu Talkpal) ============
   Dán đoạn bất kỳ → nghe mẫu → đọc theo từng câu hoặc cả đoạn → máy tô màu từng từ (xanh chuẩn · cam hơi lệch · đỏ sai) và chấm %.
   Dùng chung bộ chấm của app (window.appScore: Azure chấm từng âm, hoặc nhận diện miễn phí).
   - Tab Phát âm → "📝 Đoạn văn": thư viện đoạn đã lưu (localStorage "deParas").
   - Trong bài học: dạng bài "para" (đọc to đoạn bạn vừa viết / đoạn đầu ra), đăng ký vào TutorAPI.R.
   Bản ghi giọng chỉ giữ tạm trong bộ nhớ, không lưu, không đồng bộ. */
(function(){
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let LIB=store.get("deParas",[]);
const saveLib=()=>store.set("deParas",LIB);
const SAMPLE="Hallo! Ich heiße Felix Nguyen. Ich bin fünfundzwanzig Jahre alt. Ich komme aus Vietnam, aus Hanoi. Jetzt wohne ich in Berlin. Ich spreche Vietnamesisch, Englisch und ein bisschen Deutsch. Meine Eltern wohnen in Hanoi. Ich habe einen Bruder und eine Schwester.";
const splitSents=t=>String(t||"").split(/\n+/).flatMap(p=>p.match(/[^.!?…]+(?:[.!?…]+["“”»]*|$)/g)||[]).map(s=>s.trim()).filter(s=>/\p{L}/u.test(s));
const clean=s=>String(s).replace(/[„“”"»«]/g,"").replace(/…/g,"").replace(/\s+[–-]\s+/g,", ").replace(/\s+/g," ").trim();
const hasL=t=>/[\p{L}\d]/u.test(t);
const cls=v=>v>=80?"pg":v>=60?"po":"pr";
const azure=()=>window.appScoreMode&&appScoreMode()==="azure";
const kbd=`<div class="kbd">${["ä","ö","ü","ß","Ä","Ö","Ü"].map(c=>`<button type="button" data-ch="${c}">${c}</button>`).join("")}</div>`;
let busy=false;
const playAll=(sents,slow,hl)=>{const T=window.TutorAPI;if(T&&T.playLines)T.playLines(sents.map(s=>["",s]),slow,hl);else window.appSpeak&&appSpeak(sents.join(" "),slow)};
const stopAll=()=>{const T=window.TutorAPI;T&&T.stopPlay?T.stopPlay():(window.speechSynthesis&&speechSynthesis.cancel())};

/* Tô màu một câu theo kết quả chấm. words: danh sách điểm từng từ (Azure), k: vị trí bắt đầu */
function colorize(sent,r,k0){
  let k=k0;
  if(r&&r.words&&r.words.length){const html=clean(sent).split(/\s+/).map(t=>{if(!hasL(t))return esc(t);const w=r.words[k++];
      return `<span class="pw ${w?cls(w.acc):"pr"}" title="${w?w.acc:0}">${esc(t)}</span>`}).join(" ");return{html,k}}
  if(r&&r.targetHtml)return{html:`<span class="tryterm prfree">${r.targetHtml}</span>`,k};
  return{html:esc(sent),k}}
let PASS=75;   // mức đạt mỗi câu (chỉnh trong ⚙, mặc định 75%); cả bài "Đạt" khi mọi câu đều đạt
const curPass=()=>{const v=+(window.appCfg&&appCfg().sayPass);return v>=50&&v<=100?v:75};
function weakHtml(r){const ws=(r.words||[]).filter(w=>w.acc<PASS||w.err!=="None").sort((a,b)=>a.acc-b.acc).slice(0,5);
  if(!ws.length)return `<div class="small">Mọi từ đều ≥ ${PASS} — rất tốt! 👍</div>`;
  return `<div class="small">Từ cần luyện (thấp nhất trước):</div>`+ws.map(w=>window.phFeedbackHtml?phFeedbackHtml(w):`<div class="tryph"><b>${esc(w.w)}</b> · ${w.acc}</div>`).join("")}
const detailHtml=r=>`${window.scoreHelpHtml?scoreHelpHtml(r):""}${weakHtml(r)}${r.heard?`<div class="small">Máy nghe thành: <i>${esc(r.heard)}</i></div>`:""}${r.note?`<div class="small">${r.note}</div>`:""}`;

/* ---------- Bộ đọc: dùng cho cả trang Luyện đoạn và bài học ----------
   src: chuỗi văn bản, hoặc mảng {de, vi, sp} (mỗi phần tử là một câu/lượt lời; vi hiện khi bật "Che chữ") */
function reader(box,src,opts={}){
  PASS=curPass();
  const U=Array.isArray(src)?src.filter(x=>x&&x.de&&/\p{L}/u.test(x.de)):splitSents(src).map(de=>({de}));
  const S=U.map(u=>u.de),n=S.length;
  const st={mode:"sent",hide:false,cur:0,best:S.map((_,i)=>(opts.best||{})[i]??null),last:S.map(()=>null),res:S.map(()=>null),whole:null,wholeBest:opts.wholeBest??null,drill:[]};
  const NEED=3;   // từ yếu: phải đọc riêng đạt ≥ PASS đủ 3 lần
  const addDrill=r=>{(r.words||[]).filter(w=>hasL(w.w)&&(w.acc<PASS||w.err!=="None")).forEach(w=>{const t=String(w.w).replace(/[.,!?;:"„“”()…]/g,"");if(!t)return;
    const d=st.drill.find(x=>x.w.toLowerCase()===t.toLowerCase());if(!d)st.drill.push({w:t,ok:0,last:null,res:null,from:w.acc})})};
  const ipaHtml=t=>{const i=window.ipaFor?ipaFor(t):"";return i?`<span class="ipa-in">/${esc(i)}/</span>`:""};
  const stats=()=>{const b=st.best.filter(x=>x!=null),l=st.last.filter(x=>x!=null);
    const pend=st.drill.filter(d=>d.ok<NEED).length;
    const allPass=n>0&&st.best.every(x=>x!=null&&x>=PASS)&&!pend;
    return{pend,tried:l.length+(st.whole?1:0),n,pass:st.best.filter(x=>x!=null&&x>=PASS).length,allPass,
      avg:l.length?Math.round(l.reduce((a,c)=>a+c,0)/l.length):null,whole:st.wholeBest,wholeLast:st.whole?st.whole.pct:null,weakest:st.best.reduce((m,x,i)=>x==null||x>=PASS?m:(m==null||x<st.best[m]?i:m),null)}};
  const emit=()=>{opts.onUpdate&&opts.onUpdate(st,stats())};
  if(!n){box.innerHTML=`<p class="small center">Chưa có câu tiếng Đức nào để đọc.</p>`;return{stats,stop(){},sents:S}}
  function badge(i){const L=st.last[i],B=st.best[i];if(L==null&&B==null)return"";
    return `<span class="prsc ${cls(L??B)}">${L??B}%${(B??0)>=PASS?" ✅":""}</span>${B!=null&&L!=null&&B!==L?`<span class="prbest">tốt nhất ${B}%</span>`:""}`}
  function draw(){
    const s=stats();let k=0;
    box.innerHTML=`<div class="pr${st.hide?" phide":""}">
      <div class="pmodes"><button class="chip" aria-pressed="${st.mode==="sent"}" data-pm="sent">🗣 Từng câu</button><button class="chip" aria-pressed="${st.mode==="whole"}" data-pm="whole">📜 Cả đoạn</button><button class="chip" aria-pressed="${st.hide}" data-pm="hide">🙈 Che chữ${U.some(u=>u.vi)?" (nhìn tiếng Việt)":""}</button></div>
      <div class="row"><button class="ibtn" data-pa="all">🔊 Nghe cả đoạn</button><button class="ibtn" data-pa="allslow">🐢</button></div>
      <div class="prs">${U.map((u,i)=>{const x=u.de,r=st.mode==="whole"?st.whole:st.res[i];let html;
          if(st.mode==="whole"&&st.whole){const c=colorize(x,st.whole,k);k=c.k;html=c.html}else html=colorize(x,r,0).html;
          return `<div class="prl${st.mode==="sent"&&i===st.cur?" on":""}${(st.best[i]??0)>=PASS?" ok":""}" data-i="${i}">${u.sp?`<div class="prsp">${esc(u.sp)}</div>`:""}<div class="prt">${html}</div>${(()=>{const i=window.ipaFor?ipaFor(clean(x)):"";return i?`<div class="pripa">/${esc(i)}/</div>`:""})()}${u.vi?`<div class="prvi">${esc(u.vi)}</div>`:""}
            ${st.mode==="sent"?`<div class="prb"><button class="spk sm" data-pa="say" data-i="${i}" aria-label="Nghe">🔊</button><button class="spk sm" data-pa="slow" data-i="${i}" aria-label="Nghe chậm">🐢</button>
              <button class="trybtn prmic" data-pa="mic" data-i="${i}">🎤 Đọc</button><span class="prbadge">${badge(i)}</span></div><div class="prres" id="prres${i}"></div>`:""}</div>`}).join("")}</div>
      ${st.mode==="whole"?`<div class="row"><button class="trybtn" data-pa="wmic">🎤 Đọc cả đoạn</button></div><div class="small center">Đọc liền một mạch, xong bấm 🎤 lần nữa để dừng và chấm.</div><div class="small center prlive"></div><div class="prwres"></div>`:""}
      ${st.drill.length?`<div class="pdrill"><div class="sgh" style="margin-top:0"><b>🎯 Luyện từ yếu</b><span class="small">mỗi từ đọc đạt ≥ ${PASS}% đủ ${NEED} lần</span></div>
        ${st.drill.map((d,i)=>`<div class="pdw${d.ok>=NEED?" ok":""}"><div class="pdt"><b>${esc(d.w)}</b> ${ipaHtml(d.w)}</div>
          <div class="prb"><button class="spk sm" data-pa="dsay" data-i="${i}" aria-label="Nghe">🔊</button><button class="spk sm" data-pa="dslow" data-i="${i}" aria-label="Nghe chậm">🐢</button>
          ${d.ok>=NEED?`<span class="small">✅ Xong</span>`:`<button class="trybtn prmic" data-pa="dmic" data-i="${i}">🎤 Đọc</button>`}<span class="pddots">${"●".repeat(Math.min(d.ok,NEED))}${"○".repeat(Math.max(0,NEED-d.ok))}</span>${d.last!=null?`<span class="prsc ${cls(d.last)}">${d.last}%</span>`:""}</div>
          <div class="prres" id="pdres${i}">${d.res&&d.res.pct<PASS&&d.res.words&&d.res.words[0]&&window.phFeedbackHtml?phFeedbackHtml(d.res.words[0]):""}</div></div>`).join("")}</div>`:""}
      <div class="prsum">${s.tried?`${s.allPass?`<b class="cpass">✅ Đã qua: mọi câu ≥ ${PASS}%</b><br>`:`<b>${s.pass}/${n} câu đạt ≥ ${PASS}%</b>${s.weakest!=null?` · cần luyện thêm câu ${s.weakest+1}`:""}${s.pend?` · còn <b>${s.pend} từ</b> ở 🎯 Luyện từ yếu`:""}<br>`}<span class="small">Lần đọc gần nhất: trung bình ${s.avg??"–"}%${s.wholeLast!=null?` · cả đoạn ${s.wholeLast}%`:""}${st.wholeBest!=null?` (tốt nhất ${st.wholeBest}%)`:""}</span>`:`${n} câu · ${st.mode==="sent"?"bấm 🔊 nghe mẫu rồi 🎤 đọc từng câu":"nghe cả đoạn rồi đọc liền một mạch"} · cần ≥ ${PASS}% mỗi câu`}</div>
      <div class="small center plegend"><span class="pw pg">xanh</span> chuẩn · <span class="pw po">cam</span> hơi lệch · <span class="pw pr">đỏ</span> sai hoặc thiếu${azure()?"":" · chế độ miễn phí chỉ biết máy nghe ra chữ gì — nhập khóa Azure trong ⚙ để chấm từng âm"}</div></div>`;
    if(st.mode==="whole"&&st.whole)showWhole();
    st.res.forEach((r,i)=>{if(r&&st.mode==="sent")showSent(i,i===st.lastIdx)})}
  function showSent(i,open){const el=box.querySelector("#prres"+i),r=st.res[i];if(!el||!r)return;
    el.innerHTML=`<details class="prdet"${open&&r.pct<PASS?" open":""}><summary>${r.pct>=PASS?"✅":"🔁"} Lần gần nhất ${r.pct}% — ${r.pct>=PASS?"xem chi tiết":"xem âm nào chưa đúng"}</summary>${detailHtml(r)}${(r.words||[]).some(w=>w.acc<PASS||w.err!=="None")?`<div class="small">👉 Từ yếu đã vào mục <b>🎯 Luyện từ yếu</b> bên dưới: đọc riêng mỗi từ ≥ ${PASS}% đủ ${NEED} lần.</div>`:""}</details>${window.recRowHtml?recRowHtml({...r,target:null}):""}`}
  function showWhole(){const el=box.querySelector(".prwres"),r=st.whole;if(!el||!r)return;
    el.innerHTML=`<div class="tryv ${r.pct>=PASS?"good":r.pct>=60?"mid":"bad"}">Cả đoạn · lần gần nhất<span class="trypct">${r.pct}%</span></div>${detailHtml(r)}
      ${r.flu?`<div class="tflu"><span>⏱ <b>${r.flu.wpm||"–"}</b> từ/phút</span><span>⏸ Ngắt giữa câu: <b>${r.flu.mid}</b></span><span>Lâu nhất: <b>${r.flu.longest}s</b></span></div>`:""}${window.recRowHtml?recRowHtml({...r,target:null}):""}`}
  async function rec(btn,target,passage,live,done){
    if(busy){window.appScoreStop&&appScoreStop();return}
    if(!window.appScore)return alertIn(btn,"Máy không hỗ trợ nhận diện giọng nói.");
    stopAll();busy=true;const lbl=btn.innerHTML;btn.classList.add("on");btn.innerHTML="⏳ Đợi mic…";
    const lv=live&&window.liveBind?liveBind(live):null;
    try{const r=await appScore(target,{passage,onReady:()=>{btn.innerHTML="⏹ Dừng & chấm";lv&&lv.ready()},onInterim:t=>lv&&lv.interim(t),onLevel:v=>lv&&lv.level(v),onProcessing:()=>{btn.innerHTML="⏳ Đang chấm…";lv&&lv.processing()}});
      busy=false;if(!box.isConnected)return;done(r)}
    catch(e){busy=false;if(!box.isConnected)return;btn.classList.remove("on");btn.innerHTML=lbl;if(!(e&&e.cancelled))alertIn(btn,e&&e.message||String(e))}
    finally{busy=false}}
  function alertIn(btn,msg){const p=btn.closest(".prl")||box;let el=p.querySelector(".tryerr");if(!el){el=document.createElement("div");el.className="tryerr";p.appendChild(el)}el.textContent="⚠️ "+msg}
  box.onclick=e=>{const b=e.target.closest("[data-pm],[data-pa]");if(!b||!box.contains(b))return;
    if(b.dataset.pm){if(busy)return;if(b.dataset.pm==="hide")st.hide=!st.hide;else st.mode=b.dataset.pm;stopAll();draw();return}
    const a=b.dataset.pa,i=+b.dataset.i;
    const hl=j=>box.querySelectorAll(".prl").forEach((el,x)=>el.classList.toggle("play",x===j));
    if(a==="all"||a==="allslow"){playAll(S,a==="allslow",hl);return}
    if(a==="say"||a==="slow"){stopAll();window.appSpeak&&appSpeak(S[i],a==="slow");st.cur=i;box.querySelectorAll(".prl").forEach((el,x)=>el.classList.toggle("on",x===i));return}
    if(a==="mic"){st.cur=i;const row=box.querySelector(`.prl[data-i="${i}"]`);let live=row.querySelector(".prlive");if(!live){live=document.createElement("div");live.className="small center prlive";row.querySelector(".prb").after(live)}
      rec(b,clean(S[i]),false,live,r=>{window.SFX&&setTimeout(()=>r.pct>=PASS?SFX.ok():SFX.bad(),200);st.res[i]=r;addDrill(r);st.last[i]=r.pct;st.best[i]=Math.max(st.best[i]??-1,r.pct);st.lastIdx=i;
        if(r.pct>=PASS){const nx=st.best.findIndex((x,j)=>j>i&&(x==null||x<PASS));st.cur=nx>=0?nx:i}
        draw();emit();const el=box.querySelector(`.prl[data-i="${st.cur}"]`);el&&el.scrollIntoView({block:"nearest",behavior:"smooth"})});return}
    if(a==="dsay"||a==="dslow"){stopAll();window.appSpeak&&appSpeak(st.drill[i].w,a==="dslow");return}
    if(a==="dmic"){const d=st.drill[i],row=b.closest(".pdw");let live=row.querySelector(".prlive");if(!live){live=document.createElement("div");live.className="small center prlive";row.querySelector(".prb").after(live)}
      rec(b,d.w,false,live,r=>{window.SFX&&setTimeout(()=>r.pct>=PASS?SFX.ok():SFX.bad(),200);d.last=r.pct;d.res=r;if(r.pct>=PASS)d.ok++;draw();emit();
        const el=box.querySelector(".pdrill");el&&el.scrollIntoView({block:"nearest",behavior:"smooth"})});return}
    if(a==="wmic"){rec(b,S.map(clean).join(" "),true,box.querySelector(".prlive"),r=>{window.SFX&&setTimeout(()=>r.pct>=PASS?SFX.ok():SFX.bad(),200);st.whole=r;addDrill(r);st.wholeBest=Math.max(st.wholeBest??-1,r.pct);draw();emit()});return}};
  draw();
  return{stats,stop(){if(busy&&window.appScoreStop)appScoreStop();stopAll()},sents:S}}

/* ---------- Trang Luyện đoạn (tab Phát âm → 📝 Đoạn văn) ---------- */
let host=null,curId=null;
const titleOf=t=>{const s=String(t).replace(/\s+/g," ").trim();return s.length>48?s.slice(0,46)+"…":s};
function upsert(text,title){text=text.trim();let e=LIB.find(x=>x.text===text);
  if(!e){e={id:Date.now().toString(36),title:title||titleOf(text),text,best:{},whole:null,t:Date.now()};LIB.unshift(e)}else{e.t=Date.now();if(title)e.title=title;LIB=[e,...LIB.filter(x=>x!==e)]}
  LIB=LIB.slice(0,50);saveLib();return e}
function home(el,prefill){
  if(el)host=el;if(!host)return;curId=null;
  host.innerHTML=`<section class="card"><b>📝 Luyện đọc đoạn văn của bạn</b>
      <p class="small">Dán đoạn giới thiệu bản thân, bài viết, lời thoại… bằng tiếng Đức. App tách thành từng câu: bấm 🔊 nghe mẫu, bấm 🎤 đọc theo, máy tô màu từng từ (<span class="pw pg">xanh</span> chuẩn, <span class="pw po">cam</span> hơi lệch, <span class="pw pr">đỏ</span> sai) và chấm %. Đọc tốt từng câu rồi thử đọc cả đoạn, hoặc che chữ để nói thuộc lòng.</p>
      <textarea id="paraIn" data-kbd="1" rows="6" spellcheck="false" autocapitalize="sentences" placeholder="vd: Hallo! Ich heiße … Ich komme aus Vietnam.">${esc(prefill||"")}</textarea>${kbd}
      <div class="row"><button class="prim" data-px="new">Luyện đoạn này →</button><button class="ibtn" data-px="sample">Dùng đoạn mẫu</button></div></section>
    ${LIB.length?`<section class="card"><div class="sgh" style="margin-top:0"><b>Đoạn đã lưu</b><span class="small">${LIB.length}</span></div>
      ${LIB.map(e=>{const v=Object.values(e.best||{}),a=v.length?Math.round(v.reduce((x,y)=>x+y,0)/v.length):null;
        return `<div class="plib"><button class="plibt" data-px="open" data-id="${e.id}"><b>${esc(e.title)}</b><span class="small">${splitSents(e.text).length} câu${a!=null?` · trung bình ${a}%`:""}${e.whole!=null?` · cả đoạn ${e.whole}%`:""}</span></button><button class="ibtn mini" data-px="del" data-id="${e.id}" aria-label="Xoá">✕</button></div>`}).join("")}</section>`:""}`;
  host.querySelectorAll("[data-ch]").forEach(b=>b.onmousedown=e=>e.preventDefault());host.onclick=onHost}
let rd=null;
function open(id){const e=LIB.find(x=>x.id===id);if(!e)return home();curId=id;rd&&rd.stop();
  host.innerHTML=`<div class="vtop"><button class="ibtn" data-px="home" aria-label="Quay lại">‹</button><div class="vtitle">${esc(e.title)}</div><span></span></div>
    <section class="card" id="pRead"></section><div class="row"><button class="ibtn" data-px="edit">✏️ Sửa đoạn</button><button class="ibtn" data-px="home">Đoạn khác</button></div>`;
  rd=reader(host.querySelector("#pRead"),e.text,{best:e.best,wholeBest:e.whole,onUpdate:(st)=>{e.best={};st.best.forEach((v,i)=>{if(v!=null)e.best[i]=v});e.whole=st.wholeBest;e.t=Date.now();saveLib()}});
  host.onclick=onHost;window.scrollTo({top:0})}
function onHost(e){if(window.VocabAPI&&e.target.closest("[data-ch]")&&VocabAPI.infoClick(e))return;const b=e.target.closest("[data-px]");if(!b)return;const a=b.dataset.px;
  if(a==="home"){rd&&rd.stop();return home()}
  if(a==="sample"){host.querySelector("#paraIn").value=SAMPLE;return}
  if(a==="new"){const t=host.querySelector("#paraIn").value;if(!splitSents(t).length){host.querySelector("#paraIn").focus();return}return open(upsert(t).id)}
  if(a==="open")return open(b.dataset.id);
  if(a==="edit"){const x=LIB.find(y=>y.id===curId);rd&&rd.stop();return home(null,x?x.text:"")}
  if(a==="del"){if(b.dataset.sure){LIB=LIB.filter(x=>x.id!==b.dataset.id);saveLib();return home()}b.dataset.sure=1;b.textContent="Xoá?";b.classList.add("danger");setTimeout(()=>{if(b.isConnected){delete b.dataset.sure;b.textContent="✕";b.classList.remove("danger")}},2500)}}

/* ---------- Dạng bài "para" trong bài học ----------
   it.items: [{de,vi,sp}] (đoạn nói đầu ra) hoặc it.src = bài viết vừa làm (đọc lại chính đoạn mình viết) / it.text. Chỉ "Đạt" khi mọi câu ≥ 80%. */
function registerR(){const T=window.TutorAPI;if(!T||!T.R||T.R.para)return;
  T.R.para=(it,box)=>{
    PASS=curPass();
    const own=it.from&&it.from.userText&&splitSents(it.from.userText).length?it.from.userText:"";let src=it.items||own||it.text||"";
    const plain=Array.isArray(src)?src.map(u=>u.de).join("\n"):src;
    box.innerHTML=`<p class="qlabel">${it.label||"🎤 Đọc to đoạn văn"}</p><div class="small center">${it.from?(own?"Đoạn bạn vừa viết · ":"Bạn chưa viết — đọc bài mẫu · "):""}đọc từng câu, mỗi câu cần ≥ ${PASS}% mới qua</div>
      <div id="paraBox"></div><div class="row"><button class="ibtn mini" data-t2="save">💾 Lưu vào Luyện đoạn</button></div>
      <div class="row stickynext"><button class="prim soft" id="pnext">Bỏ qua, tiếp →</button></div>`;
    const btn=box.querySelector("#pnext");
    const sug=own&&window.deSpell?deSpell(own):[];
    if(sug.length){const el=document.createElement("div");el.className="pspell";
      el.innerHTML=`<b>✏️ Kiểm tra chính tả trước khi đọc</b>${sug.map(x=>`<div><s>${esc(x.from)}</s> → <b>${esc(x.to)}</b> ${window.ipaFor&&ipaFor(x.to)?`<span class="ipa-in">/${esc(ipaFor(x.to))}/</span>`:""} <span class="small">· ${esc(x.why)}</span></div>`).join("")}
        <div class="row"><button class="prim mini" data-t2="fix">Sửa giúp tôi rồi đọc</button><button class="ibtn mini" data-t2="keep">Giữ nguyên</button></div>`;
      box.querySelector("#paraBox").before(el);
      el.querySelector('[data-t2="keep"]').onclick=()=>el.remove();
      el.querySelector('[data-t2="fix"]').onclick=()=>{let t=src;for(const x of sug)t=t.replace(new RegExp("(^|[^\\p{L}])"+x.from.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}])","gu"),(m,p1)=>p1+x.to);
        src=t;if(it.from)it.from.userText=t;el.remove();ctl.stop();ctl=reader(box.querySelector("#paraBox"),src,{onUpdate:upd})}}
    const upd=(st,s)=>{btn.className="prim"+(s.allPass?"":" soft");btn.textContent=s.allPass?`✅ Đã qua · Tiếp →`:`Tiếp → (${s.pass}/${s.n} câu ≥ ${PASS}%${s.pend?` · ${s.pend} từ cần luyện`:""})`;it.onResult&&it.onResult(s)};
    let ctl=reader(box.querySelector("#paraBox"),src,{onUpdate:upd});
    box.querySelector('[data-t2="save"]').onclick=e=>{upsert(Array.isArray(src)?src.map(u=>u.de).join("\n"):src,it.saveTitle);e.target.textContent="✓ Đã lưu — mở ở tab Phát âm → 📝 Đoạn văn";e.target.disabled=true};
    btn.onclick=()=>{ctl.stop();const s=ctl.stats();if(it.answered)return;
      if(!s.tried){it.answered=true;T.nextItem();return}
      T.answer(it,s.allPass,"",{direct:true,toast:s.allPass?`✅ Đã qua: mọi câu ≥ ${PASS}%`:`🔁 ${s.pass}/${s.n} câu đạt ≥ ${PASS}% — luyện tiếp các câu còn lại nhé`})}}}

window.ParaApp={pass:curPass,reader,home,splitSents,
  openText(text,title){window.appSetView&&appSetView("para");const e=upsert(text,title);open(e.id)},
  registerR,count:()=>LIB.length};
registerR();document.addEventListener("DOMContentLoaded",registerR);
})();
