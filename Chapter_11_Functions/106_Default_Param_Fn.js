
//Default Parameter functions
function retry(testName,maxRetry=3,delay=1000){
    console.log(`Retrying : ${testName} up to ${maxRetry} time with ${delay} delay seconds`)
}
retry("login Test");
retry("Registration Page",5,1000)