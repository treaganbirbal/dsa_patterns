//A Binary Heap are Trees are very similar to binary search tree, but with some different rules
//In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smallther than child nodes
//Each parent has at most two child nodes
//The value of each parent node is always greater than its child nodes
//In a max Binary Heap the parent is great than the children, but there are no guarantees between sibling nodes
//A binary heap is as compact as possible. All the children of each node are as full as they can be and left chidldren are filled out first

//FORMULA TO STORE DATA
//We can store data of Binary Heap in an Array
//For any index of an array n...
//The left child is stored at 2n+1
//The right child is stored at 2n+2
//To find parent of child node...
//it's parent is at index Math.floor((n-1)/2)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  //insert a node into binary heap
  insert(val) {
    //Add value to the end of values array
    //Bubble value up to the correct index
    //create a variable called index which is the length of the values property - 1
    //create a variable called parentIdx which is the floor of (index -1)/ 2
    //Keep looping as long as the values element at the parentIndx is less than the values element at child index
    //swap the value of the values element at the the parentIdx with the value of the element property at the child index
    // set the index to be the parentIndex and start Over
    this.values.push(val);
    this.bubble();
  }

  //removing a node from a heap
  extractMax() {
    //Swap the first value in the values property with the last one
    //Pop from the values property, so you can return the value at the end.
    //Have the new root sink down to the correct spot
    //Your parent index starts at 0 (this root)
    //Find the index of the left child 2* index + 1 *make sure ites not out of bounds
    //find the index of the right child 2*index + 2 make sure its not out of bounds
    //If the left or right child is greater than the element, swap. If both left and right child are larger, swap with the largest child.
    //the child index you swapped to now becomes the new parent index
    //keep looping and swapping until neither child is larger than element.
    //Return the old root
    let maxVal = this.values[0];
    let lastElement = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastElement;
      this.sinkDown();
    }
    return maxVal;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  bubble() {
    let childIdx = this.values.length - 1;
    const child = this.values[childIdx];
    while (childIdx > 0) {
      let parentIdx = Math.floor((childIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (child <= parent) break;
      this.values[parentIdx] = child;
      this.values[childIdx] = parent;
      childIdx = parentIdx;
    }
  }
}

const maxBH = new MaxBinaryHeap();
console.log(maxBH);
maxBH.insert(10);
maxBH.insert(4);
maxBH.insert(33);
maxBH.insert(2);
maxBH.insert(99);
console.log(maxBH);
console.log(maxBH.extractMax());
maxBH.extractMax();
console.log(maxBH);
