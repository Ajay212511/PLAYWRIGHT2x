let order =new Promise (function (resolve,reject){
    let foodready=true;
    if(foodready){
        resolve("Pizz ia delivered.Food is ready.")
    }else {
        reject("Order cancelled because of rain")
    }
});

console.log(order);