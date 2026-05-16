var v;
var browser = "chrome";
var browser = "firefox";// redeclaring the variable with var keyword is allowed and it will override the previous value
browser = "edge";// reassigning the variable without var keyword is also allowed and it will override the previous value
console.log(browser);
var test= ["login", "logout","signup"];
for(var i=0; i<test.length; i++)
{
console.log("Running test for", test[i]);
    
}
console.log("test leaked ", i);//i is accessible outside the loop because var has function scope and not block scope
function test() // can be called multiple times and can be redeclared
{
    console.log("This is a test function");

}
test();
test();
// Let conept
let l;
let browser1 = "chrome";   
let browser1 = "firefox";// redeclaring the variable with let keyword is not allowed and it will throw an error 
console.log(browser1);// will not execute because of the syntax error in the previous line


//const concept
const c = 10;
c=20;// reassigning the value of a constant variable is not allowed and it will throw an error
console.log(c);// will not execute because of the error in the previous line    