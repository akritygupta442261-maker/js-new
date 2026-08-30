//there are only two of data type  on the basic on how data can put in memory
//1 primitive and 2 non primitive
//PRIMITIVE- 7 
//1- String, 2- Number, 3- Boolean , 4- null, 5- undefined, 6- Symbol , 7- BigInt

const score= 100
 const scoreValue= 100.3
  const isLoggedIn= false
  const outsideTemp= null
  let userEmail; //undefined

  ///symbol declare
  const id= Symbol('123')
  const anotherId= Symbol('123')
  console.log(id===anotherId);

  const bigNumber= 2345678765433396325862145n
  console.log(typeof(bigNumber))



//REFERENCE TYPE- NON PRIMITIVE TYPE
// 1- Array , 2- Object , 3- Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj= {
    name: "hitesh",
    age:23,


}

const myFunction= function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof Symbol);




