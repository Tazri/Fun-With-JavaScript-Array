// Array of everything in javascript


// Array of object :

let objectOfArray = [
    {name:'Md Tazri',phone: '0101010'},
    {name:'Pentm Focasa',phone:'Unknow'},
    {name:'Focasa',phone:'Unknow Again'}
]
console.log(objectOfArray);
// Array of function

let sum = (a,b) => a+b;
let diff = (a,b) => a-b;
let multi = (a,b) => a*b;
let div = (a,b) => a/b;
let mod = (a,b) => a%b;

let functionOfArray = [ sum,diff,multi,div,mod];
console.log(functionOfArray);

let numOne = 10;
let numTwo = 20;

for(let i = 0; i<functionOfArray.length;i++){
    console.log(`${functionOfArray[i].name} ${functionOfArray[i](numOne,numTwo)}`)
}

// multi dimentional array

// One dimentional array.
let oneDimentionalArray = [2,34,3,3,2,3];

// Two dimentional array.
let twoDimentionalArray = [[3,2],[3,3],[3,4]]

// Traverse tow dimentional array.

for(let i = 0; i < twoDimentionalArray.length;i++){
    for(let j = 0; j < twoDimentionalArray[i].length;j++){
        console.log(`${i} ${j} => ${twoDimentionalArray[i][j]}`)
    }
}


// Sumation of Matrix in JavaScript

let matrixOne = [
    [1,3],
    [2,4],
    [2,4]
]

let matrixTwo = [
    [2,3],
    [3,5],
    [3,5]
]

function sumOfMatrix(matrixOne,matrixTwo){
    let result = []
    for(let i = 0;i < matrixOne.length;i++){
        let row = [];
        for(let j = 0; j< matrixOne[i].length;j++){
            row.push(matrixOne[i][j]+matrixTwo[i][j]);
        }
        result.push(row);
    }
    return result
}


console.log(matrixOne);
console.log(matrixTwo);
let sumOfMatrixResult = sumOfMatrix(matrixOne,matrixTwo);
console.log(sumOfMatrixResult);