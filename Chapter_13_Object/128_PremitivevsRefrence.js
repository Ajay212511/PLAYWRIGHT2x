let a=10;//Premitive variable
let b=a;
 b=99;
console.log(a)




//Object -copied by refrence,Call by ref
//Refrence-object,array,function
let obj1={value:10};
let obj2=obj1;
obj2.value=99;
console.log(obj2);
console.log(obj1);


//copy by refrence-always copy
//Premitive -always create new copy
//Primitive-number,string,boolean,null,undefined
//Refrence-array,object,function