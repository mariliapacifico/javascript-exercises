/* assignment 11
- if your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average"; otherwise, simply log "Portugal's population is below average" - notice how only one word changes between these two sentences */

const population = 211;

const average = population > 33 ? "Brazil's population is above average." : "Brazil's population is below average";
console.log(average);

// another way to do it:
/* 
console.log(
    `${country}'s population is ${population > 33 ? "above" : "below"} average.`
); 
*/ 