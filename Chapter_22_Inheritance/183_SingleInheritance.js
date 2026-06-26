class basePage{

constructor(page){
    this.page=page;
}

open(){

    console.log("open the URL Page" +this.page);
}
close(){
    console.log("close the URL Page"+this.page);
}
}

class LoginPage extends basePage {

}

const p1=new LoginPage("URLS");
p1.open();
p1.close();