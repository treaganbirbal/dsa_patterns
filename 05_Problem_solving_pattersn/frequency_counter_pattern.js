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

function same(array1, array2){
    if(array1.length !== array2.length){
        return false;
    }
    let arr1Map = {};
    let arr2Map = {};
    for(let values of array1){
        arr1Map[values] = (arr1Map[values] || 0) + 1;
    }
    for(let values of array2){
        arr2Map[values] = (arr2Map[values] || 0) + 1;
    }
    // console.log(arr1Map)
    // console.log(arr2Map)
    for(let key in arr1Map ){
        if(!(key ** 2 in arr2Map)){
            return false;
        }
        if(arr2Map[key ** 2] !== arr1Map[key]){
            return false
        }
    }
    return true;
}

let arr1 = [2, 2, 3, 4]
let arr2 = [4, 9, 4, 16]
let arr3 = [1, 4, 5, 16]
let arr4 = [4, 4, 9, 16, 17];

console.log(same(arr1, arr3));