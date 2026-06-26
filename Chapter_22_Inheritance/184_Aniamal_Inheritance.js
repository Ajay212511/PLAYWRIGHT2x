class Animal{

    constructor(name){
     this.name=name;
    }

    eat(){
        console.log(this.name + "Is eating");
    }
     sleep(){
        console.log(this.name + "Is sleeping");
    }
}

class dog extends Animal{
    constructor(name,breed){
        super(name);//Parent constructore to use the super keyword
        this.breed=breed;
    }
bark(){

    
    console.log(this.name + "is barking ");
}
}

const pets=new dog("rucy","beligumn");
pets.sleep();
pets.bark();
console.log(pets.breed);

