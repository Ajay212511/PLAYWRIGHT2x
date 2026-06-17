//Real QA Scenario:End-to-End Login for the App.vwo.com

//Openbrowser()
//gotologinpage()
//entercreadential()
//clciklogin()

//Same exmaple with 150 Function then it's becomes like a cb hell or pyramid hell
function openbrowser(callback){
    console.log("Step1: Opening the Browser");
    setTimeout(function(){
    callback();
    },1000);   
}

function goToLoginPage(callback){
    console.log("Step 2: Login page loaded");
    setTimeout(function(){
    callback();
    },500);   
}
function enterCredential(callback){
    console.log("Step 3: Enter Credential");
    setTimeout(function(){
    callback();
    },1000);   
}
function click(callback){
    console.log("Step 4: Click the page");
    setTimeout(function(){
    callback();
    },1000);   
}
//This is callback hell

openbrowser(function(){
    goToLoginPage(function(){
      enterCredential(function(){
        click(function(){
            console.log("Test Completed");
            
        })
      })
    }) 
})