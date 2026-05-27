//pre incremant operator (++) is used to increment the value of a variable by 1 before it is used in an expression. In this example, we have a variable 'a' initialized to 10. When we use the pre-increment operator (++a), it increments the value of 'a' by 1, making it 11, and then assigns this new value to 'b'. Therefore, both 'a' and 'b' will have the value of 11 after the operation.
let a=10;
let b=++a; //increment a by 1 and then assign the value to b

console.log('value of a:', a); // 11
console.log('value of b:', b); // 11

//Post increment operator (a++) is used to increment the value of a variable by 1 after it is used in an expression. In this example, we have a variable 'x' initialized to 5. When we use the post-increment operator (x++), it first assigns the current value of 'x' (which is 5) to 'y', and then increments 'x' by 1, making it 6. Therefore, 'y' will have the value of 5, while 'x' will have the value of 6 after the operation.let x=5;
let x=5;
let y=x++; //assign the value of x to y and then increment x by 1

console.log('value of x:', x); // 6
console.log('value of y:', y); // 5

//pre decrement operator (--) is used to decrement the value of a variable by 1 before it is used in an expression. In this example, we have a variable 'm' initialized to 20. When we use the pre-decrement operator (--m), it decrements the value of 'm' by 1, making it 19, and then assigns this new value to 'n'. Therefore, both 'm' and 'n' will have the value of 19 after the operation.
let m=20;
let n=--m; //decrement m by 1 and then assign the value to n            
console.log('value of m:', m); // 19
console.log('value of n:', n); // 19

//post decrement operator (a--) is used to decrement the value of a variable by 1 after it is used in an expression. In this example, we have a variable 'p' initialized to 15. When we use the post-decrement operator (p--), it first assigns the current value of 'p' (which is 15) to 'q', and then decrements 'p' by 1, making it 14. Therefore, 'q' will have the value of 15, while 'p' will have the value of 14 after the operation.
let p=15;
let q=p--; //assign the value of p to q and then decrement p by 1       
console.log('value of p:', p); // 14
console.log('value of q:', q); // 15

let a=10;
console.log(a++ + ++a); // 10 (post-increment: returns the current value, then increments)

let a=10;
console.log(++a + ++a);