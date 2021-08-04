/* assignment 9
- add a method called 'describe' to the 'myCountry' object. this method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
- call the 'describe' method
- add a method called 'checkIsland' to the 'myCountry' object. this method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. use the ternary operator to set the property. */

const myCountry = {
    country: "Brazil",
    capital: "Brasilia",
    language: "Portuguese",
    population: 211,
    neighbours: ["Colombia", "Argentina", "Peru"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        console.log(this.isIsland = this.neighbours.length === 0 ? true : false);
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);