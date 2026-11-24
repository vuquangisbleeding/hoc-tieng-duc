/* ============ 🎓 Lộ trình 0 → A2 · Tháng 1 ============
   20 buổi (16 buổi học + 3 ôn tuần + kiểm tra tháng) đọc từ course-data.js.
   Buổi học đi đủ 8 phần: Mở đầu → Kiểm tra bài cũ → Từ mới → Ngữ pháp → Luyện tập → Nghe–Đọc → Nói–Viết → Kiểm tra cuối buổi (≥ 80%).
   Dùng chung bộ chạy bài và các dạng bài của Gia sư (window.TutorAPI). Tiến độ: localStorage "deCourse" (đồng bộ qua sync.js). */
(function(){
const TXT=[window.COURSE_M1,window.COURSE_M2,window.COURSE_M3].filter(Boolean).join("\n");if(!TXT)return;
const V=()=>window.VocabAPI,T=()=>window.TutorAPI,DC=()=>window.DictCore;
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=a=>a[Math.floor(Math.random()*a.length)];
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let C=Object.assign({v:1,s:{},wrong:[]},store.get("deCourse",{}));
const saveC=()=>{store.set("deCourse",C)};
const today=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const daysSince=ts=>Math.floor((Date.now()-ts)/864e5);
const VI=/[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹàáèéìíòóùúýõã]/i;
const isDe=s=>!VI.test(s)&&/[A-Za-zÄÖÜäöüß]/.test(s)&&!/^\p{Extended_Pictographic}/u.test(s);

/* ---------- Đọc dữ liệu ---------- */
const MONTHS=[],WEEKS=[],SESS=[],BY={};
const COURSE_SET={id:"course-m1",title:"Lộ trình A2",words:[]};
const CUSTOM=new Map();
(function parse(){
  let s=null,M=null;
  const sp=v=>v.split(/\s*\|\s*/).map(x=>x.trim());
  for(const raw of TXT.split("\n")){const line=raw.trim();if(!line)continue;
    if(line.startsWith("#M ")){const [n,t,sum]=sp(line.slice(3));M={n:+n,t,sum,ws:[]};MONTHS.push(M);continue}
    if(line.startsWith("#W ")){const [n,t,out]=sp(line.slice(3));const w={n:+n,t,out,ss:[],m:M?M.n:1};WEEKS.push(w);M&&M.ws.push(w);continue}
    if(line.startsWith("## ")){const m=line.slice(3).match(/^(\S+)\s+(.*)$/);
      s={id:m[1],title:m[2],wk:+m[1].split(".")[0],kind:"lesson",nico:[],i:[],iq:[],words:[],g:[],gx:[],x:[],l:[],lq:[],r:[],rq:[],t:[],ans:[],w:[]};
      SESS.push(s);BY[s.id]=s;const W=WEEKS.find(w=>w.n===s.wk);W&&W.ss.push(s);s.m=W?W.m:1;continue}
    if(!s)continue;
    const k=line.slice(0,line.indexOf(":")),v=line.slice(line.indexOf(":")+1).trim();
    switch(k){
      case"goal":case"lt":case"rt":case"ld":case"kind":s[k]=v;break;
      case"parts":s.parts=v.split(",").map(x=>x.trim());break;
      case"nico":s.nico=v.split(",").map(Number).filter(Boolean);break;
      case"words":s.words=v.split(";").map(x=>x.trim()).filter(Boolean);break;
      case"+w":{const [t,a,w,pl,m,ex,exv]=sp(v),key=w,o={t,w:w.replace(/\s*\(.*\)$/,""),m};o.i=(window.COURSE_IPA||{})[o.w]||"";if(a&&a!=="-")o.a=a;if(pl)o.pl=pl;if(ex)o.ex=ex;if(exv)o.exv=exv;
        if(!CUSTOM.has(key)){COURSE_SET.words.push(o);CUSTOM.set(key,{s:COURSE_SET,w:o})}break}
      case"g":s.g.push({p:v});break;
      case"gt":case"gtn":{const last=s.g[s.g.length-1];if(last&&last.rows)last.rows.push(sp(v));else s.g.push({rows:[sp(v)],noh:k==="gtn"});break}
      case"i":case"l":case"r":case"t":s[k].push(sp(v));break;
      case"iq":case"lq":s[k].push(sp(v));break;
      case"rq":{const [q,a]=sp(v);s.rq.push([q,a==="R"?"Richtig":"Falsch",a==="R"?"Falsch":"Richtig"]);break}
      case"gx":case"x":s[k].push(v);break;
      case"ans":case"w":s[k].push(sp(v));break}}
})();
/* Từ: lấy từ bộ A1 có sẵn (đã có IPA, ví dụ, ghi chú phát âm) để dùng chung tiến độ ôn; thiếu thì dùng từ tự soạn */
let WIDX=null;
function widx(){if(WIDX)return WIDX;WIDX={ex:new Map(),fo:new Map()};
  const sets=(window.VOCAB_SETS||[]).slice().sort((a,b)=>(/^a1-/.test(b.id))-(/^a1-/.test(a.id)));
  for(const st of sets)for(const w of st.words){if(!WIDX.ex.has(w.w))WIDX.ex.set(w.w,{s:st,w});const f=V().fold(w.w);if(!WIDX.fo.has(f))WIDX.fo.set(f,{s:st,w})}
  return WIDX}
function word(ref){
  if(CUSTOM.has(ref))return CUSTOM.get(ref);
  const I=widx();let m=ref.match(/^(der|die|das)\s+(.+)$/),art=m&&m[1],w=m?m[2]:ref;
  const hit=I.ex.get(w)||I.fo.get(V().fold(w));
  if(hit&&(!art||!hit.w.a||hit.w.a===art))return hit;
  return null}
const sessWords=s=>{if(!s._w){s._w=s.words.map(r=>{const x=word(r);if(!x)console.warn("Lộ trình: thiếu từ",s.id,r);return x}).filter(Boolean)}return s._w};
const monthWords=()=>SESS.flatMap(sessWords);
const weekSess=wk=>SESS.filter(s=>s.wk===wk&&s.kind==="lesson");

/* ---------- Dạng bài từ một dòng dữ liệu ---------- */
const LETTER={A:"a",B:"be",C:"tse",D:"de",E:"e",F:"eff",G:"ge",H:"ha",I:"i",J:"jott",K:"ka",L:"ell",M:"emm",N:"enn",O:"o",P:"pe",Q:"ku",R:"err",S:"ess",T:"te",U:"u",V:"fau",W:"weh",X:"ix",Y:"üpsilon",Z:"zett"};
const numW=n=>{const w=DC().numDe(n);return n===1?"eins":w};
const digitW=d=>d==="2"?"zwo":numW(+d);
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const rangeOf=v=>{const [a,b]=v.split("-").map(Number);return[a,b??a]};
const optsOf=(c,ws,fixed)=>{const o=[c,...ws];return(fixed?o:shuffle(o)).map(x=>({h:esc(x),ok:x===c}))};
function exItem(line,src){
  const ci=line.indexOf(":"),type=line.slice(0,ci).trim(),P=line.slice(ci+1).split(/\s*\|\s*/).map(x=>x.trim());
  const it=mk(type,P);if(it)it.src=src;return it}
function mk(type,P){
  switch(type){
    case"mc":{const [q,c,...ws]=P;return{type:"mc",q:`<p class="qlabel">Chọn đáp án đúng</p><div class="tsent">${q}</div>`,opts:optsOf(c,ws),after:`Đáp án: <b>${esc(c)}</b>`,sayAfter:isDe(c)?c:undefined}}
    case"fill":{const [sent,ans,hint]=P;return{type:"fill",sent,ans:ans.split("…").map(x=>x.trim()),hint:hint||""}}
    case"fmc":{const [sent,c,...ws]=P,parts=c.split(" … "),full=sent.split("___").map((p,i)=>p+(parts[i]!=null&&i<parts.length?parts[i]:"")).join("");
      return{type:"mc",q:`<p class="qlabel">Chọn từ đúng điền vào chỗ trống</p><div class="tsent">${esc(sent).replace(/___/g,'<span class="tgap">___</span>')}</div>`,opts:optsOf(c,ws),
        layout:ws.length===2&&[c,...ws].every(x=>x.length<=10)?"g3":"",after:`Câu đúng: <b>${esc(full)}</b>`,sayAfter:full.replace(/\(.*?\)/g,"").trim()}}
    case"ord":return{type:"order",l:["",P[0],P[1]||""]};
    case"tr":{const alts=P[1].split(" / ").map(x=>x.trim());return{type:"type",q:`<p class="qlabel">Dịch sang tiếng Đức</p><div class="qbig vi tlong">${esc(P[0])}</div>`,ans:alts,ph:"Viết bằng tiếng Đức…",after:`Đáp án: <b>${esc(alts[0])}</b>`,sayAfter:alts[0]}}
    case"ty":{const alts=P[2].split(" / ").map(x=>x.trim());return{type:"type",q:`<p class="qlabel">${esc(P[0])}</p><div class="qbig tlong">${P[1]}</div>`,ans:alts,ph:"Viết bằng tiếng Đức…",after:`Đáp án: <b>${esc(alts[0])}</b>`,sayAfter:alts[0]}}
    case"lmc":{const [a,c,...ws]=P;return{type:"mc",q:`<p class="qlabel">Nghe rồi chọn đáp án đúng</p>`,audio:true,say:{text:a},opts:optsOf(c,ws),layout:[c,...ws].every(x=>x.length<=6)?(ws.length===1?"g2":"g3"):"",after:`Bạn vừa nghe: <b>${esc(a)}</b>`}}
    case"snd":{const [a,c,o]=P;return{type:"mc",q:`<p class="qlabel">Nghe và chọn âm bạn nghe thấy</p>`,audio:true,say:{text:a},layout:"g2",opts:optsOf(c,[o]),after:`Bạn vừa nghe: <b>${esc(a)}</b> → ${esc(c)}`}}
    case"art":{const [n,a]=P,x=word(n),m=x?x.w.m:"";return{type:"mc",q:`<p class="qlabel">Chọn đúng mạo từ</p><div class="qbig">${esc(n)}</div>${m?`<div class="small center">${esc(m)}</div>`:""}`,layout:"g3",fixed:true,
      opts:["der","die","das"].map(o=>({h:`<span class="g-${o}">${o}</span>`,ok:o===a})),w:x&&x.w.a===a?x:undefined,after:`<b>${a} ${esc(n)}</b>`,sayAfter:`${a} ${n}`}}
    case"dict":return{type:"dict",text:P[0]};
    case"nl":{const [a,b]=rangeOf(P[0]),n=rnd(a,b);return{type:"type",q:`<p class="qlabel">Nghe rồi viết số (bằng chữ số)</p>`,audio:true,say:{text:numW(n)},check:i=>String(i).replace(/\D/g,"")===String(n),after:`<b>${n}</b> = ${esc(numW(n))}`}}
    case"nw":{const [a,b]=rangeOf(P[0]),n=rnd(a,b),w=numW(n);return{type:"type",q:`<p class="qlabel">Viết số bằng chữ tiếng Đức</p><div class="qbig">${n}</div>`,
      check:i=>{const f=V().fold(i).replace(/ /g,""),m=DC().numMap().get(f);return!!m&&m.n===n&&m.kind!=="ord"},after:`${n} = <b>${esc(w)}</b>`,sayAfter:w}}
    case"nmc":{const [a,b]=rangeOf(P[0]),n=rnd(a,b),cand=new Set();
      if(n>=13&&n<=99&&n%10&&Math.floor(n/10)!==n%10){const sw=(n%10)*10+Math.floor(n/10);if(sw>=a&&sw<=b||b>=20)cand.add(sw)}
      for(const d of shuffle([1,-1,10,-10,2,-2,3,-3]))if(cand.size<4){const m=n+d;if(m>=Math.max(0,a-3)&&m!==n)cand.add(m)}
      const ws=[...cand].slice(0,2).map(String);return{type:"mc",q:`<p class="qlabel">Nghe rồi chọn số đúng</p>`,audio:true,say:{text:numW(n)},layout:"g3",opts:optsOf(String(n),ws),after:`Bạn vừa nghe: <b>${esc(numW(n))}</b> = ${n}`}}
    case"calc":{const m=P[0].match(/^(\d+)([+-])(\d+)$/),x=+m[1],y=+m[3],r=m[2]==="+"?x+y:x-y,txt=`${numW(x)} ${m[2]==="+"?"plus":"minus"} ${numW(y)}`;
      return{type:"type",q:`<p class="qlabel">Nghe phép tính rồi viết kết quả (bằng số)</p>`,audio:true,say:{text:txt},check:i=>String(i).replace(/\D/g,"")===String(r),after:`${esc(txt)} = <b>${r}</b> (${esc(numW(r))})`,sayAfter:`${txt} ist ${numW(r)}`}}
    case"sp":{const n=P[0],txt=n.toUpperCase().split("").map(c=>LETTER[c]||c).join(", ");
      return{type:"type",q:`<p class="qlabel">Nghe đánh vần rồi viết lại tên</p>`,audio:true,say:{text:txt},check:i=>V().fold(i).replace(/[\s–-]/g,"")===V().fold(n),after:`<b>${esc(n)}</b> = ${esc(n.toUpperCase().split("").join(" – "))}`}}
    case"ph":{const d=P[0].replace(/\D/g,""),txt=P[0].split(/\s+/).map(g=>g.split("").map(digitW).join(" ")).join(", ");
      return{type:"type",q:`<p class="qlabel">Nghe rồi viết số điện thoại (bằng số)</p>`,audio:true,say:{text:txt},check:i=>String(i).replace(/\D/g,"")===d,after:`<b>${esc(P[0])}</b><br><span class="small">${esc(txt)}</span>`}}
    case"lty":{const [a,ans,label]=P,alts=ans.split(" / ").map(x=>x.trim());return{type:"type",q:`<p class="qlabel">${esc(label||"Nghe rồi viết")}</p>`,audio:true,say:{text:a},ans:alts,ph:"Viết vào ô…",after:`Bạn vừa nghe: <b>${esc(a)}</b>`}}
    case"tmo":case"tmi":case"tmw":{const [H,Mi]=P[0].split(":").map(Number),td=T().timeDe(H,Mi),fmt=(h,m)=>`${h}:${String(m).padStart(2,"0")}`;
      if(type==="tmw")return{type:"type",q:`<p class="qlabel">Nói giờ kiểu thông thường (viết bằng chữ)</p><div class="qbig">🕒 ${fmt(H>12?H-12:H,Mi)}</div>`,ans:td.acc,ph:"vd: halb acht",after:`<b>${esc(td.inf)}</b>`,sayAfter:td.inf};
      const ws=new Set(),add=(h,m)=>{h=(h+24)%24;const f=fmt(h,m);if(f!==fmt(H,Mi))ws.add(f)};
      if(type==="tmi"){if(Mi===30){add(H+1,30);add(H,0)}else if(Mi===15||Mi===45){add(H,60-Mi);add(H+(Mi===45?1:-1),Mi)}else{add(H,(60-Mi)%60);add(H+1,Mi)}}else{add(H,(Mi+30)%60);add(H+(H<12?12:-12),Mi);add(H+2,Mi)}
      const text=type==="tmi"?td.inf:td.acc[2];return{type:"mc",q:`<p class="qlabel">Nghe rồi chọn giờ đúng</p>`,audio:true,say:{text},layout:"g3",opts:optsOf(fmt(H,Mi),[...ws].slice(0,2)),after:`Bạn vừa nghe: <b>${esc(text)}</b> = ${fmt(H,Mi)}`}}
    case"pr":{const [e,c]=P[0].split(",").map(Number),txt=(e===1?"ein":numW(e))+" Euro"+(c?" "+numW(c):"");
      return{type:"type",q:`<p class="qlabel">Nghe giá rồi viết bằng số (vd: 3,49)</p>`,audio:true,say:{text:txt},check:i=>String(i).replace(/[^\d]/g,"")===String(e)+(c?String(c).padStart(2,"0"):"")||(!c&&String(i).replace(/[^\d]/g,"")===e+"00"),after:`<b>${esc(P[0])} €</b> = ${esc(txt)}`,sayAfter:txt}}
    case"say":return window.ParaApp&&T().R.para?{type:"para",items:[{de:P[0],vi:P[1]||""}],label:"🗣 Đọc to"}:{type:"speak",text:P[0],label:"Đọc to",sub:esc(P[1]||"")}
  }
  console.warn("Lộ trình: dạng bài lạ",type);return null}
const lines=(s,k)=>s[k].map((l,i)=>({l,src:`${s.id}|${k}|${i}`}));
function fromSrc(src){const [id,k,i]=src.split("|"),s=BY[id];if(!s)return null;
  if(k==="gx"||k==="x")return exItem(s[k][+i],src);
  if(k==="lq"){const q=s.lq[+i];return q?{type:"listenq",x:{t:s.lt||"",d:s.l},q,first:true,title:s.lt,src}:null}
  if(k==="rq"){const q=s.rq[+i];return q?{type:"readq",x:{t:s.rt||"",d:s.r},q,src}:null}
  if(k==="w"){const x=word(i);return x?T().typeWord(x):null}
  return null}

/* ---------- Dựng từng phần ---------- */
const vocabMix=(ws,pool)=>ws.map((x,i)=>{const t=T();const it=[()=>t.mcWord(x,pool,"de"),()=>t.listenWord(x,pool),()=>t.typeWord(x),()=>t.mcWord(x,pool,"vi")][i%4]();it.src=`_|w|${x.w.w}`;return it});
function poolW(){const p=monthWords();return p.length>8?p:p.concat((window.VOCAB_SETS||[]).slice(0,3).flatMap(s=>s.words.map(w=>({s,w}))))}
const intro=(html,btn,note)=>({type:"intro",html,btn,note});
const tableHtml=(rows,noh)=>`<div class="ctab"><table>${rows.map((r,i)=>`<tr>${r.map(c=>i===0&&rows.length>2&&!noh?`<th>${c}</th>`:`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`;
const gramHtml=s=>s.g.map(b=>b.p?`<p>${b.p}</p>`:tableHtml(b.rows,b.noh)).join("");
const PARTS=[["c_in","🎬 Mở đầu",3],["c_kt","🔁 Kiểm tra bài cũ",5],["tu","🆕 Từ mới",8],["ngu","🧩 Ngữ pháp",8],["c_lt","🏋️ Luyện tập",15],["c_nd","👂 Nghe – Đọc",6],["c_nv","🗣 Nói – Viết",7],["c_ck","✅ Kiểm tra cuối buổi",3]];

function buildLesson(s,st){
  const ws=sessWords(s),pool=poolW(),t=T();
  if(st==="c_in"){const items=[intro(`<div class="tintro cin"><div class="small">Tuần ${s.wk} · Buổi ${s.id.split(".")[1]} · khoảng 55 phút</div><h2 class="tkh">${esc(s.title)}</h2>
      <p class="cgoal">🎯 <b>Hết buổi bạn nói được:</b> ${esc(s.goal)}</p>
      <ol class="cplan">${PARTS.map(p=>`<li>${p[1]} <span class="small">${p[2]}′</span></li>`).join("")}</ol>
      ${s.i.length?`<p class="small">Bắt đầu: nghe đoạn hội thoại ngắn rồi đoán ý — chưa cần hiểu hết.</p>`:""}</div>`,s.i.length?"Nghe hội thoại mở đầu →":"Bắt đầu →")];
    s.iq.forEach((q,i)=>items.push({type:"listenq",x:{t:"Hội thoại mở đầu",d:s.i},q,first:i===0,title:"Mở đầu"}));return items}
  if(st==="c_kt"){const r=dueReview(s,10);s._kt=r;if(!r.length)return[];
    return[intro(`<div class="tintro"><div class="big">🔁</div><p>Ôn <b>${r.length} câu</b>: từ đến hạn ôn (sau 1–3–7–14–30 ngày) và câu bạn làm sai ở các buổi trước.</p></div>`,"Bắt đầu ôn"),...r]}
  if(st==="tu"){if(!ws.length)return[];
    const items=[intro(`<div class="tintro"><div class="big">🆕</div><p>Buổi này có <b>${ws.length} từ và cụm từ mới</b>. Mỗi thẻ: nghe 🔊, đọc thử 🎤, xem ví dụ. Sau đó nghe và làm nhanh bài kiểm tra.</p><div class="tchips">${ws.map(x=>`<span class="chip">${V().termHtml(x.w)}</span>`).join("")}</div></div>`,"Xem thẻ từ")];
    ws.forEach((x,i)=>items.push({type:"card",w:x,idx:i+1,of:ws.length}));
    shuffle(ws).slice(0,3).forEach(x=>items.push(t.listenWord(x,pool)));
    shuffle(ws).slice(0,12).forEach((x,i)=>items.push(t.mcWord(x,pool,i%2?"vi":"de")));
    return items}
  if(st==="ngu"){const items=[];if(s.g.length)items.push(intro(`<div class="tnote">${gramHtml(s)}</div>`,s.gx.length?"Làm bài tập ngữ pháp":"Đã hiểu ✓",true));
    lines(s,"gx").forEach(o=>{const it=exItem(o.l,o.src);it&&items.push(it)});return items}
  if(st==="c_lt"){const items=lines(s,"x").map(o=>exItem(o.l,o.src)).filter(Boolean);
    shuffle(ws.filter(x=>x.w.t==="n"||x.w.t==="phr")).slice(0,2).forEach(x=>{const it=t.typeWord(x);it.src=`_|w|${x.w.w}`;items.push(it)});
    return items.length?[intro(`<div class="tintro"><div class="big">🏋️</div><p><b>${items.length} câu luyện tập</b>, dễ trước khó sau: nghe, trắc nghiệm, điền từ, sắp xếp câu, dịch.</p></div>`,"Bắt đầu"),...items]:[]}
  if(st==="c_nd"){const items=[];
    s.lq.forEach((q,i)=>items.push({type:"listenq",x:{t:s.lt||"",d:s.l},q,first:i===0,title:s.lt,src:`${s.id}|lq|${i}`}));
    if(s.ld)items.push({type:"dict",text:s.ld});
    if(s.r.length){items.push({type:"read",x:{t:s.rt||"",d:s.r}});s.rq.forEach((q,i)=>items.push({type:"readq",x:{t:s.rt||"",d:s.r},q,src:`${s.id}|rq|${i}`}))}
    return items}
  if(st==="c_nv")return speakWrite(s,true);
  if(st==="c_ck"){const ex=shuffle([...lines(s,"gx"),...lines(s,"x")].filter(o=>!/^say:/.test(o.l))).slice(0,6).map(o=>exItem(o.l,o.src));
    const vw=shuffle(ws).slice(0,4);
    const items=shuffle([...vocabMix(vw,pool),...ex.filter(Boolean)]);
    return[intro(`<div class="tintro"><div class="big">✅</div><p><b>Kiểm tra cuối buổi: ${items.length} câu.</b> Cần đạt <b>≥ 80%</b> để qua buổi. Câu sai sẽ vào Sổ lỗi sai và quay lại ở phần Kiểm tra bài cũ.</p></div>`,"Làm bài kiểm tra"),...items]}
  return[]}
function speakWrite(s,shadow){
  const items=[],L=s.t.filter(l=>l[1]);
  if(L.length&&window.ParaApp&&T().R.para){   // đầu ra: đọc từng câu (chấm từng âm, tô màu từng từ) → cả đoạn → che chữ; mọi câu đạt mức trong ⚙ mới qua
    items.push({type:"para",items:L.map(l=>({de:l[1],vi:l[2]||"",sp:l[0]})),saveTitle:`Buổi ${s.id}: ${s.title}`,
      label:s.kind==="lesson"?"🎯 Đầu ra của buổi: đọc từng câu, rồi cả đoạn, rồi che chữ nói thuộc":"🎯 Đầu ra của tuần: đọc từng câu, rồi cả đoạn, cố gắng che chữ",
      onResult:st=>{const cs=C.s[s.id]=C.s[s.id]||{},o=cs.say||{};cs.say={pass:Math.max(o.pass||0,st.pass),n:st.n,all:!!(o.all||st.allPass)};
        if(st.whole!=null)cs.flu=Math.max(cs.flu||0,st.whole);cs.t=Date.now();saveC()}});
    s.ans.forEach(a=>items.push({type:"answer",s:a}));
    s.w.forEach(w=>{const wi={type:"write",wq:w};items.push(wi);items.push({type:"para",from:wi,text:w[1],label:"🎤 Đọc to đoạn bạn vừa viết",saveTitle:`Buổi ${s.id}: ${s.title} (bài viết)`})});
    return items}
  if(shadow&&L.length){items.push(intro(`<div class="tintro"><div class="big">🗣</div><p><b>Nói nhại theo (shadowing):</b> nghe từng câu rồi nói lại ngay, bắt chước ngữ điệu. Sau đó nói liền cả đoạn — đây là đầu ra của buổi.</p></div>`,"Bắt đầu"));
    L.slice(0,6).forEach((l,i)=>items.push({type:"speak",text:l[1],label:`Nói theo câu ${i+1}/${Math.min(6,L.length)} · <b>${esc(l[0])}</b>`,sub:esc(l[2]||"")}))}
  s.ans.forEach(a=>items.push({type:"answer",s:a}));
  const rec=(r,j,mode)=>{if(!j.ok)return;const cs=C.s[s.id]=C.s[s.id]||{};cs.flu=Math.max(cs.flu||0,r.pct);if(mode==="vi")cs.star=1;saveC()};
  if(L.length>=6){const h=Math.ceil(L.length/2);
    items.push({type:"passage",lines:L.slice(0,h),label:"🧱 Nối câu (1/2): nói liền nửa đầu"});
    items.push({type:"passage",lines:L.slice(h),label:"🧱 Nối câu (2/2): nói liền nửa sau"})}
  if(L.length)items.push({type:"passage",lines:L,label:s.kind==="lesson"?"🎯 Đầu ra của buổi: nói trôi chảy cả đoạn":"🎯 Đầu ra của tuần: nói cả đoạn, cố gắng không nhìn chữ (🇻🇳)",final:true,onResult:rec});
  s.w.forEach(w=>{const wi={type:"write",wq:w};items.push(wi);if(window.ParaApp&&T().R.para)items.push({type:"para",from:wi,text:w[1],label:"🎤 Đọc to đoạn bạn vừa viết",saveTitle:`Buổi ${s.id}: ${s.title} (bài viết)`})});
  return items}
/* Kiểm tra bài cũ: câu sai còn trong Sổ lỗi sai + từ đến hạn theo lịch 1-3-7-14-30 ngày */
function dueReview(cur,max){
  const out=[],P=V().getP(),t=T(),pool=poolW();
  const wr=(C.wrong||[]).filter(x=>!x.startsWith(cur.id+"|")).slice(-12);
  shuffle(wr).slice(0,4).forEach(src=>{const it=fromSrc(src);if(it){it.src=src;it.fromBook=1;out.push(it)}});
  const prev=SESS.filter(s=>s!==cur&&C.s[s.id]&&C.s[s.id].done);
  const seen=new Set(),cand=[];
  prev.forEach(s=>{const age=daysSince(C.s[s.id].done);sessWords(s).forEach(x=>{const k=V().keyOf(x.s,x.w);if(seen.has(k))return;seen.add(k);
    const p=P[k]||{lv:0};const due=[1,3,7,14,30].some(d=>Math.abs(age-d)<=(d>7?1:0));cand.push({x,sc:(due?10:0)+(p.lv<3?5-p.lv:0)+Math.random()})})});
  cand.sort((a,b)=>b.sc-a.sc);
  out.push(...vocabMix(cand.slice(0,max-out.length).map(c=>c.x),pool));
  return out}
/* Ôn tuần: 20 câu từ cả tuần */
function buildReview(s,st){
  const ss=weekSess(s.wk),t=T(),pool=poolW();
  if(st==="c_in")return[intro(`<div class="tintro cin"><div class="small">Tuần ${s.wk} · Buổi ôn tập (thứ Sáu) · khoảng 60 phút</div><h2 class="tkh">${esc(s.title)}</h2>
    <p class="cgoal">🎯 <b>Đầu ra tuần:</b> ${esc(s.goal)}</p><ol class="cplan"><li>📝 Kiểm tra 20 câu (cần ≥ 75%)</li><li>🗣 Nói đoạn đầu ra của tuần</li><li>✍️ Viết đoạn ngắn</li></ol>
    <p class="small">Ôn lại các buổi: ${ss.map(x=>esc(x.title)).join(" · ")}</p></div>`,"Bắt đầu kiểm tra →")];
  if(st==="c_rt"){const own=lines(s,"x").map(o=>exItem(o.l,o.src)).filter(Boolean);
    const ex=shuffle(ss.flatMap(x=>[...lines(x,"gx"),...lines(x,"x")]).filter(o=>!/^say:/.test(o.l))).slice(0,Math.max(0,12-own.length)).map(o=>exItem(o.l,o.src)).filter(Boolean);
    const lq=shuffle(ss.flatMap(x=>x.lq.map((q,i)=>({type:"listenq",x:{t:x.lt||"",d:x.l},q,first:true,title:x.lt,src:`${x.id}|lq|${i}`})))).slice(0,2);
    const vw=shuffle(ss.flatMap(sessWords)).slice(0,20-own.length-ex.length-lq.length);
    return shuffle([...own,...ex,...lq,...vocabMix(vw,pool)])}
  if(st==="c_nv")return speakWrite(s,false);
  return[]}
/* Kiểm tra tháng: 40 câu (nghe 10 · đọc 10 · từ & ngữ pháp 15 · viết 5) + nói + viết đoạn */
function buildTest(s,st){
  const ex=s.kind==="exam",ss=SESS.filter(x=>x.kind==="lesson"&&(ex?x.m<=s.m:x.m===s.m)),t=T(),pool=poolW(),N=ex?{nghe:15,doc:15,c_tn:20,viet:6}:{nghe:10,doc:10,c_tn:15,viet:5};
  if(st==="c_in"&&ex)return[intro(`<div class="tintro cin"><div class="small">Tuần ${s.wk} · Thi thử A1 · mô phỏng Start Deutsch 1</div><h2 class="tkh">${esc(s.title)}</h2>
    <p class="cgoal">🎯 ${esc(s.goal)}</p><ol class="cplan">${stepsOf(s).filter(x=>x!=="c_in").map(x=>`<li>${T().STEP[x].i} ${T().STEP[x].t}${N[x]?`: ${N[x]} câu`:""}</li>`).join("")}</ol>
    <p class="small">Đề lấy từ toàn bộ tháng 1–${s.m}. Cần ≥ 60% mỗi phần (như thi thật).</p></div>`,"Bắt đầu →")];
  if(st==="c_in")return[intro(`<div class="tintro cin"><div class="small">Tuần ${s.wk} · thứ Sáu · khoảng 60 phút</div><h2 class="tkh">${esc(s.title)}</h2>
    <p class="cgoal">🎯 ${esc(s.goal)}</p><ol class="cplan"><li>👂 Nghe: 10 câu</li><li>📖 Đọc: 10 câu</li><li>🧩 Từ & ngữ pháp: 15 câu</li><li>✍️ Viết: 5 câu</li><li>🗣 Nói 1 phút + viết đoạn 50 từ</li></ol>
    <p class="small">Qua tháng 1 khi 40 câu đạt ≥ 75%, phần nói đạt chuẩn và đoạn viết có đủ tên, tuổi, nơi ở, ít nhất 3 người trong gia đình.</p></div>`,"Bắt đầu →")];
  if(st==="nghe"){const lq=shuffle(ss.flatMap(x=>x.lq.map((q,i)=>({type:"listenq",x:{t:x.lt||"",d:x.l},q,first:true,title:x.lt,src:`${x.id}|lq|${i}`})))).slice(0,6);
    const lx=shuffle(ss.flatMap(x=>lines(x,"x").concat(lines(x,"gx"))).filter(o=>/^(lmc|nmc|nl|ph|calc|tmo|tmi|pr):/.test(o.l))).slice(0,N.nghe-8).map(o=>exItem(o.l,o.src));
    const dc=shuffle(ss.filter(x=>x.ld)).slice(0,2).map(x=>({type:"dict",text:x.ld}));
    return[...lq,...shuffle([...lx,...dc])]}
  if(st==="doc")return shuffle(ss.flatMap(x=>x.rq.map((q,i)=>({type:"readq",x:{t:x.rt||"",d:x.r},q,src:`${x.id}|rq|${i}`})))).slice(0,N.doc);
  if(st==="c_tn"){const ex=shuffle(ss.flatMap(x=>lines(x,"gx")).filter(o=>/^(fmc|fill|art|mc):/.test(o.l))).slice(0,N.c_tn-7).map(o=>exItem(o.l,o.src));
    return shuffle([...ex,...shuffle(ss.flatMap(sessWords)).slice(0,7).map((x,i)=>{const it=t.mcWord(x,pool,i%2?"vi":"de");it.src=`_|w|${x.w.w}`;return it})])}
  if(st==="viet"){const ex=shuffle(ss.flatMap(x=>lines(x,"x")).filter(o=>/^(tr|ty):/.test(o.l))).slice(0,N.viet-2).map(o=>exItem(o.l,o.src));
    const tw=shuffle(ss.flatMap(sessWords).filter(x=>x.w.t==="n")).slice(0,N.viet-ex.length).map(x=>{const it=t.typeWord(x);it.src=`_|w|${x.w.w}`;return it});return[...ex,...tw]}
  if(st==="c_nv")return speakWrite(s,false);
  return[]}
const stepsOf=s=>s.kind==="review"?["c_in","c_rt","c_nv"]:s.kind==="test"?["c_in","nghe","doc","c_tn","viet","c_nv"]:s.kind==="exam"?["c_in",...(s.parts||["nghe","doc"])]:PARTS.map(p=>p[0]);
const gateOf=s=>s.kind==="lesson"?{st:["c_ck"],min:80}:s.kind==="review"?{st:["c_rt"],min:75}:s.kind==="exam"?{st:(s.parts||[]).filter(x=>x!=="c_nv"),min:60}:{st:["nghe","doc","c_tn","viet"],min:75};

/* ---------- Chạy một buổi ---------- */
let root=null;
function startSess(s,steps,extra={}){
  const meta={title:extra.title||`${s.kind==="lesson"?"Buổi "+s.id:s.title}`,steps:steps||stepsOf(s),sess:s,
    build:st=>extra.items&&st===extra.only?extra.items:(s.kind==="review"?buildReview:s.kind==="test"||s.kind==="exam"?buildTest:buildLesson)(s,st),
    onStep:(st,p)=>{const cs=C.s[s.id]=C.s[s.id]||{};cs.p=cs.p||{};cs.p[st]=Math.max(cs.p[st]??-1,p??100);cs.t=Date.now();C.last=s.id;saveC()},
    onFinish:run=>finishSess(s,run,extra),onExit:()=>sessPage(s.id)};
  T().start(meta)}
function finishSess(s,run,extra){
  const cs=C.s[s.id]=C.s[s.id]||{},gate=gateOf(s);
  // Sổ lỗi sai: thêm câu sai, gỡ câu đã làm đúng lại
  const book=new Set(C.wrong||[]);
  run.wrong.forEach(it=>{if(typeof it.src==="string"&&!it.src.startsWith("_|"))book.add(it.src)});
  (s._kt||[]).forEach(it=>{if(it.fromBook&&it.answered&&!run.wrong.includes(it))book.delete(it.src)});s._kt=null;
  C.wrong=[...book].slice(-60);
  let r=0,n=0;gate.st.forEach(st=>{const x=run.res[st];if(x){r+=x.r;n+=x.n}});
  const p=n?Math.round(100*r/n):null,gated=gate.st.some(st=>run.res[st]);
  if(gated&&p!=null)cs.best=Math.max(cs.best??-1,p);
  const testOk=!gate.st.length||(cs.best??-1)>=gate.min,sayOk=sayDone(s);
  const newly=testOk&&sayOk&&!cs.done;if(newly)cs.done=Date.now();
  saveC();
  const nx=SESS[SESS.indexOf(s)+1],pass=!!cs.done;
  const rows=run.steps.map(st=>{const x=run.res[st];const q=x&&x.n?Math.round(100*x.r/x.n):null;const S=T().STEP[st]||{i:"",t:st};
    return `<div class="tsum"><span>${S.i} ${S.t}</span><span class="tmeter"><i style="width:${q??100}%;background:${q==null?"var(--line)":q>=80?"var(--green)":q>=60?"var(--orange)":"var(--red)"}"></i></span><b>${q==null?"–":q+"%"}</b></div>`}).join("");
  const wrongN=run.wrong.filter(it=>it.src).length;
  root.innerHTML=`<div class="vtop"><button class="ibtn" data-c="sess" data-id="${s.id}" aria-label="Quay lại">‹</button><div class="vtitle">Tổng kết ${esc(s.kind==="lesson"?"buổi "+s.id:s.title)}</div><span></span></div>
    <div class="card center"><div class="big">${!gated?"✅":pass?"🎉":"💪"}</div><div class="score">${gated&&p!=null?p+"%":"Xong"}</div><p><b>${esc(s.title)}</b></p>
      ${pass?`<p class="cpass">✅ Đã qua buổi.${s.kind==="test"?" Chúc mừng bạn đã hoàn thành tháng ${s.m}! 🇩🇪":""}</p>`:`<p class="cfail">Chưa qua buổi — cần đủ cả hai điều kiện dưới đây.</p>`}
      ${condHtml(s)}
      ${cs.flu?`<p class="small">🎯 Nói cả đoạn: tốt nhất ${cs.flu}%${cs.star?" · ⭐ thuộc lòng":""}</p>`:""}</div>
    <div class="card">${rows}</div>
    ${wrongN?`<div class="card"><p>📒 <b>${wrongN} câu sai</b> đã vào Sổ lỗi sai — sẽ quay lại ở phần Kiểm tra bài cũ của buổi sau.</p><div class="row"><button class="ibtn" data-c="redo">🔁 Làm lại ngay ${wrongN} câu sai</button></div></div>`:""}
    ${nicoHtml(s,"🎬 Nghe thêm 20 phút hôm nay")}
    <div class="row">${pass&&nx?`<button class="prim" data-c="sess" data-id="${nx.id}">Tiếp: ${esc(nx.kind==="lesson"?"Buổi "+nx.id:nx.title)} →</button>`:""}
      ${!testOk?`<button class="prim" data-c="retest" data-id="${s.id}">Làm lại bài kiểm tra</button>`:""}${testOk&&!sayOk?`<button class="prim" data-c="resay" data-id="${s.id}">🗣 Luyện tiếp phần nói</button>`:""}<button class="ibtn" data-c="home">Lộ trình</button></div>`;
  if(newly&&window.SFX)setTimeout(()=>SFX.win(),300);
  finishSess.last={s,wrong:run.wrong.filter(it=>it.src).map(it=>it.src)}}
function nicoHtml(s,title){const eps=window.NICO?s.nico.filter(n=>NICO.e.some(e=>e.n===n)):s.nico;if(!eps.length||!window.NicoApp)return"";
  return `<div class="card"><div class="sgh" style="margin-top:0"><b>${title}</b><span class="small">Học với Nico</span></div><div class="row cnico">${eps.map(n=>`<button class="ibtn" data-t="nico" data-n="${n}">🎬 Nico tập ${n}</button>`).join("")}</div>
    <p class="small">Lần 1 xem không phụ đề · lần 2 bật phụ đề tiếng Đức · lần 3 nói nhại theo từng câu.</p></div>`}

const sayDone=s=>!s.t.length||!!(C.s[s.id]&&C.s[s.id].say&&C.s[s.id].say.all);
function condHtml(s){const c=C.s[s.id]||{},g=gateOf(s),sy=c.say,tOk=!g.st.length||(c.best??-1)>=g.min,sOk=sayDone(s);
  return `<div class="ccond">${g.st.length?`<div class="${tOk?"ok":""}">${tOk?"✅":"⬜"} ${s.kind==="lesson"?"Kiểm tra cuối buổi":s.kind==="review"?"Kiểm tra tuần":s.kind==="exam"?"Các phần thi":"Bài kiểm tra 40 câu"} ≥ ${g.min}%${c.best!=null&&c.best>=0?` · tốt nhất ${c.best}%`:" · chưa làm"}</div>`:""}
    ${s.t.length?`<div class="${sOk?"ok":""}">${sOk?"✅":"⬜"} Nói đoạn đầu ra: mọi câu ≥ ${window.ParaApp?ParaApp.pass():75}%${sy?` · đã đạt ${sy.pass}/${sy.n} câu`:" · chưa làm"}</div>`:""}</div>`}
/* ---------- Trang lộ trình & trang buổi ---------- */
const stOf=s=>{const c=C.s[s.id];return c&&c.done?"done":c&&c.t?"part":""};
const curSess=()=>SESS.find(s=>!(C.s[s.id]&&C.s[s.id].done))||SESS[SESS.length-1];
const label=s=>s.kind==="lesson"?`B${s.id.split(".")[1]} · ${s.title}`:s.title;
function home(){
  const done=SESS.filter(s=>stOf(s)==="done").length,cur=curSess(),book=(C.wrong||[]).length;
  const kitsOn=window.appCfg&&appCfg().kits==="on";
  root.innerHTML=`<div class="vtop">${kitsOn?`<button class="ibtn" data-t="home" aria-label="Quay lại">‹</button>`:"<span></span>"}<div class="vtitle">🎓 Lộ trình 0 → A2</div><span></span></div>
    <div class="vhero thero"><div><div class="big">${done}<small>/${SESS.length}</small></div><div class="small">buổi đã qua</div></div>
      <div class="vhero-r"><span class="small">Tháng ${cur.m} · Tuần ${cur.wk}</span><b>${esc(label(cur))}</b><button class="prim" data-c="sess" data-id="${cur.id}">${C.s[cur.id]?"Học tiếp":"Bắt đầu"} →</button></div></div>
    ${window.NicoApp?`<div class="card tnico"><div class="sgh" style="margin-top:0"><b>🎬 Học với Nico</b><span class="small">${window.NICO?NICO.e.length+" tập · ":""}Nicos Weg A1</span></div><p class="small">Xem phim theo tập: mẫu câu, từ vựng, luyện nói có chấm điểm.</p><div class="row"><button class="ibtn" data-t="nico">Mở danh sách tập →</button></div></div>`:""}
    <div class="card"><div class="sgh" style="margin-top:0"><b>📅 Mỗi ngày khoảng 1,5 tiếng</b><span class="small">${book?`📒 Sổ lỗi sai: ${book} câu`:""}</span></div>
      <div class="cday"><div><b>Thứ Hai – Năm</b><span>55′ buổi học mới · 15′ ôn từ & câu sai · 20′ nghe Nico</span></div><div><b>Thứ Sáu</b><span>60′ buổi ôn tuần / kiểm tra</span></div><div><b>Thứ Bảy</b><span>30′ làm lại Sổ lỗi sai, nói lại đoạn đầu ra</span></div><div><b>Chủ nhật</b><span>15′ ôn nhẹ hoặc nghỉ</span></div></div>
      <p class="small">Qua buổi khi kiểm tra cuối buổi ≥ 80%; qua tuần khi kiểm tra tuần ≥ 75% và nói được đoạn đầu ra.</p>
      ${book?`<div class="row"><button class="ibtn" data-c="book">📒 Làm Sổ lỗi sai (${Math.min(book,15)} câu)</button></div>`:""}</div>
    ${MONTHS.map(M=>{const ms=M.ws.flatMap(w=>w.ss),nd=ms.filter(s=>stOf(s)==="done").length,nw=new Set(ms.flatMap(sessWords).map(x=>x.w.w)).size;
      return `<details class="cmonth"${M.n===cur.m?" open":""}><summary><b>Tháng ${M.n} · ${esc(M.t)}</b><span class="small">${nd}/${ms.length} buổi · ${nw} từ</span></summary><p class="small">${esc(M.sum)}</p>
      ${M.ws.map(w=>{const nd=w.ss.filter(s=>stOf(s)==="done").length;return `<div class="card cweek"><div class="sgh" style="margin-top:0"><b>Tuần ${w.n} · ${esc(w.t)}</b><span class="small">${nd}/${w.ss.length}</span></div>
      <p class="small">Hết tuần: ${esc(w.out)}</p><div class="tkits">${w.ss.map(s=>{const c=C.s[s.id]||{},st=stOf(s);
        return `<button class="tkit${st==="done"?" done":st==="part"?" part":""}${s===cur?" cur":""}${s.kind!=="lesson"?" rv":""}" data-c="sess" data-id="${s.id}"><span class="tkn">${s.kind==="lesson"?s.id:s.kind==="test"||s.kind==="exam"?"📝":"🔁"}</span><span class="tkt">${esc(s.title)}</span><span class="small">${st==="done"?"✓ "+(c.best!=null?c.best+"%":""):st==="part"?"đang học":s.kind==="lesson"?sessWords(s).length+" từ":"ôn & kiểm tra"}</span></button>`}).join("")}</div></div>`}).join("")}</details>`}).join("")}
    <div class="card"><p class="small">Tháng ${MONTHS.length+1}–6 (đến A2) sẽ được thêm sau, theo lộ trình 26 tuần.</p></div>`;
  window.scrollTo({top:0})}
function sessPage(id){
  const s=BY[id];if(!s)return home();const c=C.s[s.id]||{},ws=sessWords(s),steps=stepsOf(s),i=SESS.indexOf(s);
  const prevOk=i===0||stOf(SESS[i-1])==="done";
  root.innerHTML=`<div class="vtop"><button class="ibtn" data-c="home" aria-label="Quay lại">‹</button><div class="vtitle">Tuần ${s.wk} · ${s.kind==="lesson"?"Buổi "+s.id:s.kind==="test"?"Kiểm tra tháng":s.kind==="exam"?"Thi thử A1":"Ôn tuần"}</div><span></span></div>
    <div class="card"><h2 class="tkh">${esc(s.title)}</h2><p class="cgoal">🎯 <b>${s.kind==="lesson"?"Hết buổi bạn nói được":"Đầu ra"}:</b> ${esc(s.goal)}</p>
      ${ws.length?`<div class="tchips">${ws.map(x=>`<button class="chip" data-lk2="${esc(x.w.w)}">${V().termHtml(x.w)}</button>`).join("")}</div>`:""}
      ${!prevOk?`<p class="small">ℹ️ Buổi trước chưa qua — nên học theo thứ tự, nhưng bạn vẫn có thể học trước.</p>`:""}
      ${c.done?`<p class="cpass">✅ Đã qua buổi</p>`:""}${condHtml(s)}
      <div class="row"><button class="prim big2" data-c="start" data-id="${s.id}">${c.done?"Học lại cả buổi":c.t?"Học lại từ đầu":"Bắt đầu"} →</button></div></div>
    <div class="card"><div class="sgh" style="margin-top:0"><b>Các phần</b><span class="small">bấm để làm riêng từng phần</span></div>
      ${steps.map(st=>{const S=T().STEP[st],b=(c.p||{})[st];return `<button class="tstrow" data-c="only" data-id="${s.id}" data-s="${st}"><span>${S.i} ${S.t}</span><span class="small">${b!=null&&b>=0?"tốt nhất "+b+"%":"chưa làm"}</span></button>`}).join("")}</div>
    ${s.t.length&&window.ParaApp?`<div class="card"><div class="sgh" style="margin-top:0"><b>📝 Luyện riêng đoạn đầu ra</b><span class="small">${s.t.length} câu</span></div><p class="small">Mở đoạn nói của buổi trong Luyện đoạn văn: đọc từng câu, máy tô màu từng từ; đọc cả đoạn hoặc che chữ để nói thuộc.</p><div class="row"><button class="ibtn" data-c="para" data-id="${s.id}">📝 Mở trong Luyện đoạn</button></div></div>`:""}
    ${nicoHtml(s,"🎬 Nghe thêm sau buổi học")}
    <div class="row"><button class="ibtn" data-c="sess" data-id="${(SESS[i-1]||s).id}" ${i===0?"disabled":""}>‹ Buổi trước</button><button class="ibtn" data-c="sess" data-id="${(SESS[i+1]||s).id}" ${i===SESS.length-1?"disabled":""}>Buổi sau ›</button></div>`;
  window.scrollTo({top:0})}
function bookRun(){const src=shuffle(C.wrong||[]).slice(0,15),items=src.map(x=>{const it=fromSrc(x);if(it)it.src=x;return it}).filter(Boolean);
  if(!items.length)return home();
  T().start({title:"📒 Sổ lỗi sai",steps:["c_kt"],build:()=>items,onStep:()=>{},onExit:home,
    onFinish:run=>{const bad=new Set(run.wrong.map(it=>it.src));C.wrong=(C.wrong||[]).filter(x=>!src.includes(x)||bad.has(x));saveC();
      const r=run.res.c_kt||{r:0,n:0};root.innerHTML=`<div class="card center"><div class="big">📒</div><p>Sổ lỗi sai: đúng <b>${r.r}/${r.n}</b>. Đã gỡ ${r.r} câu làm đúng khỏi sổ.</p><p class="small">Còn ${C.wrong.length} câu trong sổ.</p><div class="row"><button class="prim" data-c="home">Lộ trình</button></div></div>`}})}
function redoWrong(){const L=finishSess.last;if(!L||!L.wrong.length)return home();const s=L.s;
  const items=L.wrong.map(x=>{const it=fromSrc(x);if(it)it.src=x;return it}).filter(Boolean);
  T().start({title:"🔁 Làm lại câu sai",steps:["c_kt"],build:()=>items,onStep:()=>{},onExit:()=>sessPage(s.id),
    onFinish:run=>{const bad=new Set(run.wrong.map(it=>it.src));C.wrong=(C.wrong||[]).filter(x=>!L.wrong.includes(x)||bad.has(x));saveC();
      const r=run.res.c_kt||{r:0,n:0};root.innerHTML=`<div class="card center"><div class="big">🔁</div><p>Làm lại: đúng <b>${r.r}/${r.n}</b>.</p><div class="row"><button class="prim" data-c="retest" data-id="${s.id}">Làm lại bài kiểm tra</button><button class="ibtn" data-c="sess" data-id="${s.id}">Về trang buổi</button></div></div>`}})}

function onClick(e){const b=e.target.closest("[data-c]");if(!b||!root||!root.contains(b))return;
  const a=b.dataset.c,s=BY[b.dataset.id];
  if(a==="home")return home();
  if(a==="sess")return sessPage(b.dataset.id);
  if(a==="start"&&s)return startSess(s);
  if(a==="only"&&s)return startSess(s,[b.dataset.s]);
  if(a==="retest"&&s){const g=gateOf(s);return startSess(s,g.st)}
  if(a==="resay"&&s)return startSess(s,["c_nv"]);
  if(a==="redo")return redoWrong();
  if(a==="book")return bookRun();
  if(a==="para"&&s&&window.ParaApp)return ParaApp.openText(s.t.map(l=>l[1]).join("\n"),`Buổi ${s.id}: ${s.title}`)}

window.CourseApp={
  open(r,id){if(root!==r){root=r;r.addEventListener("click",onClick)}id&&BY[id]?sessPage(id):home()},
  card(){const done=SESS.filter(s=>stOf(s)==="done").length,cur=curSess();
    return `<div class="card tcourse"><div class="sgh" style="margin-top:0"><b>🎓 Lộ trình 0 → A2 · Tháng ${cur.m}</b><span class="small">${done}/${SESS.length} buổi</span></div>
      <p class="small">Mỗi buổi 55 phút đủ 8 phần: mở đầu, ôn bài cũ, từ mới, ngữ pháp, luyện tập, nghe–đọc, nói–viết, kiểm tra cuối buổi.</p>
      <span class="pbar"><i style="width:${Math.round(100*done/SESS.length)}%"></i></span>
      <div class="row"><button class="prim" data-t="course" data-id="${cur.id}">${done?"Học tiếp":"Bắt đầu"}: ${esc(cur.kind==="lesson"?"Buổi "+cur.id:cur.title)} →</button><button class="ibtn" data-t="course">Xem lộ trình</button></div></div>`},
  MONTHS,WEEKS,SESS,BY,word,sessWords,exItem,stepsOf,build:(id,st)=>{const s=BY[id];return(s.kind==="review"?buildReview:s.kind==="test"||s.kind==="exam"?buildTest:buildLesson)(s,st)},
  reload(){C=Object.assign({v:1,s:{},wrong:[]},store.get("deCourse",{}))},get:()=>C};
})();
