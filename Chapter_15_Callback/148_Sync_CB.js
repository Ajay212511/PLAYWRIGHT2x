let testResults=["pass","fail","pass","skip"];
testResults.forEach(function(result,index){
    console.log("Test" + index +"=>" +result);
  
});
//This is a Perfect example of a syncronous callback
//where the anonymous function will take the item 1 by 1,
//it will take the index 1 buy 1,it will take the result
//1 by 1,and print the value also 1 by 1

