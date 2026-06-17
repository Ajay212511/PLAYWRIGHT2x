function cafe(item,callwhentableready){
    console.log("finding 1......");
    console.log("finding 2......");
    console.log("finding 3......");
    console.log("finding 4......");
    callwhentableready();  
}

function callwhentableready(){
    console.log("Table is ready");
    
};

cafe("burger",callwhentableready);
cafe("Pizza",function(){
    console.log("Item is ready");
    
});
cafe("Momos",()=>{
    console.log("calling 928322241");
    
});