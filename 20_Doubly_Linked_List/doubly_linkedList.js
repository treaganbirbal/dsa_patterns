class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //adding new node to the end of the linked list
  push(val) {
    //create a new Node with value passed to it
    //if the head property is null
    //set the head and tail to be the new node
    //else set the next property on the tail to be new Node
    //set previous property on the newly creatd node to be the tail
    //set the tail to be the newly created node
    //increment length
    //return list
    const newNode = new Node(val);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //remove a node from the end of the linked list
  pop() {
    //if no tail
    //return undefined
    //else store current tail in variable
    //if length is 1
    //set head & tail to be null
    //update the tail to be prev Node
    //set new tail next to be null
    //decrement length by 1
    //return the removed node
    if (!this.tail) {
      return undefined;
    }
    let lastNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = lastNode.prev;
      this.tail.next = null;
      lastNode.prev = null;
    }
    this.length--;
    return lastNode;
  }

  //removing a node from the beginning of the linked list
  shift() {
    //if there is no head return undefined
    //store head in a variable to be returned
    //if the length is one
    //make head and tail equal to null
    //update the head to the be the next of old head
    //set the heads previous property to null
    //set the old heads next prop to null
    //decrement the length by one
    //return the old head
    if (!this.head) {
      return undefined;
    }
    let returnedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      returnedNode.next = null;
    }
    this.length--;
    return returnedNode;
  }

  //adding a node at the beginning of linked list
  unshift(val) {
    //create a new Node with val
    //if the length is 0
    //set head and tail to be new Node
    //else set the previous property on the head of the list to be new Node
    // set the next propery on the new node to be the head property
    //update head to be the new node
    //increment length by 1
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get() {}

  set() {}

  insert() {}

  remove() {}

  print() {}

  reverse() {}
}

const list = new DoublyLinkedList();
// list.push(1).push(2).push(3);
// console.log(list);
// console.log("shifted", list.shift());
// console.log("shift", list.shift());
// list.shift();
console.log(list);
list.unshift(4);
list.unshift(3);
console.log(list);
