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

// function countUnqiueValues(arr){
//     if(!arr.length){
//         return 0;
//     }
//     let i = 0; 
//     for(let j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i+1
// }

// let arr1 = [1,1,1,1,1,1,2];
// let arr2 = [1,2,3,4,4,4,5,5,12,12,13];
// let arr3 = [];
// let arr4 = [-2, -1, -1, 0, 1];

// console.log(countUnqiueValues(arr1)) // => 2
// console.log(countUnqiueValues(arr2)) // => 7
// console.log(countUnqiueValues(arr3)) // => 0
// console.log(countUnqiueValues(arr4)) // => 4

// Implement a function called areThereDuplicates, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 

// const areThereDuplicates = (...args) => {
//     args.sort((a, b) => a > b)
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//         if(args[start] === args[next]){
//             return true;
//         }
//         start++
//         next++
//     }
//     return false;
// }

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
  

console.log(areThereDuplicates(1, 2, 3)) //=> false;
console.log(areThereDuplicates(1, 2, 2)) //=> true;
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // => true;