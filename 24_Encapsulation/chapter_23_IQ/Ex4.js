class counter{

    constructor(){
        this.count=0;
    }

    increment(){
        this.count++;
        return this;
    }
    display(){
        console.log("count is " + this.count);
        return this;
       }
}

new counter().increment().increment().increment().display();
