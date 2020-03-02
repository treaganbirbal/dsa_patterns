//Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located, if the value is not found, return -1

//----O(n) solution---
// const search = (arr, searchNum) => {
//     for(let i = 0; i < arr.length; i++){
//         if(searchNum === arr[i]){
//             return i
//         }
//     }
//     return -1
// }

const search = (arr, value) => {
    let min = 0; 
    let max = arr.length - 1
    
    while(min <= max){
        let middle = Math.floor((min + max) / 2);
        let currentEl = arr[middle];

        if(arr[middle] < value){
            min = middle + 1;
        } else if( arr[middle] > value){
            max = middle -1
        } else {
            return middle;
        }
    }
    return -1
}

let arr1 = [1,2,3,4,5,6];

console.log(search(arr1, 4)) // => 3 
console.log(search(arr1, 6)) // => 5 
console.log(search(arr1, 10)) // => -1 