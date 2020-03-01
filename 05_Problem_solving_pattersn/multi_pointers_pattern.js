//Write a function called sumZero which accepts a sorted array of integers.  the function shoudl find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr){
    if(!arr.length){
        return undefined;
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}

const arr1 = [-3, 3, -2, -1, 0] //=> [-3, 3]
const arr2 = [-3, -1 , 0, 1, 2, 4] // => [-1, 1]
const arr3 = [-4, -3, -2, -1, 0, 1, 2, 5] // => [-2, 2]

console.log(sumZero(arr1));
console.log(sumZero(arr2));
console.log(sumZero(arr3));