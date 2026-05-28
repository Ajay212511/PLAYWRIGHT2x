let scores=[10,21,24,54,65,65];

let grades=scores.map(s=>s>45?"pass":"fail")
console.log(grades);

//filter ->keeps elements that pass a test

let passing=scores.filter(s=>s>45)
console.log(passing)
//reduce-accumulate the values to a single value

let total=scores.reduce((a,b)=>a+b,0); //0 means 0th element
console.log(total);

let nested=[[1,2],[3,4],[5,6]];
console.log(nested.flat());