
// let arr2 = [5,6,7,8,'Hello',6] // In JS, array can store elements of different datatypes and array's are resizeable..
// let arr = new Array(1,2,3,4) 

// console.log(arr2)
// console.log(typeof arr2)

// console.log(arr2[0])
// console.log(arr2.length)

// arr2[arr2.length] = 10 
// console.log(arr2)


// Array Methods..

// arr.push(5)
// arr.pop() // remove the last element
// arr.unshift(0) // add the element to the first position..
// arr.shift() // removes the first element

// console.log(arr.includes(4)) // output --> true , if element not present then 'false'..
// console.log(arr.indexOf(3)) // output --> 2 (index of 3) , if element not present then '-1'..

// let newArr = arr.join() // output --> 1,2,3,4 ,, it binds the Array and it converts the Array to String
// console.log(newArr)
// console.log(typeof newArr)

// console.log(arr)


// slice and splice 

// let arr3 = [1,2,4,5,6,7]

// let slice_arr3 = arr3.slice(1,4) // just returns the 'section of an array', from 'start' index to 'end-1' index..
// console.log(slice_arr3)  // output --> [ 2, 4, 5 ]
// // But always remember, there will be no change in the original array after performing slice..
// console.log(arr3) // output --> [ 1, 2, 4, 5, 6, 7 ]

// But in case of splice.. 


// let arr4 = [1,2,4,5,6,7]

// // 1st Difference between slice and splice..                  //  slice wroks from 'start' to 'end-1' index     
// let splice_arr4 = arr4.splice(1,4) // just returns the 'section of an array', from 'start' index to 'end'  index..
// console.log(splice_arr4)  // output --> [ 2, 4, 5, 6]
// // 2nd Difference 
// // Always remember, splice manipulate the original array, by removing the entire section from the original array..
// console.log(arr4) // output --> [ 1, 7 ] ,, removing section --> [ 2, 4, 5, 6]



// let marvel_heores = ['Thor', 'SpiderMan', 'IronMan']

// let dc_heroes = ['SuperMan', 'BatMan', 'Flash']

// marvel_heores.push(dc_heroes)
// console.log(marvel_heores) // output --> [ 'Thor', 'SpiderMan', 'IronMan', [ 'SuperMan', 'BatMan', 'Flash' ] ]
// console.log(marvel_heores[3]) // output -->  [ 'SuperMan', 'BatMan', 'Flash' ]

// let newConcatArr = marvel_heores.concat(dc_heroes) // it doesn't make changes in original array..
// console.log(newConcatArr) // output --> [ 'Thor', 'SpiderMan', 'IronMan', 'SuperMan', 'BatMan', 'Flash' ]
// console.log(newConcatArr[3]) // output --> SuperMan

// // Similarly, we use spread operator ( ... ) , it also merges array's , but majorly use in case of merging more than 2 arrays..

// let newSpreadArr = [...marvel_heores , ...dc_heroes]
// console.log(newSpreadArr) // output --> [ 'Thor', 'SpiderMan', 'IronMan', 'SuperMan', 'BatMan', 'Flash' ]

// let s = "Unknown"
// console.log(Array.from(s)) // Form an array.. output --> ['U', 'n', 'k', 'n', 'o', 'w', 'n']