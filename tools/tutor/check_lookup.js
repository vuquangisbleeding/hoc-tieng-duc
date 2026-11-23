/* Kiểm tra: mọi từ xuất hiện trong bài kit đều tra được trong Tra từ.  node tools/tutor/check_lookup.js */
global.window={VOCAB_SETS:[]};const fs=require("fs"),path=require("path");
const R=path.join(__dirname,"..","..");
for(const f of ["vocab-data.js","vocab-a1.js","tutor-data.js","dict.js"])eval(fs.readFileSync(path.join(R,f),"utf8"));
const D=window.DictCore;D.build();
const miss=new Map(),approx=new Map();
const SKIP=new Set(["anh","trai","nam"]);
function chk(text,k){text=String(text).replace(/\([^)]*\)/g," ");for(const t of D.tokens(text)){if(SKIP.has(t))continue;if(t.length<2&&!/^[A-ZÄÖÜ]$/.test(t))continue;if(/^[A-ZÄÖÜ]$/.test(t))continue;
  const r=D.lookup(t);const ok=(r.hits&&r.hits.length)||r.num||r.compound||(r.parts&&r.parts.every(x=>x.r.hits.length||x.r.num));
  const m=!ok?miss:(r.approx?approx:null);if(m){const o=m.get(t)||{n:0,k:[]};o.n++;if(o.k.length<3&&!o.k.includes(k))o.k.push(k);m.set(t,o)}}}
for(const k of window.TUTOR.kits){
  for(const x of k.X)for(const d of x.d)chk(d[1],k.n);
  for(const s of k.S||[]){chk(s[0],k.n);chk(s[1],k.n)}
  for(const w of k.W||[])chk(w[1],k.n);
  for(const f of k.F||[]){chk(f[0].replace(/___/g," "),k.n);chk(f[1],k.n)}
  for(const p of k.P||[])chk(p[1],k.n);
  for(const c of k.C||[]){chk(c[1],k.n);chk(c[3],k.n)}
  for(const x of k.X)for(const q of [...(x.L||[]),...(x.R||[])])for(const o of q.slice(1))if(!/[ạảãàáâầấậẩẫăằắặẳẵẹẻẽèéêềếệểễịỉĩìíọỏõòóôồốộổỗơờớợởỡụủũùúưừứựửữỵỷỹỳýđ]/i.test(o))chk(o,k.n);
}
const show=(m,title)=>{const a=[...m.entries()].sort((x,y)=>y[1].n-x[1].n||x[0].localeCompare(y[0]));console.log(`\n${title}: ${a.length}`);console.log(a.map(([t,o])=>`${t} (${o.n}× kit ${o.k.join(",")})`).join("\n"))};
show(miss,"KHÔNG TRA ĐƯỢC");if(process.argv[2]==="-a")show(approx,"GẦN ĐÚNG");
