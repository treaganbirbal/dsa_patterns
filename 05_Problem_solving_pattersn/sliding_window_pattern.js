//Write a function called maxSubarraySum which accepts an array of integers and a number called n.  The function should calculate the maximum sum of n consecutive elements in the array.

const maxSubarraySum = (arr, n) => {
    if(arr.length < n){
        return null;
    }
    return
}

let arr1 = [1, 2, 5, 2, 8, 1, 5]
let arr2 = [4, 2, 1, 6]
let arr3 = []

console.log(maxSubarraySum(arr1, 2)); // => 10
console.log(maxSubarraySum(arr1, 4)); // => 17
console.log(maxSubarraySum(arr2, 1)); // => 6
console.log(maxSubarraySum(arr2, 4)); // => 13
console.log(maxSubarraySum(arr3, 4)); // => null