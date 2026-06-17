function PalindromString(str){
        if( typeof str ==="string")
        {
       let str2="";
     for(let i=(str.length-1);i>=0;i--){
           str2 = str2 + str[i];
     }

     if(str.toLowerCase()===str2.toLowerCase()){
console.log(`${str} is a Palindrome  String`);
}else
{
    console.log(`${str} is not a Palindrome  String`);
    
}
} else {

  console.log(`${str} is not a String`)
}
}
PalindromString("Madam")