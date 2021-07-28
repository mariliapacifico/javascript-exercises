/* assignment 3
- recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3' */

const percentageOfWorld3 = population => (population / 7900) * 100;

const percBrazil = percentageOfWorld3(211);
const percSpain = percentageOfWorld3(47);
const percCanada = percentageOfWorld3(37);

console.log(percBrazil, percSpain, percCanada);