function greetTester(name,callback){
    console.log("Welcome," + name);
    callback();  
}
greetTester("dev",function(){
    console.log("Let's start the testing");  

});
//callback with Parameters
function runTests(testName,callback){
    let status="PASS";
    callback(testName,status);}

runTests("Login Test",function(name,result){
console.log(name  +  " => "  +result);
})

//Sync Callback-foreach
let bugs=["UI glitch","API timeout","wrong redirect"];
bugs.forEach(function(bug,i){
    console.log("Bug #"+ (i+1)+":"+bug);
});

console.log("Total Bugs:"+bugs.length);


    
