//write a function called same that accepts 2 arrays.The function should return true if every value in first arrray has its corresponding squared value in the second array.  The frequency of value must remain the same.
//------naive approach

// function same (array1, array2){
//     if(array1.length !== array2.length){
//         return false;
//     }
//     for(let i = 0; i < array1.length; i++){
//         let correctIdx = array2.indexOf(array1[i]**2)
//             if(correctIdx === -1){
//                 return false;
//             }
//             array1.splice(correctIdx, 1)
//     }
//     return true;
// }


//---------o(n)

function same(array1, array2){
    if(array1.length !== array2.length){
        return false;
    }
    let arr1Map = {}
    let arr2Map = {}
    for(let values of array1){
        arr1Map[values] = (arr1Map[values] || 0) + 1;
    }
    for(let values of array2){
        arr2Map[values] = (arr2Map[values] || 0) + 1;
    }
    for(let key in arr1Map){
        if(!(key ** 2 in arr2Map)){
            return false
        }
    }
    return true;
}

// function same(array1, array2){
//     if(array1.length !== array2.length){
//         return false;
//     }
//     let arr1Map = {};
//     let arr2Map = {};
//     for(let values of array1){
//         arr1Map[values] = (arr1Map[values] || 0) + 1;
//     }
//     for(let values of array2){
//         arr2Map[values] = (arr2Map[values] || 0) + 1;
//     }
//     // console.log(arr1Map)
//     // console.log(arr2Map)
//     for(let key in arr1Map ){
//         if(!(key ** 2 in arr2Map)){
//             return false;
//         }
//         if(arr2Map[key ** 2] !== arr1Map[key]){
//             return false
//         }
//     }
//     return true;
// }

let arr1 = [2, 2, 3, 4]
let arr2 = [4, 9, 4, 16]
let arr3 = [1, 4, 5, 16]
let arr4 = [4, 4, 9, 16, 17];

console.log(same(arr1, arr2));

//Given two strings, write a function, validAnagram, to determine if the second string is an anagram of the first.  An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema & iceman.

//----naive approach

// const validAnagram = (str1, str2) => {
//     if(str1.length !== str2.length){
//         return false
//     }
//      const str1Map = {};
//      const str2Map = {};
//      for(let values of str1){
//          str1Map[values] = (str1Map[values] || 0)+1
//      }
//      for(let values of str2){
//          str2Map[values] = (str2Map[values] || 0)+1
//      }
//      console.log(str1Map, str2Map)
//      for(let keys in str1Map){
//      if(str1Map[keys] === str2Map[keys]){
//         return true;
//      } else {
//          return false;
//      }
//     }
// }

//---more effecient solution----

// const validAnagram = (str1, str2) => {
//     //if the the strings are different length...
//     if(str1.length !== str2.length){
//         //...return false
//         return false;
//     }
//     //create an object to store letters and num of occurances
//     const lookup = {};
//     //loop thru a str to build out lookup object
//     for(let i = 0; i < str1.length; i++){
//         let letter = str1[i];
//          //if letter exists, increment; otherwise set to 1.
//          lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     //loop thru the other str to check if letters exist in obj
//     for(let i = 0; i < str2.length; i++){
//         let letter = str2[i];
//         //cannot find letter or letter is 0 than its not an anagram
//         if(!lookup[letter]){
//             return false
//         } else {
//             lookup[letter]-= 1;
//         }
//     }
//     return true;
// }

// let firstStr = 'icemannnn';
// let secondStr = 'cinnnnema';
// let thirdStr = 'niceman';
// let forthStr = 'icefan';

// console.log(validAnagram(forthStr, thirdStr));

//Write a function called sameFrequencty. Given two positive integers, find out if the two numbers have the same frequency of digits.  
//Your solution MUST have the following complexities: time: O(n)

// function sameFrequency(int1, int2){
//     let int1Str = int1.toString()
//     let int2Str = int2.toString();
//     if(int1Str.length !== int2Str.length){
//         return false;
//     }
//     const frequencyOfInt1 = {};
//     for(let char of int1Str){
//         frequencyOfInt1[char] = (frequencyOfInt1[char] || 0) + 1
//     }
//     const frequencyOfInt2 = {};
//     for(let char of int2Str){
//         frequencyOfInt2[char] = (frequencyOfInt2[char] || 0) + 1
//     }
//     // console.log(frequencyOfInt1, frequencyOfInt2)
//     for(let keys in frequencyOfInt1){
//         if(frequencyOfInt1[keys] === frequencyOfInt2[keys]){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// console.log(sameFrequency(182, 281)) // => true;
// console.log(sameFrequency(34, 14)) // => false;
// console.log(sameFrequency(3589578, 5879385)) // => true;
// console.log(sameFrequency(22, 222)) // => false;

// Implement a function called areThereDuplicates, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 

// function areThereDuplicates(){
//     const collection = {};
//     for(let values in arguments){
//         collection[arguments[values]] = (collection[arguments[values]] || 0) + 1
//     }
//     for(let key in collection){
//         if(collection[key] > 1){
//             return true;
//         }
//     }
//     return false
// }

// console.log(areThereDuplicates(1, 2, 3)) //=> false;
// console.log(areThereDuplicates(1, 2, 2)) //=> true;
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // => true;
