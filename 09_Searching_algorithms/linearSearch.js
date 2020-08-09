//Write a linearSearch algorithm that accepts an array and a value and returns the index of value if found in array, return -1 if not found

//function that accepts an array and a value
function linearSearch(arr, val) {
  //loop through the array and check if the current array element is equal to the value
  //return the index where value is found
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  //if the value is never found, return -1
  return -1;
}

const arr = [1, 2, 3, 4, 5, 13, 44, 6, 10];
console.log(linearSearch(arr, 11));
