const greet =function (name1){
    return name1;
}


let r = greet("Ajay");
console.log(r);

const greet2=(name1) =>name1;
let r2=greet2("Ajay Jaiswal");
console.log(r2);


const doubleit =n=>n*2;
console.log(doubleit(10));

const Printit = name => console.log(name);
Printit("Ajay Kumar Jaiswal")

//Normal Function

function add (a,b){
    return a+b;
}

const add2=(a,b)=>a+b;  //Arrow Function

let Result=add2(5,6);
console.log(Result);

let Result1=add(4,5);
console.log(Result1)

function Say1(){
    console.log("Hi");
}

Say1();
Result4 =Say1();
console.log(Result4);//Undefined bcz return type not there in the function
const say2=()=>console.log("Hi");
const say3 =()=>'Hi';


say2();
Result2 =say3();
console.log(Result2); //For Return Tye Always we need to assign one variable


const greet1 =(name)=>{
    const message="Hi "+name;
    console.log(message);
    return message;
}

let final_Name=greet1("Ajay Jaiswal");
console.log(final_Name);