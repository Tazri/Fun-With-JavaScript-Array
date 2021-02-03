// Updated array element>>>


// Fill Array
let arrayOne = new Array(10);

for(let i = 0; i < arrayOne.length; i++){
    arrayOne[i] = 0;
}

console.log(arrayOne);

// Fill Array By Method:

let arrayTwo = new Array(9);
arrayTwo.fill(false);
console.log(arrayTwo);

// Update array :

let nameOfArray = [
    'Md Tazri',
    'Tazri',
    'Pentm Focasa',
    'Focasa'
]

console.log(nameOfArray);

for(let i = 0; i < nameOfArray.length; i++){
    nameOfArray[i] = `${i+1}: ${nameOfArray[i]}`
}

console.log(nameOfArray);

// Computed Fill Array;

let ticArray = new Array(9);

for(let i = 0; i < ticArray.length; i++){
    let rand = Math.floor(Math.random()*10+1);
    ticArray[i] = rand < 6 ? 'X':'O';
}

console.log(ticArray);


// Array is mutable in JavaScript.

let arrayfour = [];
let arrayThree = [];
console.log(arrayfour === arrayThree);

function updateArray(arr){
    return arr.fill(false);
}


let updatedArray = updateArray(arrayOne);
console.log(updatedArray);
console.log(arrayOne);
console.log(updatedArray == arrayOne);