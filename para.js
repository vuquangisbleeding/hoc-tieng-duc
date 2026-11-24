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
function weakHtml(r){const ws=(r.words||[]).filter(w=>w.acc<70).slice(0,6);if(!ws.length)return"";
  return `<div class="small">Từ cần luyện:</div>`+ws.map(w=>`<div class="tryph"><b>${esc(w.w)}</b>${window.ipaFor&&ipaFor(w.w)&&!ipaFor(w.w).includes("…")?` <span class="ipa-in">/${esc(ipaFor(w.w))}/</span>`:""} · ${w.acc}<br>${(w.ph||[]).map(x=>`<span class="ph ${x.s>=80?"g":x.s>=60?"o":"r"}">${esc(x.p)} ${x.s}</span>`).join("")}</div>`).join("")}

/* ---------- Bộ đọc: dùng cho cả trang Luyện đoạn và bài học ---------- */
function reader(box,text,opts={}){
  const S=splitSents(text),st={mode:"sent",hide:false,cur:0,best:S.map((_,i)=>(opts.best||{})[i]??null),res:S.map(()=>null),whole:null,wholeBest:opts.wholeBest??null};
  const avg=()=>{const v=st.best.filter(x=>x!=null);return v.length?Math.round(v.reduce((a,b)=>a+b,0)/v.length):null};
  const stats=()=>{const v=st.best.filter(x=>x!=null);return{tried:v.length+(st.whole?1:0),n:S.length,avg:st.whole&&st.mode==="whole"?st.whole.pct:avg(),pass:v.filter(x=>x>=80).length,whole:st.wholeBest}};
  const emit=()=>{opts.onUpdate&&opts.onUpdate(st,stats())};
  if(!S.length){box.innerHTML=`<p class="small center">Chưa có câu tiếng Đức nào để đọc.</p>`;return{stats,stop(){}}}
  function draw(){
    const s=stats();let k=0;
    box.innerHTML=`<div class="pr${st.hide?" phide":""}">
      <div class="pmodes"><button class="chip" aria-pressed="${st.mode==="sent"}" data-pm="sent">🗣 Từng câu</button><button class="chip" aria-pressed="${st.mode==="whole"}" data-pm="whole">📜 Cả đoạn</button><button class="chip" aria-pressed="${st.hide}" data-pm="hide">🙈 Che chữ</button></div>
      <div class="row"><button class="ibtn" data-pa="all">🔊 Nghe cả đoạn</button><button class="ibtn" data-pa="allslow">🐢</button></div>
      <div class="prs">${S.map((x,i)=>{const r=st.mode==="whole"?st.whole:st.res[i];let html;
          if(st.mode==="whole"&&st.whole){const c=colorize(x,st.whole,k);k=c.k;html=c.html}else html=colorize(x,r,0).html;
          const b=st.best[i];
          return `<div class="prl${st.mode==="sent"&&i===st.cur?" on":""}" data-i="${i}"><div class="prt">${html}</div>
            ${st.mode==="sent"?`<div class="prb"><button class="spk sm" data-pa="say" data-i="${i}" aria-label="Nghe">🔊</button><button class="spk sm" data-pa="slow" data-i="${i}" aria-label="Nghe chậm">🐢</button>
              <button class="trybtn prmic" data-pa="mic" data-i="${i}">🎤 Đọc</button>${b!=null?`<span class="prsc ${cls(b)}">${b}%</span>`:""}</div><div class="prres" id="prres${i}"></div>`:""}</div>`}).join("")}</div>
      ${st.mode==="whole"?`<div class="row"><button class="trybtn" data-pa="wmic">🎤 Đọc cả đoạn</button></div><div class="small center">Đọc liền một mạch, xong bấm 🎤 lần nữa để dừng và chấm.</div><div class="small center prlive"></div><div class="prwres"></div>`:""}
      <div class="prsum">${s.tried?`Trung bình <b>${s.avg??"–"}%</b> · ${s.pass}/${s.n} câu đạt ≥ 80%${st.wholeBest!=null?` · cả đoạn tốt nhất <b>${st.wholeBest}%</b>`:""}`:`${S.length} câu · ${st.mode==="sent"?"bấm 🔊 nghe mẫu rồi 🎤 đọc từng câu":"nghe cả đoạn rồi đọc liền một mạch"}`}</div>
      <div class="small center plegend"><span class="pw pg">xanh</span> chuẩn · <span class="pw po">cam</span> hơi lệch · <span class="pw pr">đỏ</span> sai hoặc thiếu${azure()?"":" · chế độ miễn phí chỉ biết máy nghe ra chữ gì — nhập khóa Azure trong ⚙ để chấm từng âm"}</div></div>`;
    if(st.mode==="whole"&&st.whole)showWhole();
    st.res.forEach((r,i)=>{if(r&&st.mode==="sent")showSent(i)})}
  function showSent(i){const el=box.querySelector("#prres"+i),r=st.res[i];if(!el||!r)return;
    el.innerHTML=`<details class="prdet"><summary>${r.pct>=80?"✅":"🔁"} ${r.pct}% — xem chi tiết</summary>${r.scores?`<div class="tryscores">${Object.entries(r.scores).map(([k,v])=>`<div><b>${v==null?"–":Math.round(v)}</b><span>${k}</span></div>`).join("")}</div>`:""}
      ${weakHtml(r)}${r.heard?`<div class="small">Máy nghe thành: <i>${esc(r.heard)}</i></div>`:""}${r.note?`<div class="small">${r.note}</div>`:""}</details>${window.recRowHtml?recRowHtml({...r,target:null}):""}`}
  function showWhole(){const el=box.querySelector(".prwres"),r=st.whole;if(!el||!r)return;
    el.innerHTML=`<div class="tryv ${r.pct>=85?"good":r.pct>=60?"mid":"bad"}">Cả đoạn<span class="trypct">${r.pct}%</span></div>${r.scores?`<div class="tryscores">${Object.entries(r.scores).map(([k,v])=>`<div><b>${v==null?"–":Math.round(v)}</b><span>${k}</span></div>`).join("")}</div>`:""}
      ${r.flu?`<div class="tflu"><span>⏱ <b>${r.flu.wpm||"–"}</b> từ/phút</span><span>⏸ Ngắt giữa câu: <b>${r.flu.mid}</b></span><span>Lâu nhất: <b>${r.flu.longest}s</b></span></div>`:""}
      ${weakHtml(r)}${r.heard?`<div class="small">Máy nghe thành: <i>${esc(r.heard)}</i></div>`:""}${window.recRowHtml?recRowHtml({...r,target:null}):""}`}
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
      rec(b,clean(S[i]),false,live,r=>{st.res[i]=r;st.best[i]=Math.max(st.best[i]??-1,r.pct);if(r.pct>=80&&i<S.length-1)st.cur=i+1;draw();emit();
        const nx=box.querySelector(`.prl[data-i="${st.cur}"]`);nx&&nx.scrollIntoView({block:"nearest",behavior:"smooth"})});return}
    if(a==="wmic"){rec(b,S.map(clean).join(" "),true,box.querySelector(".prlive"),r=>{st.whole=r;st.wholeBest=Math.max(st.wholeBest??-1,r.pct);draw();emit()});return}};
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

