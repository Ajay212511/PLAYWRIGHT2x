let arr=[1,2,3];
arr.push(4,5,6);
console.log(arr);


//splice(start,deletecount,items to add)
arr.splice(2,1);
console.log(arr);

arr.splice(2,4);
console.log(arr);

arr.splice(2,0,99)
console.log(arr);

arr.splice(3,0,1,2,3,4,5)
console.log(arr);

arr.splice(3,2,10,20)
console.log(arr);

arr.splice(3,0,11,21)
console.log(arr);