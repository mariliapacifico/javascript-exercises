/* assignment 8
- declare a variable "numNeighbours" based on a prompt input like this: "How many neightbour countries does your country have?"
- if there is only 1 neighbour, log to the console "Only 1 border" (use loose equalty == for now)
- use an else-if block to log "More than 1 border" in case "numNeighbours" is greater than 1
- use an else block to log "No borders" - this value will be executed when "numNeighbours" is 0 or any other value
- test the code with different values of 'numNeighbours', including 1 and 0
- change == to ===, and test the code again, with the same values of 'numNeighbours' - notice what happens when there is exactly 1 border! Why 
is this happening?
- finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
- reflect on why we should use the === operator and type conversion in this situation */

const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border!");
} else {
    console.log("No borders!");
}

// when I change from == to === at first, the value becomes false because === is strict and does't convert the string to number
// when I convert the variable to Number, the === works well returning a truthy value
// it's important to use === to prevent bugs and to keep the code clean :) 