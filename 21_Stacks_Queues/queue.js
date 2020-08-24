//A Queue is a FIFO data structure
//The first elements added to the Queue is the first to leave queue
//Array implementation of a Queue
const queue = [];

//adding to the queue
queue.push("First");
queue.push("Second");
queue.push("Third");

//removing from the queue
queue.shift();
console.log(queue);

//-------------
//Queue class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //add to queue
  //the function accepts a value
  //create a new node using that value passed in the function
  //if there are no nodes in the queue, set this node to be the first and last properties of the queue
  // else, set the next property on the current last to be that node, and then set the last property of the queue to be that node
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  //remove from queue
  //if there are no nodes in the property return null
  //See if the first is the same as the last(check to see if there is only 1 node). if so, set the first and last properties to null
  //If there is more than 1 node, set the first property to be the next property of the first
  //decrement the size by 1
  //return removed node
  dequeue() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first.next = this.first;
    this.size--;
    return temp.value;
  }
}
