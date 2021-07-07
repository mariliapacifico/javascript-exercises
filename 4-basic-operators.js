/* assignment 4
- if your country split in half, and each half would contain half of the population, then how many people would live in each half?
- increase the population of your country by 1 and log the result to the console;
- Finland has a population of 6 million; does your country have more people than Finland?
- the average population of a country is 33 million people; does your country have less people than the average?
- based on the variables you created, create a 'description' which contains a string with this format: "Portugal is in Europe and its 11 million people speak portuguese." */

const country = "Brazil";
const continent = "South America"
const population = 211; 
const language = "portuguese";
// variables above were declared on assignment 1 through 3; repeating here so then we don't have an error.


console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description = country + " is in " + continent + " and its " + population + " million people speak " + language;
console.log(description);