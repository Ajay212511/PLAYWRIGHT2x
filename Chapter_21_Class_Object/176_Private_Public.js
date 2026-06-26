class credential {
    user;   //Public Variable
    #apikey; //Private variable

    constructor(user,key){
        this.user=user ;
        this.#apikey=key;
    }

    authHeader(){
        return "Bearer" +  this.#apikey;
    }

}
let cred = new credential ("admin"," scret_key_1234");
console.log(cred.user);
//console.log(cred.#apikey); //error this is privatekey
//console.log(cred.apikey);//undefined

let token =cred.authHeader();
console.log(token);
