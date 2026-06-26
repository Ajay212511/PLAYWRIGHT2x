class car {
    CAB
//C ->constructor
//A->Attribute
//B-> Behaviour

constructor(name_given){
this.name=name_given;
}
drive(){
    console.log("I am driving",this.name)
}

}

let tesla =new car ("modle S");
tesla.drive();

let creata =new car("I10");
creata.drive();