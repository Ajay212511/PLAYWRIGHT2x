class user{
    constructor(name){
        this.name=name;
    }

    greet (){
        console.log("Hi ,I am" + " " + this.name);
    }
}

const u1= new user("Alice");
const u2 =new user("bob");
u1.greet();
u2.greet();