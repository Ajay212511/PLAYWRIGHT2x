function add (a,b,c){
    return a+b+c;
}
let num=[1,2,3];
let result=add(...num);
console.log(result);
 

let responseCode =[100,200,300,400];

function hasError(...code){

    return code.some(c=>c>=400);
}

let result1=hasError(...responseCode);
console.log(result1);
 