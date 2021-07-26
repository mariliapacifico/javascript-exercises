////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height **  = mass / (height + height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula (you can even implement both versions).
3. Create a boolean variable 'markHigherBMI' containing information about wheter Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.
TEST DATA 2: Marks weights 95kg and is 1.88m tall. John weights 85kg and is 1.78m tall.

GOOD LUCK � 
*/

// TEST 1

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI; 
console.log(markHigherBMI); // true

// TEST 2

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.78;

markBMI = markWeight / (markHeight ** 2);
johnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// using console.log to check the results in the browser console
// if there was only one test, I'd use 'const' to declare the variables;
// I used 'let' because the data were going to change for test 2.