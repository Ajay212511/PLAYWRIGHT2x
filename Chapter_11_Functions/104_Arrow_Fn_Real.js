//Normal Function
function ValidateStatusCode(statuscode){
if(statuscode>=200 && statuscode<300){
    console.log("Request is fine")
}
}

ValidateStatusCode(200);
//Function with expression
const Status_exp=function(ApiStatusCode){
    if(ApiStatusCode>=200 && ApiStatusCode <300){
        console.log("Request is OK");
    } 
}
Status_exp(200);
//function with arrow
const Status=(ApiStatusCode)=>{
    if(ApiStatusCode>=200 && ApiStatusCode <300){
        console.log("Request is fine");
    }
}