/* ---------- Dạng bài "para" trong bài học ---------- */
function registerR(){const T=window.TutorAPI;if(!T||!T.R||T.R.para)return;
  T.R.para=(it,box)=>{
    const own=it.src&&it.src.userText&&splitSents(it.src.userText).length?it.src.userText:"",text=own||it.text||"";
    box.innerHTML=`<p class="qlabel">${it.label||"🎤 Đọc to đoạn văn"}</p>${it.src?`<div class="small center">${own?"Đoạn bạn vừa viết":"Bạn chưa viết — đọc bài mẫu"} · đọc từng câu, máy tô màu từng từ</div>`:""}
      <div id="paraBox"></div><div class="row"><button class="ibtn mini" data-t2="save">💾 Lưu vào Luyện đoạn</button></div>
      <div class="row stickynext"><button class="prim soft" id="pnext">Bỏ qua, tiếp →</button></div>`;
    const btn=box.querySelector("#pnext");
    const ctl=reader(box.querySelector("#paraBox"),text,{onUpdate:(st,s)=>{const ok=(s.avg??0)>=75;btn.className="prim"+(ok?"":" soft");btn.textContent=ok?`✅ Đạt ${s.avg}% · Tiếp →`:`Tiếp → (trung bình ${s.avg??0}%)`}});
    box.querySelector('[data-t2="save"]').onclick=e=>{upsert(text,it.saveTitle);e.target.textContent="✓ Đã lưu — mở ở tab Phát âm → 📝 Đoạn văn";e.target.disabled=true};
    btn.onclick=()=>{ctl.stop();const s=ctl.stats();if(it.answered)return;
      if(!s.tried){it.answered=true;T.nextItem();return}
      const ok=(s.avg??0)>=75;T.answer(it,ok,"",{direct:true,toast:ok?`✅ Đọc tốt · trung bình ${s.avg}%`:`🔁 Trung bình ${s.avg??0}% — luyện thêm ở 📝 Đoạn văn nhé`})}}}

window.ParaApp={reader,home,splitSents,
  openText(text,title){window.appSetView&&appSetView("para");const e=upsert(text,title);open(e.id)},
  registerR,count:()=>LIB.length};
registerR();document.addEventListener("DOMContentLoaded",registerR);
})();
