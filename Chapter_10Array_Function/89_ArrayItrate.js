let results=["pass","fail","pass","pass","fail","skip"];
for (let i=0;i<results.length;i++)
{
    console.log(results[i]);
}


console.log("==============")
for(x of results){
    console.log(x)
}

console.log("==============")
results.forEach((q,index)=>{
    console.log(q,index);
});

for (let y in results){
    console.log(y, "->", results[y] );
} 