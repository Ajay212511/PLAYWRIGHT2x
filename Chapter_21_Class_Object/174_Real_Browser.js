
class testcases{
    constructor(name,status,priority){
        this.name=name;
        this.status=status;
        this.priority=priority;  }

        display (){  //method 

            console.log(this.name +" -> " + this.status +" -> " + this.priority);
        }
}

let loginTc= new testcases("Login Tc","Pass","P0");
let signup =new testcases ("signup","fails","P1");

loginTc.display();
signup.display();

//Method is function but inside the class
//outside of the class alwyas function will be function
