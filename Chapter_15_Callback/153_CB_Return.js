function calculator(a,b,Operation){
       return Operation(a,b)
}

let sum =calculator(10,5,function(x,y){
       return x+y;
})
console.log(sum);

