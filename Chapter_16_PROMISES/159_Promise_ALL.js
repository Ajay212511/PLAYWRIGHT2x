let checkauth=Promise.resolve("auth ok");
let checkDB=Promise.resolve("DB OK");
let checkCache=Promise.resolve("cache clear");
//let DBDown=Promise.reject("DB Down");//If any onw of then failed it means that all is failed
let DBDown=Promise.resolve("DB not Down");

Promise.all([checkCache,checkDB,checkauth,DBDown]).then(function(results){

    console.log("all checks are fine");
}).catch(function(error){
    console.log(error);//If any onw of then failed it means that all is failed
});

Promise.allSettled([
    Promise.resolve(" Test A Passed"),
    Promise.reject(" Test B Failed"),
    Promise.resolve(" Test C Passes"),
    Promise.resolve(" Test D Passed"),
    Promise.reject(" Test E failed")
]).then(function(results){
    results.forEach(function(r,i){
console.log("Test "+ (i+1) + ":" , r.status, "-", r.value || r.reason);
    })
})
// This is like a test report where we want all results