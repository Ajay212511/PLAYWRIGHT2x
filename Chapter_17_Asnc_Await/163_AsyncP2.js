 function getToekn(){
    return Promise.resolve("abc 123");
}

async function run() {

    let token=await getToekn();
    console.log(token)
}

run();