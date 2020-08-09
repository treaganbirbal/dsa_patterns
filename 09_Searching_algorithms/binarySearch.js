//Write a binarySearch function that accepts a SORTED ARRAY and a value. Search through array to see if value is in array.  If found return index, if not found return -1

//create a function that accepts an array and value
function binarySearch(arr, val) {
  //create a left pointer at the start of array
  let left = 0;
  //create a right pointer at end end of array
  let right = arr.length - 1;
  //while left is less than right
  //create a pointer in the middle

  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== val && left <= right) {
    // if value is too small move the left pointer up one
    if (val < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  //if you find the value you want, return index
  if (arr[middle] === val) {
    return middle;
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 10, 13, 44];
console.log(binarySearch(arr, 44));
