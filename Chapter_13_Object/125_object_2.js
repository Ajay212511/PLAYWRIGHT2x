//Object
//Key and Value
let student1={name:"ajay",age:35};
let student2={name:"Pramod"};
let student3={name:"ajay",age:35,Phone:"12341212321"};
//Key will not be in double Quotes
//below key in double is actually json
//let student2={"name":"Pramod"}; ->JSON

let a= {status:"pass"};
console.log(a);
console.log(a.status);
console.log(a["status"]);

let b=a;
b.status="Fail"
console.log(b);
console.log(b.status);
console.log(a.status);


