interface APIResponse{
    body  :string;
    Headers?:object;
    ResponseCode?:Number;
};

//? =>Optional Parameter 


let response:APIResponse= {
    body :"Hello",
    Headers:{},
    ResponseCode:200

};

let response1:APIResponse= {
    body :"Hello",
    
};