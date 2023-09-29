// Hello world in Node js

console.log(this)

//Values and Data Types

// Primitive data types

// numbers 2,3,4,5,6
// String "String" or 'string'
let myName="Abhishek" //for variable we use let  and for constants we use const
   //(Camel cashing)

//    let highScore = 300
//    console.log(highScore)

//    let pwSkillsCoursePrice = 3500
//    console.log(pwSkillsCoursePrice)
  

//    var userBankBalance = 5000 // this is a bank balance

//    pwSkillsCoursePrice= 2000
//    console.log(pwSkillsCoursePrice);

let basePrice = 500
let originalPrice = basePrice + (basePrice*0.18)   //Base price + GST
console.log(originalPrice);

//Operators 
console.log('Answer is :' , 3 ** 3); //To the power


let abhishekHighScore = 200;
let rajuHighScore = 300;

console.log(abhishekHighScore == rajuHighScore);  //comparison 
console.log(abhishekHighScore < rajuHighScore);  //comparison 
console.log(abhishekHighScore != rajuHighScore);  //comparison 
//if we use tripple equal === the the type of the object is also checked
let highScore1 = 500  //int 
let highScore2 = "400"   //string
console.log(highScore1 === highScore2);

console.log("---------------------------");

let value1 = true
let value2 = false
let value3 = true
let value4 = false

console.log(value1 && value3);

