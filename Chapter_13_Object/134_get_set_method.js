const user={firstName:"ajay",LastName:"Jaiswal",
    get fullName(){
      return this.firstName+ this.LastName;  
    },
    set fullName(value){
     [this.firstName, this.LastName]=value.split(" ");
    }
}

console.log(user.fullName);
user.fullName="Amit Sharama"
console.log(user.fullName);
