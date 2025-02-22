// Strings in JAVA.. 

let first_name = "Unknown"
let last_name = "Gem"
// concat() 
let concate_name = first_name.concat(" ",last_name); 

// console.log(concate_name);

// String interpolation concept..
// console.log(`Hello my name is ${concate_name}.`)


// You can also initialize String using object, so that you can use key-value features..

let a = new String("  Hello  ")
// console.log(a)

// console.log(a[0])
// console.log(a.__proto__) // .__proto__ is used to view prototype..

console.log(a.length)  // Remember in Java there is .length() <-- brackets , but in JS .length <-- no brackets. 
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.charAt(1))
console.log(a.indexOf('e')) // To get index of a character..

console.log(a.substring(0,5)) // it works from 0 to (5-1) .. 
console.log(a.slice(-5,5)) // difference between slice and substring is we can also use negative indexing in slice..
// in above step -5 is treated as 0, because negative changing to positive by -> [length - 5(any -ve number)]  

console.log(a.trim())  // .trim() , just remove all the extra spaces from beginning as well from end..
console.log(a.trimStart()) // use .trimStart() to remove the extra spaces from the start..
console.log(a.trimEnd())  // use .trimEnd() to remove the extra spaces from the start..

console.log(a.replace('ello' , 'ey'))

console.log(a.includes('ello'))
console.log(a.includes('elo'))


let b = "Hello-, How-are-you-?"

console.log(b.split('-')) // returns an object
 