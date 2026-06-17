//****
//***\*/
//Reverese Pattern
let n=5;
for (let i=n;i>0;i--){
    let row=" ";
    for (let j=1;j<i;j++){
        row += "*";
    }
    console.log(row.trim());
}

let n=4
for (let i=0;i<n;i++){
    let row=" ";
       
     for (let j=0;j<i;j++){   
              row += "*"; 
        for (let k=0;k<=j;k++){
            row +=" ";
        }
     }
   console.log(row); 
}