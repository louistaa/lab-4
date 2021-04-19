'use strict'

function hehe() {
  console.log("hehe")
}

function printStuff(callback) {  
  callback();
}

printStuff(hehe)

// example 2
function isOddNumber(number) {
  return number % 2;
}

// filter returns an array
let numbers = [1, 2, 4, 7, 3, 5, 6];
let oddNumbers = numbers.filter(isOddNumber); // pass by reference
console.log(oddNumbers); // [ 1, 7, 3, 5 ]

// anon function
let oddNumbers2 = numbers.filter(function(number) {
  return number % 2;
});
console.log(oddNumbers2); // [ 1, 7, 3, 5 ]

// es6 arrow syntax
let oddNumbers3 = numbers.filter((number) => number % 2);
console.log(oddNumbers3)