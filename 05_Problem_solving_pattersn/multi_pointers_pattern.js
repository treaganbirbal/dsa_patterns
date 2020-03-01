//Write a function called sumZero which accepts a sorted array of integers.  the function shoudl find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
//---O(n^2) solution----
// function sumZero(arr){
//     if(!arr.length){
//         return undefined;
//     }
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

//---O(n) Solution---

// const sumZero = (arr) => {
//     if(arr.length <= 1){
//         return undefined;
//     } else {
//         let left = 0;
//         let right = arr.length - 1;
//         while(left < right){
//             let sum = arr[left] + arr[right]
//             if(sum === 0){
//                 return [arr[left], arr[right]]
//             } else if(sum > 0){
//                 right--
//             } else{
//                 left++
//             }
//         }
//     }
// }

// const arr1 = [-3, -2, -1, 0, 3] //=> [-3, 3]
// const arr2 = [-3, -1 , 0, 1, 2, 4] // => [-1, 1]
// const arr3 = [-4, -3, -2, -1, 0, 1, 2, 5] // => [-2, 2]

// console.log(sumZero(arr1));
// console.log(sumZero(arr2));
// console.log(sumZero(arr3));

//Implement a function call countUnqiueValues, which accepts a sorted Array, and counts the unique values in the array.  Tere can be negative numbers in the array, but it will alway be sorted.

