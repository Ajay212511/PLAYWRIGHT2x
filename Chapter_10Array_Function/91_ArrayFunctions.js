
//The sorting is working — it's just sorting based on Unicode character codes, 
// where uppercase letters come before lowercase ones.

let fruits=["apple","cherry","bananana","coconut","Mango"];
//fruits.sort();
fruits.sort((a,b)=>a -b)
//fruits.sort((a,b)=>b -a)
console.log(fruits);

// let x= [1,2,32,12,11,2]
// x.sort(); //Not correct   //Natural Sorting,Lexicographing sorting
// console.log(x); 



let x= [1,2,32,12,11,2]
x.sort((a,b)=>a -b) //Ascending Order
console.log(x);

let y= [1,2,32,12,11,2] 
y.sort((a,b)=>b-a) //Descending order
console.log(y);

