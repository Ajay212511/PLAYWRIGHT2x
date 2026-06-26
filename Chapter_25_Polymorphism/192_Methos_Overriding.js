class BasePage{

    setup(){
    console.log("Open the Base Page");  
}
}
class AuthPage extends BasePage{

    setup(){
    console.log("Open the Auth Page");
    }
}

const Override=new AuthPage();
Override.setup();  //This is called Method overiding