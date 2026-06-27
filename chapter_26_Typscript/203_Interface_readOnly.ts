interface APIResponse{
    body:string,
    Headers?:object,
    readonly StatusCode:number,
    ResponseStatus:string
}

let response:APIResponse={

    body:"Hello",
    StatusCode:200,
    Headers:{},
    ResponseStatus:"PASS"
}
let response1:APIResponse={

    body:"Hello",
    StatusCode:200,
    ResponseStatus:"PASS"
    
}
console.log("ResponseCode -" ,response.StatusCode);
console.log("API-Request -",response.body);
console.log("ResponseStatus -",response.ResponseStatus);

//readonly =Can't modify the readonly
//response.StatusCode=404; Not possible beacuse this is read only value
response.body="Hello !! I'm Coming"
console.log("Request -",response.body);