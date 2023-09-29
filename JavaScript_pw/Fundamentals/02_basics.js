// Conditions and Loops

let age = 17;
if(age >= 18) {
    console.log("You are allowed ");
}
else {
    console.log("not allowed");
}

let signal = "yellow";
if(signal == "red") {
    console.log("Red => STOP");
}
else if (signal == "yellow") {
    console.log("Go slow");
}
else {
    console.log("Green Signal");
}


//Switch case


 let user = "Sudent"
 switch(user) {
     case "Admin":
        console.log("He is admin");
         break;

    case "Student" :
             console.log("he is student");
            break;
    case "Mentor":
        console.log("Mentor");
         break;
     default :
    console.log(" i am default");
 }


//  loops

// for loop
for(let i=1;i<5;i++) {
    console.log(i);
}

// while loop
// Initialization ,condition, increm/decre
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}

// do while
// run atleast once

let j = 0;
do {
    console.log("Hello World");
    j++;
}
while (j < 5);

// Ternary Operator
// Codition ? True  : false

isloggedin = true;
isloggedin ? console.log("Home page") : console.log("log in page");