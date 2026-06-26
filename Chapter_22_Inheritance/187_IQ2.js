class TestCases{

    execute (){
        console.log("Running generic tes");
    }
}

class UNITTest extends TestCases{

    execute (){
        console.log("UINT Testcase -Running one test case");
    }
}

class APITest extends TestCases{

    execute (){
        console.log("API Test cases :Sending HTTPS Request");
    }
}

class UITest extends TestCases{

    execute (){
        console.log("UI Tesst Case : Running UI test cases");
    }
}

let tests = [new UNITTest(),new APITest,new UITest];
tests.forEach(function(test) {
    test.execute();
});