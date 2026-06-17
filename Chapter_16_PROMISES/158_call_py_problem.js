function openthebrowser(){
    return new Promise (function(resolve){
        //Open Browser code
        resolve("Open the Browser");
    })
}

function entercredential(){
    return new Promise (function(resolve){
        //go to loginc ocde
        resolve("Enter the credentails")
    })
}
function click(){
    return new Promise (function(resolve){
        //go to loginc ocde
        resolve("click the page")
    })
}
function gotoLogin(){
    return new Promise (function(resolve){
        //go to loginc ocde
        resolve("login page loaded")
    })
}
openthebrowser().then(function(msg){
    console.log("Step 1: Browser open->"+msg)
return gotoLogin();
}).then(function(msg){
    console.log("Step 2: Login Page->"+msg)
    return entercredential();
}).then(function(msg){
    console.log("Step 3: Enter the Credential->"+msg)
    return click();
}).then(function(msg){
 console.log("Step 3: Click the login page->"+msg)
}).catch(function(error){
    console.log(error);
}).finally(function(msg){
    console.log("complted");
})