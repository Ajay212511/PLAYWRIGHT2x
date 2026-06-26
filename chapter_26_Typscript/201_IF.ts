interface TestCase{
    id:number;
    name:string;
    status:string;
    duration:number;
}

let test1:TestCase={
    id:1,
    name:"Login with invalid credentails",
    status:"fail",
    duration:1500
}
console.log("TC-"+test1.id + " ->" +test1.name +" ->" +test1.status +" -> "+test1.duration );
let test2:TestCase={
    id:2,
    name:"Login with valid credentails",
    status:"pass",
    duration:1500
}
console.log("TC-"+test2.id + " ->" +test2.name +" ->" +test2.status +" -> "+test2.duration );