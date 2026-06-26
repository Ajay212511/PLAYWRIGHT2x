class BaseTest{
    setup(){
        console.log("BASE test Open Browser" );
    }
    teardown(){
        console.log("close the browser")
    }
}

class UITest extends BaseTest{
    setup(){
    super.setup();
        console.log("UI:Maximize window" );
}

 teardown(){
        console.log("UI:Take the screenshot")
        super.teardown();
    }
    
}

const URL =new UITest(); //whoever object is presentit will call that
URL.setup();
URL.teardown();
