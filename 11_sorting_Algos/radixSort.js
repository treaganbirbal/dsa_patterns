//Radix sort is a special sorting algorithm that only works on a list of numbers
//Never makes comparison between elements
//It exploits the fact that information about the size of a number is encoded in the number of digits
//more digits means a bigger number!

//in order to implement radix sort, it's helpful to build a few helper functions first:

//getDigit(num, place) returns the digit in num at the given place value
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

console.log(
  mostDigits([
    34324,
    34312,
    12443545235425254523,
    432,
    1,
    1,
    233,
    1341433423423,
  ])
);
