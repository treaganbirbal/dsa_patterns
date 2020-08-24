//Stack is a LIFO data structure
//The last element added to the stack will be the first element removed from the stack

//Array implementation of Stack
//using push method an pop method creates a stack

// const stack = [];
// //adding to the top of the stack
// stack.push("google.com");
// stack.push("instagram.com");
// stack.push("youtube.com");

// //removing from the top of the stack
// stack.pop();

//-----------------------
//Linked List implementation of a stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //adding elements to the the stack
  //push accepts a value and creates a new node with that value
  //if there are no nodes in the stack , set the first and last property to be the newly created node'
  //if there is at least one node, create a variable that stores the current first property on the stack
  //reset the first property to be the newly created node
  //set the next property on the node to be the previously created variable
  //increment the size of the stack by 1
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  //remove a node from a stack
  //if there are no nodes in the stack, return null
  //create a temporary variable to store the first property on the stack;
  //if there is only 1 node, set the first and last property to be null
  //if there is more than one node, set the first property to be the next property on the current first
  //decrement the size by 1
  //return the value of the node removed
  pop() {
    if (!this.first) {
      return null;
    }
    let returnedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    --this.size;
    return returnedNode.value;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
console.log(stack);
