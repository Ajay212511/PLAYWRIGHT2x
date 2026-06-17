const user={name:"ajay",age:"30",city:"amethi"};

const {name,age}=user; //Deconstruction of onject
// console.log(age);
// console.log(name);
// console.log(user.name);
// console.log(user);


//Rename Variables

const {name:username,age:userage,city:usercity}=user;
console.log(username);

//Default Values

const {country="USA"}=user;
console.log(country);

const {city="USA"}=user;
console.log(city);

const NameDetails=
{name:
{  
    user:"ajay",
age:
{
    userage: "30",
Usercity:
{

    city:"amethi"
}}}};


console.log(NameDetails.name.age.Usercity.city);
console.log(NameDetails.name.user);


