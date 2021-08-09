/* assignment 13
- recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
- reflect on what solution you like better for this task: the for loop or the while loop */

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
 }
 
 const populations = [211, 47, 37, 50];
 const percentages3 = [];
 
 let i = 0;
 while(i < populations.length) {
     const perc = percentageOfWorld1(populations[i]);
     percentages3.push(perc);
     i++;
 }
console.log(percentages3);