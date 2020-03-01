//Write a function called sumZero which accepts a sorted array of integers.  the function shoudl find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr){
    if(!arr.length){
        return undefined;
    }
    let output = [];
    for(let i = 0; i < arr.length; i++){
        let pointer1 = arr[i];
        let pointer2 = arr[i+1];
        console.log(pointer1 + pointer2)
    }
    return undefined;
}

const arr1 = [-3, 3, -2, -1, 0] //=> [-3, 3]
const arr2 = [3, 2, -2,-3] // => [2, -2]
const arr3 = [2, 3, 5, -4] // => undefined

console.log(sumZero(arr1));
console.log(sumZero(arr2));
console.log(sumZero(arr3));