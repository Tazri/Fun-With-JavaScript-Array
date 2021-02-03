// How to slice method work?

// Slice cut the array in immutable way and return the another array.
let arrayOne = [1,2,3,4,5,6,7];
let slicedArray = arrayOne.slice(1,4);
console.log(slicedArray);


// We can clone array by using slice method

let arrayTwo = arrayOne;
let cloneArray = arrayOne.slice();
console.log(cloneArray);
console.log(arrayTwo);

console.log(arrayTwo === arrayOne);
console.log(arrayOne === cloneArray);


// We can convert arguments to array using slice method

function toArray(){
    return Array.prototype.slice.call(arguments);
}

let argArray = toArray(2,3,54,'Dlkj');
console.log(argArray);