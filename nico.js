/* 🎬 Học với Nico – xem từng tập Nicos Weg A1 (DW) rồi học mẫu câu, cách dùng, từ vựng và luyện tập.
   Dữ liệu: nico-data.js (window.NICO). Từ vựng lấy từ bộ A1 của app theo kit liên quan.
   Tiến độ: localStorage "deNico" = {ep:{n:{w:1 đã xem, q:% luyện tập tốt nhất, s:số mẫu câu nói đạt}}} – có đồng bộ. */
(function(){
const D=window.NICO;if(!D)return;
const V=window.VocabAPI,esc=V.esc,shuffle=V.shuffle;
const store={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const P=()=>store.get("deNico",{ep:{}});
const prog=n=>{const p=P();return p.ep[n]||{}};
const setProg=(n,f)=>{const p=P();p.ep[n]=Object.assign(p.ep[n]||{},f(p.ep[n]||{}));store.set("deNico",p)};
const EPS=D.e,byN=new Map(EPS.map(e=>[e.n,e])),byId=new Map(EPS.map(e=>[e.id,e]));
const WM=new Map();for(const s of window.VOCAB_SETS)for(const w of s.words)WM.set(s.id+"|"+w.w,{s,w});
const KITS=window.TUTOR?window.TUTOR.kits:[];
function words(e){const seen=new Set(),out=[];for(const n of e.k)for(const key of (KITS[n-1]&&KITS[n-1].w)||[]){const x=WM.get(key);if(x&&!seen.has(key)){seen.add(key);out.push(x)}}return out.slice(0,14)}
const sayTxt=t=>String(t).replace(/([.!?])?\s+[–-]\s+/g,(m,p)=>p?p+" ":". ").replace(/([.!?])?\s*\/\s*/g,(m,p)=>p?p+" ":", ").replace(/…/g,"").trim();
const wrap=t=>window.DictAPI&&DictAPI.wrap?DictAPI.wrap(t):esc(t);
let root=null,view=null,busy=false;

/* ---------- Danh sách tập ---------- */
function list(){
  view={k:"list"};const p=P().ep,seen=EPS.filter(e=>p[e.n]&&p[e.n].w).length,done=EPS.filter(e=>p[e.n]&&p[e.n].q>=80).length;
  const units=[...new Set(EPS.map(e=>e.u))];
  root.innerHTML=`<div class="vtop"><button class="ibtn" data-t="home" aria-label="Quay lại">‹</button><div class="vtitle">🎬 Học với Nico</div><span></span></div>
    <div class="card"><p><b>Nicos Weg A1</b> là phim học tiếng Đức của đài DW: Nico từ Tây Ban Nha sang Đức, mỗi tập 1–2 phút là một tình huống đời thường.</p>
      <p class="small">Mỗi tập: xem video (bật phụ đề tiếng Đức) → học 3 mẫu câu và cách dùng → học từ vựng của chủ đề → luyện tập 10 câu → nói theo mẫu câu.</p>
      <div class="tflu"><span>👁 Đã xem: <b>${seen}/${EPS.length}</b></span><span>🧠 Luyện tập đạt: <b>${done}</b></span></div>
      ${(()=>{const nx=EPS.find(e=>!(p[e.n]&&p[e.n].q>=80));return nx?`<div class="row"><button class="prim" data-nk="ep" data-n="${nx.n}">${seen?"Học tiếp":"Bắt đầu"}: Tập ${nx.n} · ${esc(nx.t)} →</button></div>`:""})()}</div>
    ${units.map(u=>`<div class="card"><div class="sgh" style="margin-top:0"><b>${u+1}. ${esc(D.u[u]||"")}</b></div>${EPS.filter(e=>e.u===u).map(e=>{const q=p[e.n]||{};
      return `<button class="tstrow" data-nk="ep" data-n="${e.n}"><span>Tập ${e.n} · ${esc(e.t)}</span><span class="small">${q.w?"👁 ":""}${q.q!=null?`🧠 ${q.q}%`:q.w?"đã xem":""}${q.s?` · 🗣 ${q.s}/3`:""}</span></button>`}).join("")}</div>`).join("")}
    <p class="small center">Video thuộc Deutsche Welle (DW), phát trực tiếp từ YouTube. Mẫu câu & cách dùng do app soạn theo chủ đề từng tập.</p>`;
  window.scrollTo({top:0})}

/* ---------- Một tập ---------- */
function ep(n){
  const e=byN.get(n);if(!e)return list();view={k:"ep",n};const q=prog(n),ws=words(e),i=EPS.indexOf(e);
  root.innerHTML=`<div class="vtop"><button class="ibtn" data-nk="list" aria-label="Danh sách tập">‹</button><div class="vtitle">Tập ${e.n}: ${esc(e.t)}</div><span></span></div>
    <div class="card"><div class="small">Chương ${e.u+1}: ${esc(D.u[e.u]||"")}</div>
      <div class="nvid"><iframe src="https://www.youtube-nocookie.com/embed/${e.id}?rel=0&cc_load_policy=1&cc_lang_pref=de&hl=de&playsinline=1" title="${esc(e.t)}" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>
      <p class="small">Xem 2–3 lượt: lượt 1 không phụ đề, đoán ý · lượt 2 bật phụ đề tiếng Đức (CC) · lượt 3 dừng từng câu và nói nhại theo. <a href="https://www.youtube.com/watch?v=${e.id}" target="_blank" rel="noopener">Mở trên YouTube</a></p>
      <div class="row"><button class="${q.w?"ibtn":"prim"}" data-nk="seen" data-n="${n}">${q.w?"✓ Đã xem":"Đánh dấu đã xem ✓"}</button></div></div>
    <div class="card"><div class="sgh" style="margin-top:0"><b>📝 Mẫu câu & cách dùng</b><span class="small">bấm vào từ để tra nghĩa</span></div>
      ${e.p.map((p,k)=>`<div class="npat" data-k="${k}"><div class="npde">${wrap(p[0])}</div>${window.ipaFor&&ipaFor(p[0].split(/\s+[–-]\s+|\s*\/\s*/)[0])?`<div class="ipa-in small">/${esc(ipaFor(p[0].split(/\s+[–-]\s+|\s*\/\s*/)[0]))}/</div>`:""}
        <div class="npvi">${esc(p[1])}</div><div class="npnote">💡 ${esc(p[2])}</div>
        <div class="row"><button class="ibtn" data-nk="say" data-k="${k}">🔊 Nghe</button><button class="ibtn" data-nk="slow" data-k="${k}">🐢</button><button class="trybtn" data-nk="mic" data-k="${k}">🎤 Nói theo</button></div>
        <div class="small center nlive"></div><div class="tryres nres"></div></div>`).join("")}</div>
    <div class="card"><div class="sgh" style="margin-top:0"><b>🗂 Từ vựng của chủ đề</b><span class="small">${ws.length} từ · bấm để xem chi tiết</span></div>
      <div class="nwords">${ws.map(x=>`<div class="nw"><button class="nwt" data-lk2="${esc(x.w.w)}">${V.termHtml(x.w)}</button>${x.w.i?`<span class="ipa-in small">/${esc(x.w.i)}/</span>`:""}<span class="nwm">${esc(x.w.m||"")}</span><button class="spk sm" data-say="${esc(V.term(x.w))}" aria-label="Nghe">🔊</button></div>`).join("")}</div></div>
    <div class="card center"><p><b>🧠 Luyện tập</b> · 10 câu: nghĩa từ, chọn câu đúng tình huống, điền từ, nghe chọn câu.</p>${q.q!=null?`<p class="small">Điểm tốt nhất: <b>${q.q}%</b></p>`:""}
      <div class="row"><button class="prim" data-nk="quiz" data-n="${n}">${q.q!=null?"Luyện lại":"Bắt đầu luyện tập"} →</button></div></div>
    <div class="row"><button class="ibtn" data-nk="ep" data-n="${EPS[i-1]?EPS[i-1].n:n}" ${i?"":"disabled"}>‹ Tập trước</button><button class="ibtn" data-nk="ep" data-n="${EPS[i+1]?EPS[i+1].n:n}" ${EPS[i+1]?"":"disabled"}>Tập sau ›</button></div>`;
  window.scrollTo({top:0})}

async function sayMic(btn,n,k){
  if(busy){window.appScoreStop&&appScoreStop();return}
  const e=byN.get(n),box=btn.closest(".npat"),res=box.querySelector(".nres"),live=box.querySelector(".nlive");
  const target=sayTxt(e.p[k][0].split(/\s*\/\s*/)[0]).replace(/\.\s*$/,"").trim();
  busy=true;btn.classList.add("on");const lbl=btn.innerHTML;btn.innerHTML="⏳ Đợi mic…";res.innerHTML="";const lv=window.liveBind?liveBind(live):null;
  try{const r=await appScore(target,{onReady:()=>{btn.innerHTML="⏹ Đang nghe… bấm để chấm";lv&&lv.ready()},onInterim:s=>lv&&lv.interim(s),onLevel:v=>lv&&lv.level(v),onProcessing:()=>{btn.innerHTML="⏳ Đang chấm…";lv&&lv.processing()}});
    live.innerHTML="";res.innerHTML=V.renderTry(r);
    const ok=r.pct>=(r.mode==="azure"?80:70);
    if(ok){const p=prog(n),got=new Set(p.sk||[]);got.add(k);setProg(n,()=>({sk:[...got],s:got.size}))}
    res.insertAdjacentHTML("afterbegin",`<div class="tverd ${ok?"good":"bad"}">${ok?"✅ <b>Đạt!</b>":"Chưa đạt — nghe 🔊 rồi nói lại nhé."}</div>`)}
  catch(err){live.innerHTML="";if(!(err&&err.cancelled))res.innerHTML=`<div class="tryerr">⚠️ ${esc(err.message||err)}</div>`}
  finally{busy=false;btn.classList.remove("on");btn.innerHTML=lbl}}

/* ---------- Luyện tập ---------- */
function buildQuiz(e){
  const ws=words(e),others=EPS.filter(x=>x!==e),otherW=shuffle(others.flatMap(x=>words(x))).slice(0,60),otherP=others.flatMap(x=>x.p);
  const Q=[];const opts=(ok,pool,f)=>shuffle([ok,...shuffle(pool.filter(x=>f(x)!==f(ok))).filter((x,i,a)=>a.findIndex(y=>f(y)===f(x))===i).slice(0,3)]);
  shuffle(ws).slice(0,4).forEach((x,i)=>{
    if(i%2===0)Q.push({h:`<p class="qlabel">Từ này nghĩa là gì?</p><div class="qbig">${V.termHtml(x.w)}</div>`,say:V.term(x.w),o:opts(x,[...ws,...otherW],y=>y.w.m).map(y=>({h:esc(y.w.m),ok:y===x})),ans:`${V.termHtml(x.w)} = ${esc(x.w.m)}`});
    else Q.push({h:`<p class="qlabel">Tiếng Đức nói thế nào?</p><div class="qbig">${esc(x.w.m)}</div>`,o:opts(x,[...ws,...otherW],y=>y.w.w).map(y=>({h:V.termHtml(y.w),ok:y===x})),ans:`${esc(x.w.m)} = ${V.termHtml(x.w)}`,sayAfter:V.term(x.w)})});
  e.p.forEach(p=>Q.push({h:`<p class="qlabel">Tình huống: bạn muốn nói…</p><div class="qbig tlong">„${esc(p[1])}“</div>`,o:opts(p,otherP,y=>y[0]).map(y=>({h:esc(y[0]),ok:y===p})),ans:`${esc(p[0])}<div class="small">💡 ${esc(p[2])}</div>`,sayAfter:sayTxt(p[0])}));
  shuffle(e.p).slice(0,2).forEach(p=>{const sent=p[0].split(/\s*\/\s*|\s+[–-]\s+/)[0],toks=sent.split(/\s+/);
    const cand=toks.map((t,i)=>({t:t.replace(/[.,!?…]/g,""),i})).filter(x=>x.t.length>=4);if(!cand.length)return;const c=cand[Math.floor(Math.random()*cand.length)];
    const pool=[...new Set(otherP.flatMap(y=>y[0].split(/\s+/)).map(t=>t.replace(/[.,!?…„“]/g,"")).filter(t=>t.length>=4&&t!==c.t&&/^[A-ZÄÖÜ]/.test(t)===/^[A-ZÄÖÜ]/.test(c.t)))];
    const o=shuffle([c.t,...shuffle(pool).slice(0,3)]);
    Q.push({h:`<p class="qlabel">Điền từ còn thiếu</p><div class="qbig tlong">${toks.map((t,i)=>i===c.i?`<span class="ngap">____</span>${esc(t.replace(/^.*?([.,!?…]*)$/,"$1"))}`:esc(t)).join(" ")}</div><div class="small center">${esc(p[1])}</div>`,o:o.map(t=>({h:esc(t),ok:t===c.t})),ans:esc(sent),sayAfter:sayTxt(sent)})});
  const lp=e.p[Math.floor(Math.random()*e.p.length)];
  Q.push({h:`<p class="qlabel">Nghe và chọn câu bạn nghe thấy</p><div class="row"><button class="prim" data-nk="qsay">🔊 Nghe</button><button class="ibtn" data-nk="qslow">🐢</button></div>`,say:sayTxt(lp[0]),auto:true,o:opts(lp,otherP,y=>y[0]).map(y=>({h:esc(y[0]),ok:y===lp})),ans:`${esc(lp[0])} — ${esc(lp[1])}`});
  return Q.slice(0,10)}
function quiz(n){const e=byN.get(n);view={k:"quiz",n,Q:buildQuiz(e),i:0,r:0};qDraw()}
function qDraw(){
  const {Q,i}=view,e=byN.get(view.n);
  if(i>=Q.length){const pc=Math.round(100*view.r/Q.length);setProg(view.n,p=>({q:Math.max(p.q??0,pc)}));
    root.innerHTML=`<div class="vtop"><button class="ibtn" data-nk="ep" data-n="${view.n}" aria-label="Quay lại">‹</button><div class="vtitle">Tập ${e.n}: Kết quả</div><span></span></div>
      <div class="card center"><div class="big">${pc>=90?"🏆":pc>=70?"🎉":"💪"}</div><div class="score">${pc}%</div><p>Đúng ${view.r}/${Q.length} câu.</p>${pc<80?"<p class='small'>Xem lại video và phần mẫu câu rồi luyện lại để đạt từ 80% nhé.</p>":""}</div>
      <div class="row"><button class="ibtn" data-nk="quiz" data-n="${view.n}">Luyện lại</button><button class="ibtn" data-nk="ep" data-n="${view.n}">Về tập này</button>${EPS[EPS.indexOf(e)+1]?`<button class="prim" data-nk="ep" data-n="${EPS[EPS.indexOf(e)+1].n}">Tập ${EPS[EPS.indexOf(e)+1].n} →</button>`:""}</div>`;
    window.scrollTo({top:0});return}
  const q=Q[i];
  root.innerHTML=`<div class="vtop"><button class="ibtn" data-nk="ep" data-n="${view.n}" aria-label="Thoát">✕</button><div class="vtitle">Tập ${e.n} · Luyện tập</div><span class="small">${i+1}/${Q.length}</span></div>
    <div class="pbar" style="margin:0 0 12px"><i style="display:block;height:100%;width:${Math.round(100*i/Q.length)}%;background:var(--green)"></i></div>
    <div class="card" id="nq">${q.h}<div class="mcopts">${q.o.map((o,k)=>`<button class="mco" data-nk="qa" data-k="${k}">${o.h}</button>`).join("")}</div><div id="nfb"></div></div>`;
  if(q.auto||q.say&&q.h.includes("qbig"))setTimeout(()=>speak(q.say),250);
  window.scrollTo({top:0})}
function qAnswer(k){
  const q=view.Q[view.i];if(q.done)return;q.done=true;const ok=q.o[k].ok;if(ok)view.r++;
  root.querySelectorAll("#nq .mco").forEach((b,j)=>{b.disabled=true;if(q.o[j].ok)b.classList.add("right");else if(j===k)b.classList.add("wrong")});
  document.getElementById("nfb").innerHTML=`<div class="fb ${ok?"good":"bad"}"><div class="fbh">${ok?"✅ Đúng rồi!":"❌ Chưa đúng"}</div><div class="tfbtxt">${q.ans}</div><div class="row stickynext"><button class="prim" id="tnext" data-nk="qnext">Tiếp →</button></div></div>`;
  if(q.sayAfter)setTimeout(()=>speak(q.sayAfter),200);
  document.getElementById("nfb").scrollIntoView({behavior:"smooth",block:"nearest"})}

/* ---------- Sự kiện ---------- */
function onClick(ev){
  if(!view)return;const b=ev.target.closest("[data-nk]");if(!b||!root.contains(b))return;
  const a=b.dataset.nk,n=+b.dataset.n||view.n,k=+b.dataset.k;ev.stopPropagation();
  if(a==="list")return list();
  if(a==="ep")return ep(n);
  if(a==="seen"){setProg(n,p=>({w:p.w?0:1}));return ep(n)}
  if(a==="say"||a==="slow")return speak(sayTxt(byN.get(view.n).p[k][0]),a==="slow");
  if(a==="mic")return sayMic(b,view.n,k);
  if(a==="quiz")return quiz(n);
  if(a==="qa")return qAnswer(k);
  if(a==="qnext"){view.i++;return qDraw()}
  if(a==="qsay"||a==="qslow")return speak(view.Q[view.i].say,a==="qslow");
}
function open(r,n){
  if(root!==r){r.addEventListener("click",onClick,true);root=r}
  // rời màn hình Nico khi tutor vẽ lại trang khác
  n?ep(n):list()}
function close(){view=null}
window.NicoApp={open,close,epOfVideo:id=>byId.get(id)?byId.get(id).n:null,count:EPS.length};
})();
