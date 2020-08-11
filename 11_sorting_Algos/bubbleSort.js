//a sorting algorithm wheere the largest values bubble up to the top

//define a function called bubbleSort that takes in an array of numbers and sorts them in place

function bubbleSort(arr) {
  //check if swap has been done to avoid extra passes
  let noSwap;
  //loop from array with a variable i  from end of array towards beginning
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwap = true;
    //loop with the variable j from the beginning of array until i - 1
    for (let j = 0; j <= i - 1; j++) {
      //if arr[j] is greater than arr[j + 1], swap those two values
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        swap(arr, j, j + 1);
      }
    }
    if (noSwap) break;
  }
  //return the sorted array.
  return arr;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}
let array = [6345, 2, 37, 19, 44, 2, 4, 18, 1];
console.log(bubbleSort(array));
