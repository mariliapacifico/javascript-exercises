/* assignment 11
- let's bring back the 'populations' array from a previous assignment
- use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. use the function 'percentageOfWorld1' that you created earlier
- confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is */

function percentageOfWorld1(population) {
   return (population / 7900) * 100;
}

const populations = [211, 47, 37, 50];
const percentages2 = [];

for(let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);

    percentages2.push(perc);
}

console.log(percentages2);