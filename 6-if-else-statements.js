/* assignment 6
if your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is above average";
otherwise, log a string like "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population)
after checking the result, change the population temporarily to 13 and then to 130 - see the different results and set the population back to the original */

const country = "Brazil";
const population = 13;

if (population > 33) {
    console.log(`${country}'s population is above average.`)
} else { 
    const belowAverage = 33 - population;
    console.log(`${country}'s population is ${belowAverage} million below average.`)
}

// if I set the population to 13, the console shows the message: "Brazil's population is 20 million below average".
// if I set the population to 130, the console shows the message: "Brazil's population is above average".

// :) 