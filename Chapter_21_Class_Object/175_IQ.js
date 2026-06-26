
class browser{
    constructor(name){
        this.name=name;
     this.isopen=true;
    console.log(name + "Launched") }

StartBrowser(){
    console.log("Starting the browser");
}
CloseBrowser(){
    console.log("closing the browser")
}
}

let chrome =new browser("Chrome");
let firefox =new browser("firefox");

console.log(chrome.isopen);


