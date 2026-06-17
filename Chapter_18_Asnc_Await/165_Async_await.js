function apicall(name){
return new Promise(function(resolve){
    setTimeout(function(){
        resolve(name,"200 Ok")
    },1000)
})  
 }

 async function seq() {
    console.log("Starting the test");
    let start=Date.now;

    let r1=await apicall("login");
    console.log(r1);
    let r2=await apicall("dasbpard");
    console.log(r2);
    let r3=await apicall("UI");
    console.log(r3);
    let r4=await apicall("Logout");
    console.log(r4);

 }

 seq();