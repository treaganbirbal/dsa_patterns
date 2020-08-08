//Write a function called sumZero which accepts a sorted array of integers.  the function shoudl find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
//---O(n^2) solution----

function sumZero(arr) {
  if (!arr.length) {
    return undefined;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

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

const arr1 = [-3, -2, -1, 0, 3]; //=> [-3, 3]
const arr2 = [-3, -1, 0, 1, 2, 4]; // => [-1, 1]
const arr3 = [-4, -3, -2, -1, 0, 1, 2, 5]; // => [-2, 2]

console.log(sumZero(arr1));
console.log(sumZero(arr2));
console.log(sumZero(arr3));

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

// function areThereDuplicates(...args){
//     args.sort()
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

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
//   }

// console.log(areThereDuplicates(1, 2, 3)) //=> false;
// console.log(areThereDuplicates(1, 2, 2)) //=> true;
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // => true;

//Write a function called averagePair.  Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.  There may be more than one pair that mathces the average target.
//constraints: time-O(n), space-O(1)

// function averagePair(arr, target){
//     if(arr.length < target){
//         return false;
//     }
//     let sum = 0;
//     let start = 0;
//     let end = arr.length - 1;
//     while(start < end){
//         let average = (arr[start] + arr[end])/2;
//         if(average === target){
//             return true;
//         }
//         else if(average < target){
//             start++
//         } else {
//             end--
//         }
//     }
//     return false;
// }
// let arr1 = [1,2,3];
// let arr2 = [1,3,3,5,6,7,10,12,19]
// let arr3 = [-1, 0, 3, 4, 5, 6];
// let arr4 = [];

// console.log(averagePair(arr1, 2.5)) // => true;
// console.log(averagePair(arr2, 8)) // => true;
// console.log(averagePair(arr3, 4.1)) // => false;
// console.log(averagePair(arr1, 4)) // => false;

//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the character in the first string appears somewhere in the second sring, without their order changing.

// function isSubsequence(str1, str2){
//     let i = 0;
//     let j = 0;
//     if(!str1.length){
//         return true;
//     }
//     while( j < str2.length){
//         if(str2[j] === str1[i]) i++;
//         if(i === str1.length) return true;
//         j++
//     }
//     return false;
// }

// console.log(isSubsequence('hello', 'hello world')) // => true;
// console.log(isSubsequence('sing', 'sting')) // => true;
// console.log(isSubsequence('abc', 'abracadabra')) // => true;
// console.log(isSubsequence('abc', 'acb')) // => false;
