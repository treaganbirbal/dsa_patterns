//A Priority Queue is a data structure where each element has a priority.  Elements with higher priorities are served before elements with lower priorities.
//The lower the Priority value, the higher the priority.

//Ex: A patient with a flu has a value of 5.  A patient with a gunshot wound has a priority of 1.
//Ex: Processes running on a machine with a priority number

//-----A naive version-----
//Use a list (array or linked list) to store all elements
//Iterate over the entire thing to find the highest priority element.
//[{priority: 3}, {priority: 2}, {priority: 1}, {priority 4}]

//----A heap is a more effecient approach for Priority Queueu----
//Write a Min Binary Heap - lower number means higher priority
//Each Node has a val and a priority.  Use the priority to build the heap
//Enqueue method accepts a value and priority, makes a new Node, and puts it in the right spot based off of its priority.
//Dequeue mehtod removes root elements, returns it and rearranges heap using priority.

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildidx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChild < length) {
        rightChild = this.values[rightChildidx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildidx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue("common Cold", 5);
ER.enqueue("high fever", 4);
ER.enqueue("Gunshot wound", 1);
ER.enqueue("broken bone", 2);
ER.enqueue("Glass in foot", 3);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
// console.log(ER);
