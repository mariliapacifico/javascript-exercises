/* assignment 12
- store this array of arrays into a variable called 'listOfNeighbours'[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
- log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
- you will need a loop inside a loop for this. this is actually a bit tricky, so don't worry if it's too difficult for you! but you can still try to figure this out anyway :D */ 

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"]
];

for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}