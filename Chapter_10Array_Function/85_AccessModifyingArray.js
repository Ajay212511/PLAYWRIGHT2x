//Accessng && Modifying

let statuses=["pass","fail","skip"]
console.log(statuses[0]);
console.log(statuses[1]);

console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
console.log(statuses.at(-4));

//Modify
statuses[0]="blocked" //modify the array
console.log(statuses)