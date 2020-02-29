//write a function called same that accepts 2 arrays.The function should return true if every value in first arrray has its corresponding squared value in the second array.  The frequency of value must remain the same.
//------naive approach
// function same(array1, array2){
//     if(array1.length !== array2.length){
//         return false;
//     }
//     for(let i = 0; i < array1.length; i++){
//         let correctIndex = array2.indexOf(array1[i]**2)
//         if(correctIndex === -1){
//             return false;
//         }
//         array1.splice(correctIndex, 1)
//     }
//     return true;
// }

//---------o(n)

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

// let arr1 = [2, 2, 3, 4]
// let arr2 = [4, 9, 4, 16]
// let arr3 = [1, 4, 5, 16]
// let arr4 = [4, 4, 9, 16, 17];

// console.log(same(arr1, arr3));

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



let firstStr = 'icemannnn';
let secondStr = 'cinnnnema';
let thirdStr = 'niceman';
let forthStr = 'icefan';

console.log(validAnagram(firstStr, secondStr));