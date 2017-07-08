/*
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
Syntax    arr.reduce(callback[, initialValue])
*/
let total = [0, 1, 2, 3]
let offset = 10
let result = total.reduce(function(sum, value) {
  return sum + value;
}, offset)
console.log("reduce()   " + result)  //16

/*
The join() method joins all elements of an array (or an array-like object) into a string.
Syntax   arr.join()   arr.join(separator)
*/
let name = ["Kostya", "Morenov"]
result = name.join('_')
console.log("join()   " + result)

/*
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
Syntax      var newArray = arr.filter(callback[, thisArg])
*/
var numbers = [5, 10, 11, 20, 21, 95];
var multiples5 = numbers.filter(function(number){
  return number%5 === 0
})
console.log("filter()   " + multiples5)

/*
The concat() method is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.
Syntax   var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
*/
let arr1 = ["New York", "London"]
let arr2 = ["Milan", "Vienna", "Barcelona", "Krakow"]
result = arr1.concat(arr2)
console.log(result)

/*
The sort() method sorts the elements of an array in place and returns the array.
Syntax   arr.sort()   arr.sort(compareFunction)
*/
arr1 = ["orange", "apple", "cherry", "plum"]
console.log(arr1.sort())  //[ "apple", "cherry", "orange", "plum" ]

/*
The reverse() method reverses an array in place. 
The first array element becomes the last, and the last array element becomes the first.
Syntax      a.reverse()
*/
console.log(arr1.reverse()) //Array [ "plum", "orange", "cherry", "apple" ]

/*
The slice() method returns a shallow copy of a portion of an array into a new array object selected 
from begin to end (end not included). 
The original array will not be modified.
Syntax      arr.slice()     arr.slice(begin)    arr.slice(begin, end)
*/
console.log(arr1.slice(2, 4)) //Array [ "cherry", "apple" ]

/*
The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
Syntax      array.splice(start)        array.splice(start, deleteCount)     
array.splice(start, deleteCount, item1, item2, ...)
*/
console.log(arr1.splice(1,3))  //Array [ "orange", "cherry", "apple" ]

/*
The map() method creates a new array with the results of calling a provided function
 on every element in the calling array.
 Syntax     var new_array = arr.map(function callback(currentValue, index, array) {
    // Return element for new_array
}[, thisArg])
*/
arr1 = ["money", "pear", "palm"]
console.log(arr1.map(function(x) {
   return x + "-tree";
}))     //Array [ "money-tree", "pear-tree", "palm-tree" ]

/*
The find() method returns the value of the first element in the array that satisfies the provided testing function. 
Otherwise undefined is returned.
Syntax      arr.find(callback[, thisArg])
*/
function isBigEnough(element) {
  return element >= 15;
}
console.log([12, 5, 15, 130, 44, 1523].find(isBigEnough))  //15