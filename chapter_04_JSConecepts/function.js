var a=10;
console.log(a);//global variable a is accessible outside the function
function test()
{
    var a=20;
    console.log(a);//local variable a is accessible inside the function and it will override the global variable a
}
test();