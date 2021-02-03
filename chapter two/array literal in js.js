// Array literal in javascript

// This is simple array literal.
const array = [];

// Assign a value in array literal. 
console.log(array.length)
array[0] = 21;
array[1] = 23;
console.log(array);
console.log(array.length);
array[99] = 1000;
console.log(array);
console.log(array.length);
console.log(array[1]);
console.log(array[45]);
console.log(array[34]);


// Assign value in different way in array.

const names = [
    'Md Tazri',
    'Pentm Focasa',
    'Focasa',
    'Pentm',
    'Tazri'
]

console.log(names[names.length-1]);
names[names.length] = 'Unkown Man';
console.log(names);
console.log(names.length);