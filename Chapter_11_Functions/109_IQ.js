//1st ques
function getStatus(code){
     if(code>=200 &&code< 300) return "success"
     if(code>=400 &&code< 500) return "client error"
     if(code>=500 ) return "server error"

}  getStatus(200);  //no result bcz not assign


//2nd ques
function logTest(name){
    console.log(`Running ${name}`)
    //no return Statemet
}

let result=logTest("Login");
console.log(result);

//3rd QUes
greet ("Alice")  //we will not get thr refrence error because it is fully hoisted
function greet(name){
    return `Hello ${name}`

}

//4th

sayhi ("bob") // we will get refrence error because const is TDZ not fully hosited
const sayhi=function (name){
     return `Hello ${name}`
};