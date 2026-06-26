let unknown:unknown="Hello";

if (typeof unknown==="string"){

    console.log("Hey ,How are you bro");
}

let message:string="Hello";
let username:string;
let userID:number;

//Function annotations

function grret(name:string):string{
    return `Hello,${name}`;
}

//Arrow Function Annotations
const multiply =(a:number,b:number):number =>a* b ;

//Onject Annotations

let user :{name:string,age:number}={
    name:"john",
    age:30
};