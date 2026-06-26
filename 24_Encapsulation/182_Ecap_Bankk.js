class SBI {
#balance;
constructor(name,balance){
    this.name=name;
    this.#balance=balance;
}
getBalance(){
return this.#balance;
}

setBalance(balance,iscashier){
    if(iscashier){
        this.#balance=balance;
    }else {
        console.log("Not Allowed");
    }

}

}

const bank=new SBI("ajay",2000);
console.log(bank.getBalance());
bank.setBalance(100000,false);
console.log(bank.getBalance());

const bank_admin=new SBI("ajay",2000);
console.log(bank_admin.getBalance());
bank_admin.setBalance(100000,true);
console.log(bank_admin.getBalance());


