//Merge sort is a combination of three things - splitting, merging and sorting
//exploits the act that arrays of 0 or 1 elements are always sorted
//Works by decomposing an array into smaller arrays of 0 or 1 elements and then building up a newly sorted array

function mergeSort(arr) {
  //base case
  if (arr.length <= 1) {
    return arr;
  }

  //break up the array into havles until there are arrays of zero or one element
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  //merge those arrays with the other sorted arrays until you have are back at the full length of the array
  return merge(left, right);
}

//given two sorted arrays this helper function should create a new array which is also sorted and consists of all the elements in the two input arrays
//time: O(n + m)  space: O(n+m)
function merge(arr1, arr2) {
  //create an empty array to return
  const output = [];
  //look at the smallest values in each input array
  let i = 0;
  let j = 0;
  //while there are still values to look at.....
  while (i < arr1.length && j < arr2.length) {
    //if the value in the first array is smaller than the value in the second array,push the value in the first array into output array and move on to the next value in the first array
    if (arr2[j] > arr1[i]) {
      output.push(arr1[i]);
      i++;
    } else {
      //if the value in the larger than the value in the second array, push the value in the second array into our output array and move on to the next value in the second array
      output.push(arr2[j]);
      j++;
    }
  }
  //once we exhause one array, push in all remaining values from the other array
  while (i < arr1.length) {
    output.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    output.push(arr2[j]);
    j++;
  }
  return output;
}

console.log(mergeSort([3, 35, 5, 8, 55, 10, 1, 84, 35, 11, 2, 4, 6, 109, 9]));
