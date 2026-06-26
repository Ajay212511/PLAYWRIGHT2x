//Gran Father ->Fathe->Sone
//Base Page ->AuthPage->AdminPage

class BasePage {
constructor(name){
    this.name=name;
}

open(){

    console.log("[Open]" +this.name);
}
}

class Authpage extends BasePage {

Login(user){

    console.log("[Login]" +user);
}
}


class AdmnPage extends Authpage {

    constructor(){
        super("Admin Panel")
    }
ManageUser(){

    console.log("[Amin]-ManageingUser");
}
}
let admin=new AdmnPage ();
admin.open();
admin.Login("SuperAdmin");
admin.ManageUser();