class BaseTest{
    setup(){
        console.log("BASE test Open Browser" );
    }
}

class APITest extends BaseTest{
    setup(){
        console.log("API test Open Browser" );
    }
}

const URL =new APITest(); //whoever object is presentit will call that
URL.setup();