//a sorting algorithm wheere the largest values bubble up to the top

//define a function called bubbleSort that takes in an array of numbers and sorts them in place

function bubbleSort(arr) {}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr
}

console.log(swap([1, 2], 0, 1));
