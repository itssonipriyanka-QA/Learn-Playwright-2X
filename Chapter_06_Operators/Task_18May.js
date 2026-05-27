let a=11;
let b=13;
let max = a > b ? a : b;
console.log(`The maximum number is: ${max}`); // The maximum value is: 3

leta=3;
let b=1;
letc=5;  
let largest=a>b && a>c ?a:b>c && b>a ?b:c>a && c>b ?c:"All numbers are equal";
console.log(`The largest number is: ${  largest}`); // The largest number is: 5

//Operator
let a= 5;
console.log(a++ + ++a - --a + a-- + ++a); // 10 (post-increment: returns the current value, then increments)
console.log(a); // 5 (after the post-increment, a is incremented to 6, but the expression uses the original value of 5)