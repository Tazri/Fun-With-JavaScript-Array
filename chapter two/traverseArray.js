// How to traverse array?


const array = [343,34333,2,3,5,4,3,2,343,2,3,4534,3,34];


for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// How to sumation of all number in the array ?

let sum = 0;

for(let i =  0; i < array.length; i++){
    sum+=array[i];
}

console.log('Sum = ',sum);
console.log('Average = ',sum/array.length);


// Find out largest number in the array ?

let largestNumber = array[0];
for(let i = 1; i < array.length; i++){
    largestNumber = largestNumber > array[i] ? largestNumber : array[i];
}

console.log(largestNumber);