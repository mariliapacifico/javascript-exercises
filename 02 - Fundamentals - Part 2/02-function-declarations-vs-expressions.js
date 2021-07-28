/* assignment 2 
- the world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
- to calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
- call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
- create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations) */ 

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageofWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percBrazil = percentageOfWorld1(211);
const percSpain = percentageOfWorld1(47);
const percCanada = percentageOfWorld1(37);

console.log(percBrazil, percSpain, percCanada);