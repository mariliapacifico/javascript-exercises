/* assignment 5
- create an array containing 4 population values of 4 countries of your choice. you may use the values you have been using previously. store this array into a variable called "populations"
- log to the console wheter the array has 4 elements or not (true or false)
- create an array called "percentages" containing the percentages of the world population for these 4 population values. use the function "percentageOfWorld1" that you created earlier to compute the 4 percentage values */

const percentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
}

const populations = [211, 47, 37, 50];

console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentages);