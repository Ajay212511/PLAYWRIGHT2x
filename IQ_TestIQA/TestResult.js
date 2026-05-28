let testResult =["Pass","Pass","Skip","Pass","Pass","Pass","Pass","Pass","Pass","Pass","Pass","Pass","Skip","Pass","Pass"];
let Passed=0;
let Failed=0;
let skip=0;
let total=testResult.length;

for(let i=0;i<testResult.length;i++)
{ 
if (testResult[i]==="Pass"){
   Passed++;
}
else if (testResult[i]==="Fail"){
   Failed++;}

else if (testResult[i]==="Skip"){
   skip++;
}else
{
   console.log(`⚠️  Unknown result at index ${i}: "${testResult[i]}"`);
}
}
let PassRatePercentage=total>0?((Passed/total)*100).toFixed(2):0;


let verdict;
let verdictSymbole;

if(Failed===0){
    verdict="✅ Ready for Releaese";
    verdictSymbole="🟢";
}else if(Failed<=2){
    verdict="⚠️ Review Required";
    verdictSymbole="🟡";
} else {
        verdict = "❌ BLOCK RELEASE";
        verdictSymbole = "🔴";}

console.log(`Total Tests : ${String(total)}`);
console.log(` ✅ Passed :${String(Passed)}`);
console.log(` ❌ Failed :${String(Failed)}`);
console.log(` ⏭️ Skipped :${String(skip)}`);
console.log(`PassRatePercentage :${PassRatePercentage})%`);
console.log(`Verdict:${verdictSymbole} ${verdict}`);
