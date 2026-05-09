//var ,let,const
//var is function scoped
//let and const are block scoped
//var can be re-declared and updated
//let can be updated but not re-declared
//const cannot be updated or re-declared
var a=10; // a is a global variable
console.log("value of a  before re-declaraing :"+a);

var a=20;   // re-declaring a variable using var is allowed
console.log("value of a after re-declaring :"+a);
a=30; // updating a variable using var is allowed
console.log("value of a after updating :"+a);
let b=30; // b is a block scoped variable
console.log("value of b before updating :"+b);


//let b=40; // re-declaring a variable using let is not allowed
b=40; // updating a variable using let is allowed
console.log("value of b after updating :"+b);
const c=50; // c is a block scoped constant variable
console.log("value of c before any updates :"+c);

//c=60; // updating a variable using const is not allowed
//const c=70; // re-declaring a variable using const is not allowed

//Difination of the function
function printhello()
{
console.log("My way is the best way ,what u think?");
var a=100; // a is a local variable
console.log("value of a local variable :"+a);
for (var a=0;a<5;a++)
{
console.log("value of a in the loop :"+a);
}
if(true)
{
var a=240
console.log("value of a in if block :",a);
}

console.log("value of a after the loop and if block :"+a);
}

//calling the function
printhello();


let x=10;
console.log("value of x before the block :"+x);
if(true)   {
let x=20; // x is a block scoped variable
console.log("value of x inside the block :"+x);
}
console.log("value of x after the block :"+x);

const y=30;
console.log("value of y before the block :"+y);
if(true)   {
const y=40; // y is a block scoped constant variable
console.log("value of y inside the block :"+y);
}   
console.log("value of y after the block :"+y);  

/*
var n=100;
let n=100; // SyntaxError: Identifier 'n' has already been declared
const n=100; // SyntaxError: Identifier 'n' has already been declared
*/

