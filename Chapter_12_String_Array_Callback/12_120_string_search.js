//Searching &&  checking
let url=`https://staging.vwo.com/api/login?retry=true`;

//includes
console.log(url.includes("staging"));
console.log(url.includes("prodcution"));

//startswith/endswith

console.log(url.startsWith("https"));
console.log(url.startsWith("http"));

console.log (url.endsWith("true"));

//index of and lastindex of'
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));


console.log(url.indexOf("nothere")); //If we don't have the values then it will retunr -1
console.log(url.search(/login/));//regex
console.log(url.search(/vwo/));
//regex->Regular expression-this is a pattern 