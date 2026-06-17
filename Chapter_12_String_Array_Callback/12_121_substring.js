let str="Login_test_Pass_001";
//Slice(start,end) -negative index supoorted --
//Substring(start,end)->negative index not supported
console.log(str.slice(0,5));
console.log(str.slice(11));
console.log(str.slice(-3));
console.log(str.substring(0,5));

console.log(str.substring(-5));

