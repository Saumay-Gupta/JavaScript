let myDate = new Date() 

// console.log(typeof myDate) // output --> object

// console.log(myDate) // output --> 2025-02-23T05:37:30.742Z

// console.log(myDate.toString())  // output --> Sun Feb 23 2025 11:07:30 GMT+0530 (India Standard Time)
  
// console.log(myDate.toUTCString()) // output --> Sun, 23 Feb 2025 05:41:11 GMT

// console.log(myDate.toDateString())  // output -->  Sun Feb 23 2025

// console.log(myDate.toTimeString()) // output -->  11:08:39 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString()) // output --> 23/2/2025, 11:17:54 am

// console.log(myDate.toLocaleDateString()) // output --> 23/2/2025

// console.log(myDate.toLocaleTimeString()) // output --> 11:10:06 am

console.log(myDate.getDate()) // output--> 23
console.log(myDate.getMonth() +1 ) // output--> 2
console.log(myDate.getFullYear()) // output--> 2025
console.log(myDate.getDay()) // output--> 0
console.log(myDate.getHours()) // output--> 11
console.log(myDate.getMinutes()) // output--> 28


// let mycreatedDate = new Date(2024, 1, 19,5,4)
// console.log(mycreatedDate.toLocaleString()) // output --> 19/2/2024, 5:04:00 am

// let mycreatedDate2 = new Date("2024-02-19")
// console.log(mycreatedDate2.toLocaleDateString()) // output --> 19/2/2024
 
// let myTimeStamp = Date.now() // Used to compare timestamps, in projects hotel room booking and many others..
// console.log(myTimeStamp) // output --> 1740290108758 , calculate in milliseconds from 1 Jan 1970

// console.log(mycreatedDate.getTime()) // output --> 1708299240000


