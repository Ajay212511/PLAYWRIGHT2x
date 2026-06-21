function apicall(name){
return new Promise(function(resolve){
    setTimeout(function(){
        resolve(name,"200 Ok")
    },1000)
})  
 }

 async function Parallel() {

    let [r1,r2,r3]=await Promise.all(
        [
            apicall("auth check"),
            apicall("User Account Creation"),
            apicall("api service page")
        ]
    )

    
    console.log(r1);console.log(r2);console.log(r2);

 }

 Parallel();

