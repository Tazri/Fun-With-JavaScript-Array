// JavaScript factory and constructor pattern

// Constructor Pattern

// create array by array constructor in javascript
const arrayByConOne = new Array();
console.log(arrayByConOne);
arrayByConOne[1] = 34;
console.log(arrayByConOne);

// create array by array constructor and define array range.
const arrayByConTwo = new Array(5);
console.log(arrayByConTwo);
arrayByConTwo[7] = 34;
console.log(arrayByConTwo);


// define array element when creating array.
const arrayByConThree = new Array(34,334,345);
console.log(arrayByConThree);


// Factory Pattern 

const arrayByFacOne = Array();
console.log('fac',arrayByFacOne);
arrayByFacOne[3] = 343;
console.log('Fac',arrayByFacOne);

// Factory pattern and constructor pattern two thing is same just little bit different.
// Factory and constructor pattern both constructor are same.

console.log(arrayByConOne.__proto__.constructor);
console.log(arrayByFacOne.__proto__.constructor);

// Other prove this is>>>

console.log(arrayByConOne.__proto__.constructor == arrayByFacOne.__proto__.constructor);