//Basics Async and await
async function getTestResult() {
    return "Pass";  
}
getTestResult().then (function (res){
console.log(res);
})