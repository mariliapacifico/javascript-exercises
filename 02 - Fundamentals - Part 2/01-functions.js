/* assignment 1
- write a function called "describeCountry" which takes three parameters: "country", "population" and "capitalCity". based on this input, the function returns a string with this format: "Finland has 6 million people and its capital city is Helsinki"
- call this function 3 times, with input data for 3 different countries. store the returned values in 3 different variables, and log them to the console. */

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descBrazil = describeCountry("Brazil", 211, "Brasília");
console.log(descBrazil);

const descSpain = describeCountry("Spain", 47, "Madrid");
console.log(descSpain);

const descCanada = describeCountry("Canada", 37,"Ottawa");
console.log(descCanada);

// I could also log all variables to the console: console.log(descBrazil, descEspanha, descCanada).