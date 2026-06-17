let env="staging";
function setupConfig(){
    let timeout=3000;
    console.log(env);
    console.log(timeout);
}

setupConfig();
console.log(env);
console.log(timeout);//Refrence error bcz timeout is not defined //local variable inside the function
