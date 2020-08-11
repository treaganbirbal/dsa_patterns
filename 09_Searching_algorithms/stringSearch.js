//define a function that takes in 2 strings. first string is the longer string, second string is the patter looking for.  if string match return count of matching else return 0

//create a stringSearch func that takes in 2 strings
function stringSearch(str1, str2) {
  //have a count variable
  let count = 0;
  //short circuit if str2 length is greater
  if (str2.length > str1.length) {
    return 0;
  }
  //loop over the longer string
  for (let i = 0; i < str1.length; i++) {
    //loop over the shorter string
    for (let j = 0; j < str2.length; j++) {
      //if the characters don't match break out of inner loop
      if (str2[j] !== str1[i + j]) {
        break;
      }
      //if the characters do match, keep going
      //if you complete the inneer loop and finish find a match
      else if (str2[j] === str1[i + j] && j === str2.length - 1) {
        //increment count of the matches
        count++;
      }
    }
  }
  //return count
  return count;
}

console.log(stringSearch("treagan birbal", "hey"));
