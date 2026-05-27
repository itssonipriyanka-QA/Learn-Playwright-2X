// trenary operator
let enviornment = "production";
let message = enviornment === "production" ? "Running in production mode" : "Running in development mode";
console.log(message); // Running in production mode 
enviornment = "development";
message = enviornment === "production" ? "Running in production mode" : "Running in development mode";
console.log(message); // Running in development mode    

let condition = true;
let gender= condition ? "male" : "female";
console.log(gender); //

//Nested ternary operator
//Multiple conditions can be handled using nested ternary operators, but it can make the code less readable, so it's generally recommended to use if-else statements for complex conditions.
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade); // B    

let marks=50;
let result = marks >= 90 ? "Excellent" : marks >= 75 ? "Good" : marks >= 60 ? "Pass" : "Fail";
console.log(result); // Fail

// Ternary operator with function calls
let statuscode = 500;
let statusMessage = statuscode < 300 ? "success" : statuscode < 400 ?
 "redirect" : statuscode< 500 ? "client error" :"server error";
console.log(`status ${statusMessage}: ${statuscode}`); // client error

