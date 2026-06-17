let scores=[
    [10,34,54],
    [13,44,50],
    [54,55,22]
];

let rowsum=scores.map(row=>row.reduce((a,b)=>a+b,0));
console.log(rowsum);

let testResutlt=[
    ["login-pass","resister-pass","logout-pass"],
    ["checkout-fail","payment-fails","consfirm-pass"],
    ["search-pass","filter-fails","sort-pass"]

];
for(i=0;i<testResutlt.length;i++){
    for(j=0;j<testResutlt[i].length;j++){
        if(testResutlt[i][j].includes("fail")){
console.log(testResutlt[i][j])};
    }
}