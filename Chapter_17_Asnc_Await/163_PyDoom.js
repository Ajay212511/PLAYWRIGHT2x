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

async function runE2Eflow(){
    let msg1=await openthebrowser();
    console.log(msg1);
    let msg2=await gotoLogin();
    console.log(msg2);
    let msg3=await entercredential();
    console.log(msg3);
    let msg4=await click();
    console.log(msg4);
}

runE2Eflow();