let p =new Promise(function(resolve,reject){
resolve(42);
});
p.then(function(value){
    console.log("Answer:" ,value)
})

let q =new Promise(function(resolve,reject){
reject("Somethig Broke");
});
q.catch(function(value){
    console.log("Caught:" ,value)
})

let r=Promise.resolve(10);

r.then(function(val){
    return val+20;
}).then(function(val){
    console.log("Result :" +val)
})


Promise.resolve(1).then(function(value){
    console.log(value)
    return value+1;
}).then(function(value){
    console.log(value)
    return value+1;
}).then(function(value){
    console.log(value)
    return value+1;
});

Promise.resolve("start").then(function(val){
    console.log(val);
    throw new Error("Broke at step2");    
}).then(function(){
    console.log("This will not run");
}).catch(function(err){
console.log("caught :",err.message);
});


Promise.reject("test Failed").then(function(data){
console.log("data:" ,data);
}).catch(function(err){
console.log("Error",err);
}).finally(function(){
console.log("Cleanup done")
});

Promise.resolve("Quick win").then(function(msg){
console.log(msg);
});

Promise.reject("QUick Loss").catch(function(err){
    console.log(err);
});

let t1=Promise.resolve("Login :PASS");
let t2=Promise.resolve("Search :PASS");
let t3=Promise.resolve("Logout :PASS");

Promise.all([t1,t2,t3]).then(function(results){
    console.log(results);
});


Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function(results){
   results.forEach(function(r){
    // let val=r.status==='fulfilled'?r.value:r.reason;
    // console.log(r.status + "->" + val);
    console.log(r)
   })
})