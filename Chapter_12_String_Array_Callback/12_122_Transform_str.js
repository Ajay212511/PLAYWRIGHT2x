let str =" Hello world ! ";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

let msg="Pass,fail,fail,Pass,skip";
console.log(msg.replace("fail","Pass"));
console.log(msg.replaceAll("fail","Pass"));
console.log(msg.replace(/fail/,"skip"));

//concatenation
//"Hello" + " " + "World"
console.log("Hello".concat(" ","World"))

let url="https://app.vwo.con?app=pramod";
console.log(url.replace(/app/,"qa"));

let r ="pass,fail,skip".split(",");
console.log(r);

let rr="pass_fail_skip".split("_").join(" ");
console.log(rr);

let parts =["2024","03","23"];
let date=parts.join("-");
console.log(date);