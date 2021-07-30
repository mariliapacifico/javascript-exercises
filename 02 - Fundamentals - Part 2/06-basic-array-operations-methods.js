/* assignment 6
- create an array containing all the neighbouring countries of a country of your choice. choose a country which has at least 2 or 3 neighbours. store the array into a variable called 'neighbours'
- at some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. so add it to the end of the 'neighbours' array
- unfortunately, after some time, the new country is dissolved. so remove it from the end of the array
- if the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
- change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. for example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden */ 

const neighbours = ["Brazil", "Colombia", "Argentina", "Peru"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();

if (!neighbours.includes("Germany")) {
    console.log("Probably not a Central European country :D"); 
}

neighbours[neighbours.indexOf("Brazil")] = "Federative Republic of Brazil";
console.log(neighbours);