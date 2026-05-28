// Creating Arrays// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

//Array constructor
let scores=new Array(3); //question
scores[0]=1;
scores[1]=1;
scores[2]=2;
scores[3]=3;
scores[4]=5;
let scores2=new Array(1,2,3);
console.log(scores.length);
console.log(scores);
console.log(scores2);

let numbers=new Array(100,200,300,500,300); //creating the array
console.log(numbers)

let test=Array.of(10,20,30,50)
console.log(test)

//array form only for characters not numbers
let chars=Array.from("hello")
console.log(chars)