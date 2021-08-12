////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

GOOD LUCK :D 
*/

// a) understand the problem
// - array transformed to string, separated by "..."
// - what is the x days? (answer: array index +1)

// b) break up the problem into sub-problems
// - transform the array into string
// - transform each element to string with Cº
// - string needs to contain day (index + 1)
// - add "..." between elements and start and end of string

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};

console.log(printForecast(temp1));
console.log(printForecast(temp2));
