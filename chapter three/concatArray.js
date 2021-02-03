// How to join array or concat array in javascript?

// use concat method to join array.

let arrayOne = [1,2,3,4,5];
let arrayTwo = [6,7,8,9];
let arrayThree = arrayOne.concat(arrayTwo);
console.log(arrayThree);

// Concat method working immutable way so it not change target array.

let arrayFour = [].concat(arrayOne,arrayTwo,24,22,3);
console.log(arrayFour);


// Concat js array by using js 6 syntax

let arrayFive = [...arrayOne,...arrayTwo];
console.log(arrayFive);