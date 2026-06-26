class URL{
    constructor(env="Staging",Port=3000){
this.env=env;
this.Port=Port; }

getURL(){

return "https://" + this.env +":" +this.Port;
}
}

const URL1=new URL();
const URL2=new URL("Production",8080);

console.log(URL1.getURL());
console.log(URL2.getURL());

