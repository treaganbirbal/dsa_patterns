//Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

function selectionSort(arr) {}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}

console.log(swap([1, 2], 0, 1));
