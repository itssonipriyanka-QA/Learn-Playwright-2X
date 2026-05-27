// undefined: declared but not assigned
let a;
console.log(a); // undefined

// null: explicitly set to "nothing"
let b = null;
console.log(b); // null

// typeof
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical bug)

// comparison
console.log(null == undefined);  // true  (loose)
console.log(null === undefined); // false (strict)
