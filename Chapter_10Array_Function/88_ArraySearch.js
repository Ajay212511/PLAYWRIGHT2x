let results=["pass","fail","pass","pass","fail","skip"]

console.log(results.indexOf("pass") )//returns first index or -1 if not found
console.log(results.indexOf("fail") )
console.log(results.indexOf("skip") )
console.log(results.indexOf("skips") )

console.log(results.lastIndexOf("fail")); 

//inclused returns boolean
console.log(results.includes("error"))
console.log(results.includes("skip"))

//find returns first matching element
let nums=[10,20,30,40,50];

console.log(nums.find(x=>x>20));

//FindIndex
console.log(nums.findIndex(x=>x>20));
console.log(nums.findLast(x=>x>20));
console.log(nums.findLastIndex(x => x>20));

