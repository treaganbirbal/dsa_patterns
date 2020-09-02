//OBJECTS-DICTIONARIES-HASHMAP-HASHTABLE

//A Hash table is used to store key-value pairs.
//They are like arrays, but the keys are not ordered.
//Unlike arrays, hash tables are fast for all of the following properties: finding values, adding values, and removing values.

//Ex: Storing hex codes for colors
//pink -> #ff69b4
//orangered -> #ff4500
//cyan -> #00ffff

//To implement a hash table, use an array or list.
//In order to look up values by key, we need a way to conver keys into valid array indices.
//A function that performs this task is called a hash function.

//A hashing function
//What makes a good hash function
//1. Fast(constant time)
//2. Doesn't cluster outputs at a specific indices, but distributes uniformly
//3. Deterministic(same input yields same output)

//string hashing function
function hash(key, arrayLength) {
  let total = 0;
  for (let char of key) {
    //map "a" to 1, "b" to 2, "c" to 3, etc...
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;
}

// console.log(hash("orangered",10));

//Refactored string hash function
function revisedHash(key, arrayLength) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }
  return total;
}
