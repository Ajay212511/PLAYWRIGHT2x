class bug{

    constructor(title,severity){
        this.title=title;
        this.severity=severity;
    }

    display(){

        console.log( this.severity +"-" + this.title)
    }

}

const b1=new bug("Login Crash","critical");
const b2=new bug("type error in footer","Low");
b1.display();
b2.display();