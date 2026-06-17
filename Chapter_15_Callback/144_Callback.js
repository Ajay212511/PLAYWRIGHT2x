 function print(){
    console.log("Normal Function");    
 }

 function placeOrder(clipboarditem,Callback){
    console.log("Hi,Your Order is Place");
    Callback();
 }

 //First way
  placeOrder ("Burger",function(){
 console.log("Hey your item is ready");
  })

  //Second way

  placeOrder("Momos",print);

  //Third way->Arrow Function

  placeOrder("Pizza",()=>{
    console.log("I'm a functon wituour Name");
  })

