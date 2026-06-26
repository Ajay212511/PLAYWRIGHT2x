class BankAccount{
    #balance =0;

    deposit (amount){
    if(amount>0)
        this.#balance +=amount;

    }
    getBalance (){
        return this.#balance;
    }
}

const account=new BankAccount();
account.deposit(150);
console.log(account.getBalance());
//account.#balance; //undefined (no pubick  field by that name)