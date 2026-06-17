let apicall =new Promise (function(resolve,reject){
    resolve({
        status:200,body:"user data"
    })
});

apicall.then(function(response){
    console.log(response.status );
    console.log(response.body); 
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Test completed");//always ifnally will be called
})

