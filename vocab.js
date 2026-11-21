/* ============ Từ vựng: bộ thẻ kiểu Quizlet ============ */
(function(){
const root=document.getElementById("vVocab");
const speak=(t,s)=>window.appSpeak&&window.appSpeak(t,s);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

/* ---------- Dữ liệu & tiến độ ---------- */
let P=store.get("deVocabProg",{});          // key → {lv,ok,bad,star}
let BEST=store.get("deMatchBest",{});
let CUSTOM=store.get("deCustomSets",[]);
const allSets=()=>[...window.VOCAB_SETS,...CUSTOM];
const keyOf=(set,w)=>(set.review&&w._k?w._k:set.id)+"|"+w.w;
const pr=k=>P[k]||(P[k]={lv:0,ok:0,bad:0,star:false});
const save=()=>store.set("deVocabProg",P);
const mastered=(set,w)=>(P[keyOf(set,w)]||{}).lv>=3;
function mark(set,w,good){const p=pr(keyOf(set,w));if(good){p.ok++;p.lv=Math.min(4,p.lv+1)}else{p.bad++;p.lv=Math.max(0,p.lv-2)}save()}
const term=w=>(w.a?w.a+" ":"")+w.w;
const artHtml=w=>w.a?`<span class="art-${w.a}">${w.a}</span> `:"";
const termHtml=w=>artHtml(w)+esc(w.w);
const TYPE={n:"danh từ",v:"động từ",adj:"tính từ",adv:"trạng từ",phr:"cụm từ"};

/* ---------- So sánh câu trả lời ---------- */
const fold=s=>String(s).normalize("NFC").toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")
  .replace(/[.,!?;:"'„“”()]/g," ").replace(/\s+/g," ").trim();
function lev(a,b){const d=Array.from({length:a.length+1},(_,i)=>[i]);for(let j=1;j<=b.length;j++)d[0][j]=j;
  for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[a.length][b.length]}
/* trả về {ok, msg} – msg giải thích khi gần đúng */
function check(input,w,needArticle){
  const want=needArticle&&w.a?term(w):w.w, got=input.trim();
  if(!got)return{ok:false,msg:"Bạn chưa nhập gì."};
  if(fold(got)===fold(want)){
    const capOk=!(w.t==="n")||/[A-ZÄÖÜ]/.test(got.replace(/^(der|die|das)\s+/i,"")[0]||"");
    const umlautTyped=/[äöüß]/i.test(want)&&!/[äöüß]/i.test(got);
    return{ok:true,msg:[!capOk?"Lưu ý: danh từ tiếng Đức luôn <b>viết hoa</b> chữ cái đầu.":"",umlautTyped?`Chấp nhận cách gõ thay thế; viết chuẩn là <b>${esc(want)}</b>.`:""].filter(Boolean).join(" ")};
  }
  if(needArticle&&w.a){
    const m=fold(got).match(/^(der|die|das) (.+)$/);
    if(!m&&fold(got)===fold(w.w))return{ok:false,msg:`Thiếu mạo từ — phải là <b>${w.a}</b> ${esc(w.w)}.`};
    if(m&&fold(m[2])===fold(w.w))return{ok:false,msg:`Sai giống: không phải <b>${m[1]}</b> mà là <b>${w.a}</b>.`};
  }
  const d=lev(fold(got),fold(want));
  if(d<=1&&fold(want).length>4)return{ok:false,near:true,msg:"Gần đúng — sai một chữ cái. Kiểm tra lại chính tả."};
  return{ok:false,msg:""};
}
function genderHint(w){
  if(!w.a)return"";const x=w.w.toLowerCase();
  if(/(ung|heit|keit|schaft|ion|tät|ie|ei)$/.test(x)&&w.a==="die")return"Mẹo: đuôi -ung, -heit, -keit, -schaft, -ion, -tät, -ie, -ei → hầu như luôn là <b>die</b>.";
  if(/(chen|lein)$/.test(x))return"Mẹo: đuôi -chen, -lein → luôn là <b>das</b>.";
  if(/(tag|woch)$/.test(x)&&w.a==="der")return"Mẹo: các ngày trong tuần, tháng, mùa → <b>der</b>.";
  if(/(er|el)$/.test(x)&&w.a==="der")return"Mẹo: nhiều danh từ đuôi -er, -el là <b>der</b> (nhưng có ngoại lệ: die Mutter, das Fenster).";
  if(/e$/.test(x)&&w.a==="die")return"Mẹo: khoảng 90% danh từ đuôi -e là <b>die</b>.";
  return"";
}

/* ---------- Khung chung ---------- */
let curSet=null,starOnly=false;
const wordsOf=set=>{const ws=set.words;if(!starOnly)return ws;const s=ws.filter(w=>pr(keyOf(set,w)).star);return s.length?s:ws};
function screen(html){root.innerHTML=html;window.scrollTo({top:0})}
function topbar(title,back){return `<div class="vtop"><button class="ibtn" data-act="${back}" aria-label="Quay lại">‹</button><div class="vtitle">${title}</div><span></span></div>`}
function infoBlock(w,opts={}){ // phần giải nghĩa đầy đủ – dùng ở mặt sau thẻ & phản hồi
  return `<div class="winfo">
    <div class="wterm">${termHtml(w)} <button class="spk" data-say="${esc(term(w))}" aria-label="Nghe">🔊</button></div>
    ${w.i?`<div class="wipa">/${esc(w.i)}/</div>`:""}
    <div class="wmean">${esc(w.m)} <span class="wtype">${TYPE[w.t]||""}</span></div>
    ${w.pl?`<div class="wrow"><span>Số nhiều</span>${w.pl==="—"?"<i>thường không dùng số nhiều</i>":esc(w.pl)}</div>`:""}
    ${w.f?`<div class="wrow"><span>Chia</span>${esc(w.f)}</div>`:""}
    ${w.n?`<div class="wnote"><b>🗣 Phát âm & trọng âm:</b> ${w.n}</div>`:""}
    ${opts.gender&&genderHint(w)?`<div class="wnote alt">${genderHint(w)}</div>`:""}
    ${w.ex?`<div class="wex">${esc(w.ex.replace(/[\[\]]/g,""))} <button class="spk" data-say="${esc(w.ex.replace(/[\[\]]/g,""))}" aria-label="Nghe câu">🔊</button><br><span>${esc(w.exv||"")}</span></div>`:""}
    <button class="ibtn mini" data-practice="${esc(term(w))}" data-ipa="${esc(w.i||"")}" data-mean="${esc(w.m)}">🎤 Luyện phát âm từ này</button>
  </div>`;
}
function feedback(good,w,msg,extra=""){
  return `<div class="fb ${good?"good":"bad"}"><div class="fbh">${good?"✅ Chính xác!":"❌ Chưa đúng"}</div>${msg?`<p>${msg}</p>`:""}${extra}${infoBlock(w,{gender:true})}</div>`;
}
const kbd=`<div class="kbd">${["ä","ö","ü","ß","Ä","Ö","Ü"].map(c=>`<button type="button" data-ch="${c}">${c}</button>`).join("")}</div>`;

/* ---------- Trang chủ ---------- */
function home(){
  curSet=null;
  const weak=[];allSets().forEach(s=>s.words.forEach(w=>{const p=P[keyOf(s,w)];if(p&&(p.bad>0||p.lv>0)&&p.lv<3)weak.push({s,w})}));
  const total=allSets().reduce((n,s)=>n+s.words.length,0),done=allSets().reduce((n,s)=>n+s.words.filter(w=>mastered(s,w)).length,0);
  screen(`
   <div class="vhero"><div><div class="big">${done}<small>/${total}</small></div><div class="small">từ đã thuộc</div></div>
     <div class="vhero-r">${weak.length?`<b>${weak.length} từ</b> cần ôn lại<button class="prim" data-act="review">Ôn ngay</button>`:`<span class="small">Chọn một bộ bên dưới để bắt đầu. Từ nào bạn làm sai sẽ hiện ở đây để ôn lại.</span>`}</div></div>
   <div class="sets">${allSets().map((s,i)=>{const n=s.words.length,d=s.words.filter(w=>mastered(s,w)).length;
     return `<button class="setc" data-set="${i}"><span class="lvl">${esc(s.level||"Của bạn")}</span><b>${esc(s.title)}</b><span class="small">${n} từ · đã thuộc ${d}</span><span class="pbar"><i style="width:${n?Math.round(100*d/n):0}%"></i></span></button>`}).join("")}
     <button class="setc add" data-act="create"><b>＋ Tạo bộ của bạn</b><span class="small">Dán danh sách từ của riêng bạn</span></button></div>`);
}

/* ---------- Trang bộ từ ---------- */
const MODES=[["cards","🃏","Thẻ ghi nhớ","Lật thẻ, tự đánh giá"],["learn","🧠","Học","Trắc nghiệm → viết, đến khi thuộc"],["mc","✅","Trắc nghiệm","Chọn nghĩa đúng"],["write","✍️","Viết từ","Nhìn nghĩa, viết từ Đức"],
 ["cloze","🧩","Điền từ","Điền từ vào câu ví dụ"],["dict","🎧","Nghe & viết","Nghe rồi viết lại"],["gender","🎨","der · die · das","Chọn đúng giống"],["match","⏱","Ghép thẻ","Ghép từ với nghĩa, tính giờ"],["test","📝","Kiểm tra","10 câu tổng hợp, chấm điểm"]];
function setPage(i){
  if(i!=null)curSet=allSets()[i];const s=curSet,n=s.words.length,d=s.words.filter(w=>mastered(s,w)).length;
  const hasN=s.words.some(w=>w.a),hasEx=s.words.some(w=>w.ex);
  screen(`${topbar(esc(s.title),"home")}
   <div class="card"><div class="small">${n} từ · đã thuộc ${d}/${n}</div><span class="pbar"><i style="width:${Math.round(100*d/n)}%"></i></span>
    <label class="chk"><input type="checkbox" id="starOnly" ${starOnly?"checked":""}> Chỉ học các từ gắn ★ (${s.words.filter(w=>pr(keyOf(s,w)).star).length})</label></div>
   <div class="modes">${MODES.filter(m=>!(m[0]==="gender"&&!hasN)&&!(m[0]==="cloze"&&!hasEx)).map(m=>`<button class="mode" data-mode="${m[0]}"><span class="mi">${m[1]}</span><b>${m[2]}</b><span class="small">${m[3]}</span></button>`).join("")}</div>
   <div class="card"><b>Danh sách từ</b>
    <div class="wlist">${s.words.map((w,j)=>{const p=P[keyOf(s,w)]||{};return `<div class="wl"><div class="wl-main"><div>${termHtml(w)} <span class="wl-ipa">${w.i?"/"+esc(w.i)+"/":""}</span></div><div class="small">${esc(w.m)}${w.pl&&w.pl!=="—"&&w.pl[0]!=="("?" · "+esc(w.pl):""}</div></div>
      <span class="lvdot lv${Math.min(p.lv||0,3)}" title="Mức thuộc"></span><button class="spk" data-say="${esc(term(w))}">🔊</button><button class="star ${p.star?"on":""}" data-star="${j}" aria-label="Gắn sao">★</button></div>`}).join("")}</div>
    ${s.custom?`<div class="row"><button class="ibtn" data-act="delset">Xoá bộ này</button></div>`:""}</div>`);
}

/* ---------- 1. Thẻ ghi nhớ ---------- */
let fc=null;
function cards(){fc={list:shuffle(wordsOf(curSet)),i:0,flip:false,dir:fc?.dir||"de",known:[],learning:[]};drawCard()}
function drawCard(){
  if(fc.i>=fc.list.length){return screen(`${topbar("Thẻ ghi nhớ","set")}<div class="card center"><div class="big">🎉</div><p>Xong một lượt! Đã thuộc <b>${fc.known.length}</b> · Đang học <b>${fc.learning.length}</b></p>
    <div class="row">${fc.learning.length?`<button class="prim" data-act="cardsAgain">Học lại ${fc.learning.length} từ chưa thuộc</button>`:""}<button class="ibtn" data-mode="cards">Làm lại từ đầu</button><button class="ibtn" data-act="set">Về bộ từ</button></div></div>`)}
  const w=fc.list[fc.i],front=fc.dir==="de"?`<div class="fterm">${termHtml(w)}</div>${w.i?`<div class="wipa">/${esc(w.i)}/</div>`:""}`:`<div class="fterm vi">${esc(w.m)}</div>`;
  screen(`${topbar("Thẻ ghi nhớ","set")}
   <div class="fcbar"><span class="small">${fc.i+1} / ${fc.list.length}</span><button class="ibtn mini" data-act="dir">${fc.dir==="de"?"Đức → Việt":"Việt → Đức"} ⇄</button></div>
   <div class="flip ${fc.flip?"on":""}" id="flip"><div class="face front">${front}<div class="small hint">Chạm để lật</div></div><div class="face back">${infoBlock(w)}</div></div>
   <div class="row"><button class="ibtn big2" data-act="cardNo">✗ Đang học</button><button class="prim big2" data-act="cardYes">✓ Đã thuộc</button></div>`);
  if(fc.dir==="de"&&!fc.flip)speak(term(w));
}

/* ---------- Câu hỏi dùng chung ---------- */
function mcQuestion(w,pool,dir){ // dir: "de" (hỏi nghĩa) | "vi" (hỏi từ)
  const others=shuffle(pool.filter(x=>x!==w&&x.m!==w.m)).sort((a,b)=>(b.t===w.t)-(a.t===w.t)).slice(0,3);
  const opts=shuffle([w,...others]);
  return{type:"mc",w,dir,opts};
}
function renderQ(q,head=""){
  const w=q.w;let body="";
  if(q.type==="mc")body=`<p class="qlabel">${q.dir==="de"?"Chọn nghĩa đúng":"Chọn từ tiếng Đức đúng"}</p>
    <div class="qbig">${q.dir==="de"?termHtml(w)+(w.i?`<div class="wipa">/${esc(w.i)}/</div>`:""):esc(w.m)}</div>
    <div class="mcopts">${q.opts.map((o,k)=>`<button class="mco" data-opt="${k}">${q.dir==="de"?esc(o.m):termHtml(o)}</button>`).join("")}</div>`;
  if(q.type==="write")body=`<p class="qlabel">Viết bằng tiếng Đức${w.a?" (kèm der/die/das)":""}</p><div class="qbig vi">${esc(w.m)}</div>
    <form class="ansf" data-form="1"><input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${w.a?"vd: der Tisch":"Nhập từ…"}">${kbd}<div class="row"><button type="button" class="ibtn" data-act="hint">Gợi ý</button><button class="prim">Kiểm tra</button></div></form><div class="small" id="hintTxt"></div>`;
  if(q.type==="dict")body=`<p class="qlabel">Nghe rồi viết lại${w.a?" (kèm der/die/das)":""}</p>
    <div class="row"><button type="button" class="prim big2" data-act="replay">🔊 Nghe</button><button type="button" class="ibtn big2" data-act="replaySlow">🐢 Chậm</button></div>
    <form class="ansf" data-form="1"><input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Viết những gì bạn nghe…">${kbd}<div class="row"><button type="button" class="ibtn" data-act="giveup">Không nghe ra</button><button class="prim">Kiểm tra</button></div></form>`;
  if(q.type==="cloze"){const parts=w.ex.split(/\[(.+?)\]/);q.blanks=parts.filter((_,k)=>k%2);let b=0;
    body=`<p class="qlabel">Điền từ còn thiếu vào câu</p><div class="cloze">${parts.map((p,k)=>k%2?`<input class="blank" data-b="${b++}" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${Math.max(4,p.length+1)}ch" aria-label="Chỗ trống">`:esc(p)).join("")}</div>
    <div class="small center">${esc(w.exv)}</div><div class="center small">Gợi ý: <b>${esc(w.m)}</b> (${TYPE[w.t]||""}${w.t==="v"?" – nhớ chia động từ":""})</div>
    <form class="ansf" data-form="1">${kbd}<div class="row"><button type="button" class="ibtn" data-act="hint">Chữ cái đầu</button><button class="prim">Kiểm tra</button></div></form><div class="small center" id="hintTxt"></div>`}
  if(q.type==="gender")body=`<p class="qlabel">Chọn đúng giống</p><div class="qbig">${esc(w.w)}</div><div class="center small">${esc(w.m)}</div>
    <div class="gopts">${["der","die","das"].map(a=>`<button class="gopt g-${a}" data-g="${a}">${a}</button>`).join("")}</div>`;
  return head+`<div class="card q" id="qcard">${body}<div id="fbox"></div></div>`;
}
let activeQ=null;
function bindQ(q,done){ // done(good) gọi khi trả lời xong
  activeQ=q;
  const fbox=document.getElementById("fbox"),w=q.w;let answered=false;
  const next=`<div class="row"><button class="prim" id="nextBtn">Tiếp →</button></div>`;
  const finish=(good,msg,extra)=>{if(answered)return;answered=true;
    fbox.innerHTML=feedback(good,w,msg,extra)+(good?"":`<div class="row"><button class="ibtn mini" id="override">Tôi trả lời đúng (bấm nhầm/gõ nhầm)</button></div>`)+next;
    document.querySelectorAll("#qcard input,#qcard .mco,#qcard .gopt").forEach(e=>e.disabled=true);
    speak(term(w));let result=good;
    document.getElementById("override")?.addEventListener("click",e=>{result=true;e.target.textContent="✓ Đã tính là đúng";e.target.disabled=true});
    const nb=document.getElementById("nextBtn");nb.focus({preventScroll:true});fbox.scrollIntoView({behavior:"smooth",block:"nearest"});
    nb.onclick=()=>done(result);
  };
  q.finish=finish;
  if(q.type==="mc")document.querySelectorAll(".mco").forEach(b=>b.onclick=()=>{const o=q.opts[+b.dataset.opt],good=o===w;
    b.classList.add(good?"right":"wrong");if(!good)document.querySelectorAll(".mco").forEach((x,k)=>{if(q.opts[k]===w)x.classList.add("right")});
    finish(good,good?"":`Bạn chọn: ${q.dir==="de"?esc(o.m):termHtml(o)}`)});
  if(q.type==="gender")document.querySelectorAll(".gopt").forEach(b=>b.onclick=()=>{const good=b.dataset.g===w.a;b.classList.add(good?"right":"wrong");
    if(!good)document.querySelector(`.gopt[data-g=${w.a}]`).classList.add("right");finish(good,"")});
  const form=document.querySelector("[data-form]");
  if(form){
    const first=document.querySelector("#qcard input");setTimeout(()=>first&&first.focus({preventScroll:true}),50);
    form.onsubmit=e=>{e.preventDefault();
      if(q.type==="cloze"){const ins=[...document.querySelectorAll(".blank")];let all=true,msgs=[];
        ins.forEach((inp,k)=>{const want=q.blanks[k],r=check(inp.value,{w:want,t:"x"},false);inp.classList.add(r.ok?"right":"wrong");if(!r.ok){all=false;msgs.push(`Chỗ trống ${ins.length>1?k+1:""}: đáp án <b>${esc(want)}</b>${r.msg?" — "+r.msg:""}`)}else if(r.msg)msgs.push(r.msg)});
        finish(all,msgs.join("<br>"));return}
      const r=check(document.getElementById("ans").value,w,!!w.a);
      document.getElementById("ans").classList.add(r.ok?"right":"wrong");
      finish(r.ok,(r.ok?"":`Đáp án: <b>${termHtml(w)}</b>. `)+(r.msg||""));
    };
    form.querySelectorAll("[data-ch]").forEach(b=>b.onmousedown=e=>e.preventDefault());
    document.querySelectorAll("#qcard input.blank").forEach(inp=>inp.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();form.requestSubmit()}});
  }
  if(q.type==="dict")setTimeout(()=>speak(term(w)),250);
}
/* chèn ä ö ü ß vào ô đang gõ */
let lastInput=null;
root.addEventListener("focusin",e=>{if(e.target.matches("input#ans,input.blank"))lastInput=e.target});

/* ---------- 2. Học (thích ứng) ---------- */
let ln=null;
function learn(words){
  const base=words||wordsOf(curSet);const todo=base.filter(w=>!mastered(curSet,w));
  ln={pool:base,queue:shuffle(todo.length?todo:base).map(w=>({w,stage:0})),done:0};ln.total=ln.queue.length;learnNext();
}
function learnNext(){
  if(!ln.queue.length)return screen(`${topbar("Học","set")}<div class="card center"><div class="big">🏆</div><p>Bạn đã thuộc cả <b>${ln.total}</b> từ trong lượt này!</p><div class="row"><button class="prim" data-mode="test">Làm bài kiểm tra</button><button class="ibtn" data-act="set">Về bộ từ</button></div></div>`);
  const it=ln.queue.shift(),w=it.w;
  const q=it.stage===0?mcQuestion(w,ln.pool,Math.random()<.5?"de":"vi"):(w.ex&&Math.random()<.4?{type:"cloze",w}:{type:"write",w});
  const head=`${topbar("Học","set")}<div class="lnbar"><span class="pbar"><i style="width:${Math.round(100*ln.done/ln.total)}%"></i></span><span class="small">${ln.done}/${ln.total} đã thuộc · ${it.stage===0?"Bước 1: nhận biết":"Bước 2: tự viết"}</span></div>`;
  screen(renderQ(q,head));
  bindQ(q,good=>{mark(curSet,w,good);
    if(good&&it.stage===1){ln.done++}else{if(good)it.stage=1;ln.queue.splice(Math.min(ln.queue.length,good?2+Math.floor(Math.random()*3):3),0,it)}
    learnNext()});
}

/* ---------- 3–7. Chuỗi câu hỏi (trắc nghiệm, viết, điền, nghe, giống) ---------- */
let run=null;
const TITLES={mc:"Trắc nghiệm",write:"Viết từ",cloze:"Điền từ",dict:"Nghe & viết",gender:"der · die · das",test:"Kiểm tra"};
function series(kind,words){
  let ws=words||wordsOf(curSet);
  if(kind==="gender")ws=ws.filter(w=>w.a);if(kind==="cloze")ws=ws.filter(w=>w.ex);
  let qs;
  if(kind==="test"){const pool=shuffle(curSet.words).slice(0,10);
    qs=pool.map((w,k)=>{const r=k%10;if(r<4)return mcQuestion(w,curSet.words,k%2?"vi":"de");if(r<7)return{type:"write",w};if(r<9&&w.ex)return{type:"cloze",w};if(w.a)return{type:"gender",w};return{type:"write",w}})}
  else qs=shuffle(ws).map(w=>kind==="mc"?mcQuestion(w,curSet.words,Math.random()<.5?"de":"vi"):{type:kind,w});
  run={kind,qs,i:0,right:0,wrong:[]};seriesNext();
}
function seriesNext(){
  if(run.i>=run.qs.length){const pct=Math.round(100*run.right/run.qs.length);
    return screen(`${topbar(TITLES[run.kind],"set")}<div class="card center"><div class="big">${pct>=90?"🌟":pct>=70?"👍":"💪"}</div><div class="score">${run.right}/${run.qs.length} <small>(${pct}%)</small></div>
     ${run.wrong.length?`<p class="small">Các từ làm sai — ôn lại nhé:</p><div class="wlist left">${run.wrong.map(w=>`<div class="wl"><div class="wl-main"><div>${termHtml(w)} <span class="wl-ipa">${w.i?"/"+esc(w.i)+"/":""}</span></div><div class="small">${esc(w.m)}</div>${w.n?`<div class="small">🗣 ${w.n}</div>`:""}</div><button class="spk" data-say="${esc(term(w))}">🔊</button></div>`).join("")}</div>
     <div class="row"><button class="prim" data-act="redoWrong">Làm lại ${run.wrong.length} từ sai</button></div>`:"<p>Không sai câu nào. Tuyệt vời!</p>"}
     <div class="row"><button class="ibtn" data-mode="${run.kind}">Làm lại</button><button class="ibtn" data-act="set">Về bộ từ</button></div></div>`)}
  const q=run.qs[run.i];
  const head=`${topbar(TITLES[run.kind],"set")}<div class="lnbar"><span class="pbar"><i style="width:${Math.round(100*run.i/run.qs.length)}%"></i></span><span class="small">Câu ${run.i+1}/${run.qs.length} · đúng ${run.right}</span></div>`;
  screen(renderQ(q,head));
  bindQ(q,good=>{mark(curSet,q.w,good);if(good)run.right++;else run.wrong.push(q.w);run.i++;seriesNext()});
}

/* ---------- 8. Ghép thẻ ---------- */
let mt=null;
function match(){
  const ws=shuffle(wordsOf(curSet)).slice(0,6);
  const tiles=shuffle([...ws.map((w,k)=>({k,txt:termHtml(w),de:1})),...ws.map((w,k)=>({k,txt:esc(w.m)}))]);
  mt={ws,tiles,sel:null,left:ws.length,t0:performance.now(),pen:0};
  screen(`${topbar("Ghép thẻ","set")}<div class="fcbar"><span class="small">Ghép từ với nghĩa của nó</span><b id="timer">0.0 giây</b></div>
   <div class="mgrid">${tiles.map((t,i)=>`<button class="mt ${t.de?"de":""}" data-t="${i}">${t.txt}</button>`).join("")}</div>
   <div class="small center">Kỷ lục bộ này: ${BEST[curSet.id]?BEST[curSet.id].toFixed(1)+" giây":"chưa có"} · Ghép sai bị cộng 1 giây</div>`);
  clearInterval(mt.iv);mt.iv=setInterval(()=>{const el=document.getElementById("timer");if(!el){clearInterval(mt.iv);return}el.textContent=((performance.now()-mt.t0)/1000+mt.pen).toFixed(1)+" giây"},100);
}
function tapTile(i,btn){
  const t=mt.tiles[i];if(btn.classList.contains("gone"))return;
  if(mt.sel==null){mt.sel=i;btn.classList.add("sel");if(t.de)speak(term(mt.ws[t.k]));return}
  const a=mt.tiles[mt.sel],abtn=document.querySelector(`[data-t="${mt.sel}"]`);
  if(mt.sel===i){btn.classList.remove("sel");mt.sel=null;return}
  if(a.k===t.k&&a.de!==t.de){btn.classList.add("gone");abtn.classList.add("gone");mt.left--;mark(curSet,mt.ws[t.k],true);
    if(!mt.left){clearInterval(mt.iv);const time=(performance.now()-mt.t0)/1000+mt.pen,rec=!BEST[curSet.id]||time<BEST[curSet.id];if(rec){BEST[curSet.id]=time;store.set("deMatchBest",BEST)}
      setTimeout(()=>screen(`${topbar("Ghép thẻ","set")}<div class="card center"><div class="big">${rec?"🏅":"⏱"}</div><div class="score">${time.toFixed(1)} giây</div><p>${rec?"Kỷ lục mới!":"Kỷ lục: "+BEST[curSet.id].toFixed(1)+" giây"}</p><div class="row"><button class="prim" data-mode="match">Chơi lại</button><button class="ibtn" data-act="set">Về bộ từ</button></div></div>`),300)}}
  else{mt.pen+=1;btn.classList.add("bad");abtn.classList.add("bad");setTimeout(()=>{btn.classList.remove("bad","sel");abtn.classList.remove("bad","sel")},450)}
  abtn.classList.remove("sel");mt.sel=null;
}

/* ---------- Tạo bộ riêng ---------- */
function createPage(){
  screen(`${topbar("Tạo bộ của bạn","home")}<div class="card">
   <label for="cTitle">Tên bộ</label><input id="cTitle" placeholder="vd: Từ mới bài 3">
   <label for="cText">Mỗi dòng một từ: <b>từ tiếng Đức = nghĩa</b> (có thể thêm câu ví dụ sau dấu |)</label>
   <textarea id="cText" rows="9" placeholder="der Hund = con chó&#10;die Katze = con mèo | Die [Katze] schläft.&#10;schwimmen = bơi"></textarea>
   <p class="small">Danh từ nên kèm der/die/das để luyện giống. Đặt từ cần điền trong [ngoặc vuông] ở câu ví dụ để có bài Điền từ.</p>
   <div class="row"><button class="prim" data-act="saveSet">Lưu bộ</button></div><div class="err" id="cErr"></div></div>`);
}
function saveCustom(){
  const title=document.getElementById("cTitle").value.trim()||"Bộ của tôi";const words=[];
  for(const line of document.getElementById("cText").value.split("\n")){
    const [main,ex]=line.split("|");const m=(main||"").split(/\s*[=\t]\s*|\s+-\s+/);if(m.length<2||!m[0].trim()||!m[1].trim())continue;
    const de=m[0].trim(),am=de.match(/^(der|die|das)\s+(.+)$/i);
    words.push({t:am?"n":"x",a:am?am[1].toLowerCase():"",w:am?am[2]:de,m:m[1].trim(),ex:ex&&/\[.+\]/.test(ex)?ex.trim():"",exv:""});
  }
  if(words.length<2){document.getElementById("cErr").textContent="Cần ít nhất 2 dòng đúng dạng “từ = nghĩa”.";return}
  CUSTOM.push({id:"c"+Date.now(),title,level:"Của bạn",custom:true,words});store.set("deCustomSets",CUSTOM);home();
}

/* ---------- Sự kiện ---------- */
root.addEventListener("click",e=>{
  const t=e.target.closest("button,[data-set]");if(!t)return;
  if(t.dataset.ch&&lastInput){const i=lastInput,s=i.selectionStart??i.value.length;i.value=i.value.slice(0,s)+t.dataset.ch+i.value.slice(i.selectionEnd??s);i.focus();i.setSelectionRange(s+1,s+1);return}
  if(t.dataset.say){speak(t.dataset.say);return}
  if(t.dataset.practice){window.appPractice&&window.appPractice(t.dataset.practice,t.dataset.ipa,t.dataset.mean);return}
  if(t.dataset.set!=null){starOnly=false;setPage(+t.dataset.set);return}
  if(t.dataset.star!=null){const w=curSet.words[+t.dataset.star],p=pr(keyOf(curSet,w));p.star=!p.star;save();t.classList.toggle("on",p.star);return}
  if(t.dataset.mode){const m=t.dataset.mode;({cards,learn:()=>learn(),match}[m]||(()=>series(m)))();return}
  if(t.dataset.t!=null){tapTile(+t.dataset.t,t);return}
  const a=t.dataset.act;
  if(a==="home")home();else if(a==="set")setPage();
  else if(a==="create")createPage();else if(a==="saveSet")saveCustom();
  else if(a==="delset"){CUSTOM=CUSTOM.filter(s=>s!==curSet);store.set("deCustomSets",CUSTOM);home()}
  else if(a==="review"){const items=[];allSets().forEach(s=>s.words.forEach(w=>{const p=P[keyOf(s,w)];if(p&&(p.bad>0||p.lv>0)&&p.lv<3)items.push(w)}));
    curSet={id:"review",title:"Ôn tập từ cần nhớ",words:items,review:true};
    // tiến độ vẫn ghi vào bộ gốc
    curSet.words.forEach(w=>{const s=allSets().find(s=>s.words.includes(w));w._k=s.id});learn(items)}
  else if(a==="cardYes"||a==="cardNo"){const w=fc.list[fc.i],p=pr(keyOf(curSet,w));if(a==="cardYes"){p.lv=Math.max(p.lv,3);fc.known.push(w)}else{p.lv=Math.min(p.lv,1);fc.learning.push(w)}save();fc.i++;fc.flip=false;drawCard()}
  else if(a==="cardsAgain"){fc={...fc,list:shuffle(fc.learning),i:0,flip:false,known:[],learning:[]};drawCard()}
  else if(a==="dir"){fc.dir=fc.dir==="de"?"vi":"de";fc.flip=false;drawCard()}
  else if(a==="replay")speak(term(curQ().w));else if(a==="replaySlow")speak(term(curQ().w),true);
  else if(a==="giveup"){const q=curQ();q.finish(false,`Đáp án: <b>${termHtml(q.w)}</b>`)}
  else if(a==="hint"){const q=curQ(),h=document.getElementById("hintTxt");
    if(q.type==="cloze")h.innerHTML="Bắt đầu bằng: "+q.blanks.map(b=>"<b>"+esc(b[0])+"…</b> ("+b.length+" chữ)").join(", ");
    else{const tw=term(q.w);h.innerHTML=`Gợi ý: <b>${esc(tw.slice(0,(q.w.a?q.w.a.length+1:0)+2))}…</b> (${q.w.w.length} chữ cái)`}}
  else if(a==="redoWrong"){const ws=run.wrong.slice();series(run.kind==="test"?"write":run.kind,ws)}
});
root.addEventListener("click",e=>{const f=e.target.closest("#flip");if(f&&!e.target.closest("button")){fc.flip=!fc.flip;f.classList.toggle("on",fc.flip);if(fc.flip&&fc.dir==="vi")speak(term(fc.list[fc.i]))}});
root.addEventListener("change",e=>{if(e.target.id==="starOnly"){starOnly=e.target.checked}});
const curQ=()=>activeQ;

window.vocabHome=home;
home();
})();
