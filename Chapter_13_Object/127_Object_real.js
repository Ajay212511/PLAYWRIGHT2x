let config={};
config.browser="chrome";
config.timeout="3000";
config.testname="login test";
console.log(config)


if(config.browser==="chrome"){
    console.log("execte the code");
    
}
//We can delete also
delete config.browser;
console.log(config);

let config2={
    browser:"chrome",
timeout:"3000",
testname:"login test"
};
console.log(config2);

