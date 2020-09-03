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
// console.log(revisedHash("pink", 13));
// console.log(revisedHash("cyan", 13));

//Dealing with Collisions
//even with large array and a great has function, collisions are inevitable.
//1. Seperate Chaining - With seperate chaining, at each index in array we store values using a more sophistacted data structure(e.g.  array or linked list). Allows us to store multiple key value pairs in same position.
//2. Linear Probing - With linear probing, when we find a collision, we search through the array to find the next empty slot. This allows us to store one key-value pair at a position.

class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) & this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    //Accepts a key and a value
    //Send key through a hashing function
    //Store the key-value pair in the hash table arry via seperate chaining
    const idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, val]);
    return idx;
  }

  get(key) {
    //Accepts a key
    //Send key through a hashing function
    //Retrieves the key-value pari in the hash table
    //If the key is not found, return undefined
    const idx = this._hash(key);
    let arr = this.keyMap[idx];
    if (!this.keyMap[idx]) {
      return undefined;
    }
    for (let i = 0; i < arr.length; i++) {
      if (this.keyMap[idx][i][0] === key) {
        return this.keyMap[idx][i][1];
      }
    }
    return undefined;
  }

  keys() {
    //Loop through the hash table array and returns and array of keys in the table
    const keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        keyArr.push(this._hash(this.keyMap[i][0]));
      }
    }
    return keyArr;
  }
  values() {
    //Loop through the hash table array and returns an array of values in the table
    const valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

const ht = new HashTable();
console.log(ht.set("hello world", "goodbye!!"));
console.log(ht.set("new York", "yerrr"));
console.log(ht.get("new York"));
console.log(ht.keys());
console.log(ht.values());
