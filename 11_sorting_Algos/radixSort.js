//Radix sort is a special sorting algorithm that only works on a list of numbers
//Never makes comparison between elements
//It exploits the fact that information about the size of a number is encoded in the number of digits
//more digits means a bigger number!

//in order to implement radix sort, it's helpful to build a few helper functions first:

//getDigit(num, place) returns the digit in num at the given place value

function radixSort(arr) {
  let highestDigits = mostDigits(arr);
  for (let i = 0; i < highestDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (digitCount(arr[i]) > maxCount) {
      maxCount = digitCount(arr[i]);
    }
  }
  return maxCount;
}

let array = [134423, 23423432, 1, 1, 2, 3333, 43243, 2];

console.log(radixSort(array));
