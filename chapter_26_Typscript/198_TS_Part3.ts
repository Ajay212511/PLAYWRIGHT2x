function grret(name:string):string{
    return `Hello,${name}`;
}

function sayHello(msg:string):void {
console.log(msg);
}

//never-function never returns(throws error or infinite loops)

function throwerror(message:string):never{
    throw new Error(message);
}

function infiniteLop():never{
    while(true){
        
    }
}