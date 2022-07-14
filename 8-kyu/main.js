//After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


function rentalCarCost(d) {
    if(d < 3){
      return d*40
    }  if(d >= 3 && d < 7){
      return 40*d - 20
    }if(d >= 7){
      return 40*d - 50
    }
  }


  // Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

  // Examples:
  // 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
  // 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
  // 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
  // 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
  
  function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0 ? true : false
  }  

//   Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}


// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
// number 	price (cents)
// n < 5 	100
// n >= 5 and n < 10 	95
// n >= 10 	90

function saleHotdogs(n){
  return n*(n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90)
}


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
  return x.reduce( (a,b) => a + Number(b),0)
}


// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function find_average(array) {
  return array.length == 0 ? 0 : array.reduce((a,b) => a + b, 0)/array.length 
}

// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
  return this.toUpperCase() == this
}


// Your task is to find the first element of an array that is not consecutive. 

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive (arr) {
  for(let i = 0; i<arr.length-1;i++){
    if(arr[i]+1 !== arr[i+1]){
    return arr[i+1]
  }


}
    return null
} 

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(geeseNames => !geese.includes(geeseNames))
};


// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Notes:

//     If either input is an empty string, consider it as zero.

//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)


function sumStr(a,b) {
  return (+a+ +b)+''  
}


//Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

function nearestSq(n){
  return Math.round(Math.sqrt(n))**2
}


// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let goodCount = x.filter((idea) => idea === 'good').length
  return goodCount < 1
      ? 'Fail!'
      : goodCount < 3
      ? 'Publish!'
      : 'I smell a series!';
}