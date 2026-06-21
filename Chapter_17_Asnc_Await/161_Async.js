async function testapi() {
    try{
        let result=await Promise.reject("503 reject");

    }
    catch(error){
        console.log(`Error`,error);
    }
    finally{
        console.log("clean up!!")
    }
}

testapi();