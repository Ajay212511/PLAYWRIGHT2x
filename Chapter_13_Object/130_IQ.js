const user ={
browser:"chrome",
timeout:"3000",
testname:"login test"
}

console.log(user);
//accessing the Values
console.log(user.browser);
console.log(user.testname);
console.log(user["timeout"]);
//dynamic property access
const testcases="testname"
console.log(user[testcases]);

//adding/modifying properties
user.timeout=4000;//modifying
user.testname="pass";//modifying
user.retry=5;
console.log(user);

console.log(Object.getOwnPropertyDescriptor(user,"testname"));





