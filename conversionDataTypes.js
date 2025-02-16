let a = "34"
console.log(typeof a)

let ca = Number(a)

let b = "34abc"

let cb = Number(b) // Not going to through any error, even if you check the typeof "cb" then it will be a Number..
                   // But the output is NaN(i.e Not an Number).
console.log(typeof cb)
console.log(cb)   

let c = true

let cc = Number(c)
console.log(c)

// To Number --
// "34" => 34
// "34abc" or "saifsinf" => NaN
// true => 1 ; false => 0
// null => 0
// undefined => NaN


// let x = 34
x = 0

let cx = Boolean(x)
console.log(cx) 


// let y = ""
y = "abc"

let cy = Boolean(y)
console.log(cy)

// To Boolean --
// "" => false ; "abc" => true
// 0 => false ; 233 or [1-any number] => true

let s = 34

let cs = String(s)
console.log(typeof cs) // o/p -> string