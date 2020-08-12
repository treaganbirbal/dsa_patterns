//insertionSort builds up the sort by gradually creating a larger left half which is always sorted

//create a function insertionSort that takes in an array and sorts in place.

//create a function insertionSort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];
      }
    }
  }
  //start by picking the second element in the array
  //compare the second elemnt with the one before it and swap if necessary
  //continue to the next element and if it is in the incorrect order iterate through the sorted portion (left side) to place the elemnt in the correct place.
  //repeat until array is sorted
  //return array
  return arr;
}

console.log(insertionSort([4, 2, 66, 343, 11, 632, 2]));
