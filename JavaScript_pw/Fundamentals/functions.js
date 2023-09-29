function greet() {
    console.log("Hi There");
    console.log("Abhishek Behera");
}

function sqr(x)  { //X -> Parameter
    // console.log(x*x);
    return (x*x);   // To grab the output we use return statement 
}

// greet()
let a = sqr(5) // 5-> Argument
console.log(a);


//Function with Parameter and without parameter
function displayMessage (
    messageToBeDisplayed = " Abhishek Behera default message"
) {
    console.log(messageToBeDisplayed);
}

//with parameter
displayMessage("I am a Full Stack Web Developer")

//without parameter
displayMessage()

function add(x= 2, y = 10) { // Here the integers are default parameters
    return x + y;
}

console.log(add(1,8));  //Arguments are assigned from left to right so here 1 is assigned to x and y takes the default value

//Function with unlimited number of parameters
function sumofAllParameters() {
    let sum = 0;
    for(var i = 0; i<arguments.length; i++) 
    sum += arguments[i];
    return sum;
}
let result = sumofAllParameters(1,2,3,4,5) ;
console.log(result);



// Arrow Functions 


//1.One parameter , and single return statement
const square = (x) => x * x;

//2. Multiple parameters, and a single return expression
const sumOfTwoNumbers = (x , y) => x + y;

//3.Multiple statement in function expression
const sum = (x , y) =>  {
    console.log(`Adding ${x} and ${y} `);
    return x + y;
}

//4. Returning an Object
const sumAndDifference = (x , y) => ({ sum : x + y, difference : x - y});


let output1 = square(5) //25
console.log(output1);
let output2 = sumOfTwoNumbers(5 , 9); //14
console.log(output2);
let output3 = sum(1,2) //Adding 1 and 2      3 
console.log(output3);
let output4 = sumAndDifference(5,3); // {sum: 8 , difference :2}
console.log(output4);


//Anonymous function 

let x = function() {
    console.log("Hi This is Anonymous function");
}
x();


//Immediately invoke function Self Invoke
(function invoke() {
    console.log("Abhi");
})();

// Function Expressions