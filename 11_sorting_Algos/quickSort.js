//Like mergeSort, QuickSort exploits the fact that array with one or zero elements are already sorted
//Works by selecting one element('pivot') and finding the index where the pivot should end up in the sorted array
//Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

//call the pivot helper on the array
//when the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that idx
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIdx - 1);
    //right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

//pivot helper/partition
//in order to implement quickSort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot.
//Given an array, this helper function should designate an element as the pivot
//It should then rearrange the elements in the array so that all values less than the pivot are moved to the left of the pivot, all values greater than the pivot are moved to the right of the pivot
//The order of elements on either side of picot doesnt matter
//The help should arrange in place, it should not create a new array
//When complete, the helpers should return the index of the pivot

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  console.log(arr);
  return swapIdx;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
