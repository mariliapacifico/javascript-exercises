/* assignment 4
- create a function called 'describePopulation'. Use the function type you like the most. this function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
- to calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
- call 'describePopulation' with data for 3 countries of your choice */

const percentageofWorld = function (population) {
    return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
    const percentage = percentageofWorld(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

console.log(describePopulation("Brazil", 211), describePopulation("Spain", 47), describePopulation("Canada", 37));