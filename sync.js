/* ============ Đồng bộ đám mây (Supabase) ============
   Lưu toàn bộ tiến độ (các khoá localStorage bên dưới) vào bảng public.progress, mỗi người một dòng. */
(function(){
const CFG=window.__SYNC_OVERRIDE||{
  url:"",   // Project URL, vd https://xxxx.supabase.co
  key:""    // publishable / anon key (công khai được; dữ liệu được bảo vệ bằng Row Level Security)
};
const KEYS=["deVocabProg","deMatchBest","deCustomSets","deProg","deCfg"];
const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- Giao diện: biểu tượng trên đầu + mục trong Cài đặt ---------- */
const btn=document.createElement("button");btn.className="ibtn";btn.id="cloudBtn";btn.setAttribute("aria-label","Đồng bộ đám mây");btn.textContent="☁︎";
$("btnSet").before(btn);
const sec=document.createElement("div");sec.id="syncSec";sec.className="syncsec";
$("setPanel").prepend(sec);
btn.onclick=()=>{$("setPanel").classList.remove("hidden");$("listPanel").classList.add("hidden");sec.scrollIntoView({behavior:"smooth",block:"start"})};
let state="off",msg="",user=null,lastSync=null;
function setState(s,m){state=s;msg=m||"";render()}
function render(){
  btn.dataset.s=state;btn.title=msg;
  btn.textContent={ok:"☁︎✓",busy:"☁︎…",err:"☁︎!",off:"☁︎"}[state]||"☁︎";
  if(!CFG.url||!CFG.key){sec.innerHTML=`<b>☁︎ Đồng bộ đám mây</b><p class="small">Chưa bật. Tiến độ đang chỉ lưu trên máy này.</p>`;return}
  if(!user){sec.innerHTML=`<b>☁︎ Đồng bộ đám mây</b>
    <p class="small">Đăng nhập để lưu tiến độ lên đám mây và dùng trên nhiều máy. Tiến độ hiện có trên máy này sẽ được giữ và gộp lên.</p>
    <form id="syncForm"><label for="sEmail">Email</label><input id="sEmail" type="email" autocomplete="username" inputmode="email" autocapitalize="off">
    <label for="sPass">Mật khẩu (ít nhất 6 ký tự)</label><input id="sPass" type="password" autocomplete="current-password">
    <div class="row"><button class="prim" data-sa="in">Đăng nhập</button><button class="ibtn" type="button" data-sa="up">Tạo tài khoản</button></div></form>
    <p class="small" id="sMsg">${esc(msg)}</p>`;return}
  sec.innerHTML=`<b>☁︎ Đồng bộ đám mây</b>
    <p class="small">Đã đăng nhập: <b>${esc(user.email)}</b><br>${state==="busy"?"Đang đồng bộ…":state==="err"?"⚠️ "+esc(msg):lastSync?"Đã đồng bộ lúc "+lastSync.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"}):""}</p>
    <div class="row"><button class="ibtn" type="button" data-sa="now">Đồng bộ ngay</button><button class="ibtn" type="button" data-sa="out">Đăng xuất</button></div>`;
}
render();
if(!CFG.url||!CFG.key)return;

/* ---------- Đọc / ghi / gộp dữ liệu ---------- */
const readLocal=()=>{const o={};for(const k of KEYS){try{const v=localStorage.getItem(k);if(v!=null)o[k]=JSON.parse(v)}catch(e){}}return o};
let suppress=false;
function writeLocal(o){suppress=true;try{for(const k of KEYS)if(o[k]!==undefined)localStorage.setItem(k,JSON.stringify(o[k]))}finally{suppress=false}}
const cnt=e=>(e?.ok||0)+(e?.bad||0);
function merge(L,R){
  L=L||{};R=R||{};const out={};
  { const a=L.deVocabProg||{},b=R.deVocabProg||{},m={};               // mỗi từ: lấy bản đã luyện nhiều hơn
    for(const k of new Set([...Object.keys(a),...Object.keys(b)])){const x=a[k],y=b[k];
      m[k]=!x?y:!y?x:(cnt(x)!==cnt(y)?(cnt(x)>cnt(y)?x:y):((x.lv||0)>=(y.lv||0)?x:y))}
    if(Object.keys(m).length)out.deVocabProg=m }
  { const a=L.deProg||{},b=R.deProg||{},m={...b};for(const k in a)m[k]=Math.max(a[k]||0,b[k]||0);if(Object.keys(m).length)out.deProg=m }
  { const a=L.deMatchBest||{},b=R.deMatchBest||{},m={...b};for(const k in a)m[k]=b[k]?Math.min(a[k],b[k]):a[k];if(Object.keys(m).length)out.deMatchBest=m }
  { const a=L.deCustomSets||[],b=R.deCustomSets||[],ids=new Set(a.map(s=>s.id));const m=[...a,...b.filter(s=>!ids.has(s.id))];if(m.length)out.deCustomSets=m }
  { const a=L.deCfg||{},b=R.deCfg||{},m={...b};for(const k in a)if(a[k]!==""&&a[k]!=null)m[k]=a[k];if(Object.keys(m).length)out.deCfg=m }
  return out;
}
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);

/* ---------- Supabase ---------- */
let sb=null,started=false;
function loadLib(){return window.supabase?Promise.resolve(window.supabase):new Promise((ok,no)=>{const s=document.createElement("script");
  s.src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js";s.onload=()=>ok(window.supabase);s.onerror=()=>no(new Error("Không tải được thư viện đồng bộ (cần mạng)"));document.head.appendChild(s)})}
const busyUI=()=>!!document.querySelector("#qcard, #flip, .mgrid, .mic.on");

async function pull(reloadIfChanged){
  if(!user)return;setState("busy");
  try{
    const {data,error}=await sb.from("progress").select("data,updated_at").eq("user_id",user.id).maybeSingle();
    if(error)throw error;
    const local=readLocal(),merged=data?merge(local,data.data):local;
    if(!data||!same(merged,data.data))await push(merged);
    lastSync=new Date();setState("ok","Đã đồng bộ");
    if(!same(merged,local)){writeLocal(merged);
      if(reloadIfChanged&&!busyUI()){sessionStorage.setItem("deSyncReloaded","1");location.reload()}}
  }catch(e){setState("err",e.message||String(e))}
}
async function push(obj){
  if(!user)return;
  const {error}=await sb.from("progress").upsert({user_id:user.id,data:obj||readLocal(),updated_at:new Date().toISOString()});
  if(error)throw error;lastSync=new Date();
}
let timer=null;
function schedulePush(){if(!user)return;clearTimeout(timer);setState("busy");
  timer=setTimeout(async()=>{timer=null;try{await push();setState("ok","Đã đồng bộ")}catch(e){setState("err",e.message||String(e))}},2500)}

/* mọi lần app lưu tiến độ → hẹn đẩy lên đám mây */
const orig=Storage.prototype.setItem;
Storage.prototype.setItem=function(k,v){orig.call(this,k,v);if(this===window.localStorage&&!suppress&&KEYS.includes(k))schedulePush()};

document.addEventListener("visibilitychange",()=>{
  if(!user)return;
  if(document.visibilityState==="hidden"&&timer){clearTimeout(timer);timer=null;push().catch(()=>{})}
  if(document.visibilityState==="visible")pull(true);
});

/* ---------- Đăng nhập ---------- */
sec.addEventListener("click",async e=>{
  const b=e.target.closest("[data-sa]");if(!b)return;const a=b.dataset.sa;
  if(a==="in"||a==="up"){e.preventDefault();
    const email=$("sEmail").value.trim(),password=$("sPass").value;
    if(!email||password.length<6){$("sMsg").textContent="Nhập email và mật khẩu (ít nhất 6 ký tự).";return}
    $("sMsg").textContent=a==="in"?"Đang đăng nhập…":"Đang tạo tài khoản…";
    const r=a==="in"?await sb.auth.signInWithPassword({email,password}):await sb.auth.signUp({email,password});
    if(r.error){const m=r.error.message||"";$("sMsg").textContent=/invalid login/i.test(m)?"Sai email hoặc mật khẩu.":/not confirmed/i.test(m)?"Email chưa được xác nhận — mở hộp thư, bấm link xác nhận rồi đăng nhập lại.":/already registered/i.test(m)?"Email này đã có tài khoản — bấm Đăng nhập.":"Lỗi: "+m;return}
    if(a==="up"&&!r.data.session){msg="";$("sMsg").innerHTML="✅ Đã tạo tài khoản. Mở email, bấm link <b>xác nhận</b>, rồi quay lại đây bấm <b>Đăng nhập</b>.";return}
  }
  if(a==="now")pull(true);
  if(a==="out"){await sb.auth.signOut();user=null;setState("off","");}
});

/* ---------- Khởi động ---------- */
(async()=>{
  try{const lib=await loadLib();sb=lib.createClient(CFG.url,CFG.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}})}
  catch(e){setState("err",e.message);return}
  sb.auth.onAuthStateChange((ev,session)=>{const was=user;user=session?.user||null;
    if(started&&ev==="SIGNED_IN"&&!was&&user)pull(true);else render()});
  const {data}=await sb.auth.getSession();user=data.session?.user||null;started=true;
  if(user){const justReloaded=sessionStorage.getItem("deSyncReloaded");sessionStorage.removeItem("deSyncReloaded");pull(!justReloaded)}else render();
})();
})();
