// assignment operator
let x = 10;
x= 20; // reassigning a new value to x
console.log(x); // 20

// arithmetic operators
let a = 5, b = 3;  
sum = a + b; // addition
difference = a - b; // subtraction
product = a * b; // multiplication
quotient = a / b; // division
console.log(sum); // 8
console.log(difference); // 2                       
console.log(product); // 15
console.log(quotient); // 1.6666666666666667


// modulus operator gives the remainder of the division
remainder = a % b; // modulus
console.log(remainder); // 2

//exponentiation operator
let a=3, b=2;
power = a ** b; // exponentiation
console.log(power); // 125

//compund assignment operators
let c = 10;
c += 5; // c = c + 5
console.log(c); // 15

let a=5;
a -= 2; // a = a - 2
console.log(a); // 3    

let x=3;
x *= 4; // x = x * 4
console.log(x); // 12   

x /= 2; // x = x / 2
console.log(x); // 6    

x%=2; // x = x % 2
console.log(x); // 0    
 

// comparison operators
let m = 10, n = 20;
console.log(m > n); // false
console.log(m < n); // true
console.log(m >= n);

console.log(m <= n); // true
console.log(m == n); // false (loose equality)
console.log(m === n);

console.log(0=="") // true (loose equality)
console.log(0=== "") // false (strict equality) 
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality) 
console.log("" == 0); // true (loose equality)
console.log("" === 0); // false (strict equality)
console.log("" === "0"); // false (strict equality)


console.log(false == 0); // true (loose equality)
console.log(false === 0); // false (strict equality)


// ============================================================
// CONFUSING == vs === CASES
// ============================================================

// --- 1. Falsy values that equal each other with == ---
console.log(false == 0);       // true  — boolean coerced to number (0)
console.log(false == "");      // true  — both coerce to 0
console.log(false == "0");     // false — "0" is truthy string, coerces to 0 but false→0 == "0"→0 ... wait:
//   Actually: false→0, "0"→0, so 0==0 → true
console.log(false == "0");     // true  (surprising!)
console.log(false === 0);      // false — different types
console.log(false === "");     // false — different types
console.log(false === "0");    // false — different types

// --- 2. null and undefined ---
console.log(null == undefined);  // true  — special rule in JS spec
console.log(null === undefined); // false — different types
console.log(null == 0);          // false — null only == null/undefined
console.log(null == false);      // false — null only == null/undefined
console.log(null == "");         // false — null only == null/undefined

// --- 3. NaN — never equal to anything, even itself ---
console.log(NaN == NaN);   // false — NaN is not equal to NaN
console.log(NaN === NaN);  // false — same result
console.log(NaN == false); // false
console.log(NaN == 0);     // false

// --- 4. Empty string vs zero vs false ---
console.log("" == 0);     // true  — "" converts to 0
console.log("" === 0);    // false — different types
console.log("" == false); // true  — both coerce to 0
console.log("" === false);// false — different types
console.log("0" == 0);    // true  — "0" converts to 0
console.log("0" === 0);   // false — different types
console.log("0" == false);// true  — "0"→0, false→0
console.log("0" === false);// false — different types

// --- 5. Arrays and objects (reference vs coercion) ---
console.log([] == false);  // true  — [] → "" → 0, false → 0
console.log([] === false); // false — different types
console.log([] == 0);      // true  — [] → "" → 0
console.log([] === 0);     // false
console.log([] == "");     // true  — [] → ""
console.log([] === "");    // false
console.log([0] == false); // true  — [0] → "0" → 0, false → 0
console.log([0] === false);// false
console.log([] == []);     // false — different object references
console.log([] === []);    // false — different object references
console.log({} == {});     // false — different object references
console.log({} === {});    // false — different object references

// --- 6. Number strings vs numbers ---
console.log("1" == 1);    // true  — string coerced to number
console.log("1" === 1);   // false — different types
console.log(" 1 " == 1);  // true  — whitespace trimmed, then coerced
console.log(" 1 " === 1); // false — different types
console.log("01" == 1);   // true  — leading zero removed in coercion
console.log("01" === 1);  // false — different types

// --- 7. Boolean coercion surprises ---
console.log(true == 1);   // true  — true → 1
console.log(true === 1);  // false — different types
console.log(true == "1"); // true  — true→1, "1"→1
console.log(true === "1");// false — different types
console.log(true == 2);   // false — true→1, 1 != 2
console.log(true == "2"); // false — true→1, "2"→2, 1 != 2

// --- 8. null vs 0 / false ---
console.log(null == 0);     // false — null only loosely equals undefined
console.log(null == false); // false — null only loosely equals undefined
console.log(null >= 0);     // true  — relational operators DO coerce null to 0!
console.log(null > 0);      // false
console.log(null <= 0);     // true
// This means: null >= 0 is true AND null == 0 is false — very confusing!

// --- 9. undefined coercion ---
console.log(undefined == 0);     // false
console.log(undefined == false); // false
console.log(undefined == null);  // true — the only loose equality for undefined
console.log(undefined + 1);      // NaN — undefined coerces to NaN in math

// --- SUMMARY: always use === to avoid all the above surprises ---