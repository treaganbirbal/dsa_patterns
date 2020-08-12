//Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

//create a function selectionSort that takes in an arr
function selectionSort(arr) {
  //stores the first element as the smallest value seen so far
  //compare this item to the next item in the array until a smaller number is found
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if(i !== min){
    swap(arr, min, i);
    }
  }
  //if smaller number is found, new number is new minimum and continue until the end of the array
  //if the minimum is not the value(indx) you initially began with swap the two values.
  //repeat this with the next element until the array is sorted
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}

console.log(selectionSort([13, 5, 12, 100, -3, 54, 8]));
