// Variables --> Containers

const n = "Sam" // To declare constants in js, we use 'const' keyword
 
var a = "Hello"  
let b = "Bye"  /* var and let both are used to store value that is changeable, but 
                  var is not widely used in current projects..
                  because var is scopeless..
                  So, we always prefer to use --> 'let'
*/

console.log(n);

console.log(b);
b = "Hello" // 'let' can be changeable..
console.log(b);


// DataTypes in JS:

// In js there are two types of DataType --> (i) Premitive , (ii) Non - premitive

// (i) Premitive are:-

let x = 34 // number
let bigX = 4768723687 // bigint
let y = "name" // string
let isLoggedIn = true // boolean
let temperature = null // null --> standalone value
let later; // undifined
// Last is -> symbol, which is used for uniqueness, specially in devlopment libraries like react.. 

// (ii) Non - premitive 

// object , we studied about the object datatype later in details.. 