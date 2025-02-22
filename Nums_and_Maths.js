// let a = 400;

// // You can also declare/initialze a number by using object..
// let b = new Number(100);

// console.log(a.toString()) // just convert a number datatype to string datatype..

// let c = 4/3
// console.log(c) // As, c results/output the value - 1.333333333
// // but we want to fixed it for at a particular value after point 
// // then, we use .toFixed()

// console.log(c.toFixed(2)) // it fixed for two value after point...


// let money = 100000
// console.log(money.toLocaleString()) // Basically it automatically addup the commas --> ',' where it is required,
// // Generally it behaves as per the US standards but sometimes as per Indian Standards..
// console.log(money.toLocaleString('en-IN')) // 'en-IN', denotes Indian Standards..  
// console.log(money.toLocaleString('en-US')) // 'en-US', denotes US Standards..


// let max_a = Number.MAX_VALUE
// let min_a = Number.MIN_VALUE
// console.log(max_a)
// console.log(min_a)


// *************************** Maths ***********************

// let num = -4

// console.log(Math.abs(num)) // any negative number to positive

// console.log(Math.round(4.4)) // return 4
// console.log(Math.round(4.5)) // returns 5

// console.log(Math.ceil(4.2)) // return 5, as Math.ceil() always return ceil value
// console.log(Math.floor(4.6)) // return 4, as Math.floor() always return floor value

// console.log(Math.pow(3,4))
// console.log(Math.sqrt(25))


// To Generate Random Number, we use..

console.log(Math.random()) // but it always range between 0 - 1 ..
// To get value more than 1, we need to multiply it by 10 to move pointer a step head and then add 1 to make sure the value more than 1..
console.log((Math.random()*10)+1)
// Now at last, use Math.floor()
console.log((Math.floor(Math.random()*10)+1))

