//Multilple inheritance not allowed in JS

class F1 {

    money(){
        console.log("1cr");
    }
}

class F2 {

    money(){
        console.log("1cr");
    }
}

class C1 extends F1,F2  { // not possible in JS

}