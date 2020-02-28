//write a function called same that accepts 2 arrays.The function should return true if every value in first arrray has its corresponding squared value in the second array.  The frequency of value must remain the same.

function same(array1, array2){
    if(array1.length !== array2.length){
        return false;
    }
    for(let i = 0; i < array1.length; i++){
        let correctIndex = array2.indexOf(array1[i]**2)
        if(correctIndex === -1){
            return false;
        }
        array1.splice(correctIndex, 1)
    }
    return true;
}

let arr1 = [2, 2, 3, 4]
let arr2 = [4, 9, 4, 16]
let arr3 = [1, 4, 5, 16]
let arr4 = [4, 4, 9, 16, 17];

console.log(same(arr1, arr2));