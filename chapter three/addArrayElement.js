// 3 way to add array element

// Push method

let arrayPushOne = [1,2,3,4,5];
arrayPushOne[arrayPushOne.length] =6;
console.log(arrayPushOne);

arrayPushOne.push(7,8,9);
console.log(arrayPushOne);

let arrayPushTwo = [3,45,3,234];
arrayPushOne.push(...arrayPushTwo);
console.log(arrayPushOne)

// use push method in classic
// Array.prototype.push.apply(arrayPushOne,arrayPushTwo);
// console.log(arrayPushOne)


// Add Element in the beginning
// Unshift Method

let arrayUnshiftOne = [3,2,5,3,4];
console.log(arrayUnshiftOne);
arrayUnshiftOne.unshift('One','Two');
console.log(arrayUnshiftOne);

let arrayUnshiftTwo = [5,5,5,5];
arrayUnshiftOne.unshift(...arrayUnshiftTwo);
console.log(arrayUnshiftOne);

// Classic way to use unshift
// Array.prototype.unshift.apply(arrayUnshiftOne,arrayUnshiftTwo);

// console.log(arrayUnshiftOne);

// Add element inside array in the middle
// Splice method

let arrayOne = [1,2,3,6,7,8,9];
console.log(arrayOne);
arrayOne.splice(3,0,4,5);
console.log(arrayOne);
