const base=process.env.SMOKE_URL||"http://localhost:3000";
const paths=["/","/health","/buscar","/login","/registro","/dashboard"];
for(const path of paths){const r=await fetch(base+path);if(!r.ok) throw new Error(path+" returned "+r.status);console.log("PASS",path,r.status)}
console.log("SMOKE PASS",paths.length);