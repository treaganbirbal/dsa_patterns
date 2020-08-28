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
