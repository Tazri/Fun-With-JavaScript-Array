// Delete Element in array

// Shift Method
// Delete First element.

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,13];
console.log(array);
array.shift();
// console.log(array)


// Pop method
// Delete last element of array

array.pop();
array.pop();
console.log(array);


// Splice method 
// Delete element in middle of the array

console.log("=>",array);
array.splice(2,1);
console.log(array);

// Delete element in middle of the array by value with splice

let deletedValue = 10;
for(let i = 0 ; i < array.length;i++){
    if(array[i] === deletedValue){
        array.splice(i,1);
    }
}
console.log(array);

// Delete element by filter
// Filter can not change real array. It just return another array.
// In that case we reassign target array.
let deletedValueOne = 9;
array = array.filter(element=> deletedValueOne !== element);
console.log(array);

// Delete array element by delete operator.
console.log(array);
array[2] = undefined;
console.log(array);
delete array[2];
console.log(array);

// Reset Array
// Why need reset the array.
let arrayOne = [1,2,3,4,5,6];
let arrayTwo = arrayOne;
arrayOne = [];
console.log(arrayOne);
console.log(arrayTwo);

// How to reset the array?

// reset the array by redefine length;
let arrOne = [1,2,3,4,5];
let arrTwo = arrOne;
console.log(arrOne);
console.log(arrTwo);
arrOne.length = 0;

console.log(arrOne);
console.log(arrTwo);

// alternative way to reset the array
// remove the all element of array by using pop or shift method

let arOne = [1,2,3,4,55];
let arTwo = arOne;
console.log(arOne);
console.log(arTwo);

while(arOne.length) arOne.pop();
console.log(arOne);
console.log(arTwo);