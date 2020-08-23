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

  //accessing a node in a doubly linked list by its position
  get(idx) {
    //if index is less than 0 or greater than or equal to length return null
    //if index is less than or equal to half the length of list
    //loop through list starting from head and work towards middle
    //return the node once it is found
    //if the index is greater the half the length of list
    //loop through the list starting from the tail towards middle
    //return the node once it is found
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let counter;
    let current;
    if (idx <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== idx) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== idx) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  //Replacing the value of a node at a position to new value in double linked list
  set(idx, val) {
    //if idx is less than 0 or idx is greater or equal length of list
    //return null
    //create a variable which is the result of the get method at the index passed to the function
    //if the get method returns valid node, set the value of that node to be the value passed in to the function
    //return true
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  //Adding a node in the Doubly Linked List by a certain position
  insert(idx, val) {
    //if the idx is less than zero or greater   than or equal to the length return false
    //if the idx is 0, unshift
    //if the idx is the same as the length, push
    //else use the get method to access idx - 1
    //set the next and prev properties on the correct nodes to link everything together
    //increment length by one
    //return true
    if (idx < 0 || idx > this.length) {
      return false;
    }
    const newNode = new Node(val);
    if (idx === 0) {
      return !!this.unshift(val);
    }
    if (idx === this.length) {
      return !!this.push(val);
    } else {
      let prev = this.get(idx - 1);
      let next = prev.next;
      newNode.prev = prev;
      newNode.next = next;
      prev.next = newNode;
      next.prev = newNode;
      this.length++;
    }
    return true;
  }

  //Removing a node in a Doubly Linked List by a certain position
  remove(idx) {
    //if idx is less than 0 or idx is greater than or equal to length
    //return false;
    //if the idx is 0, shift
    //if the idx is equal to length - 1, pop
    //use the get method to retrieve the item to be removed
    //update the next and prev properties to remove the found node from the list
    //set next and prev of found node to be null
    //decrement the length
    //return the removed node
    if (idx < 0 || idx >= this.length) {
      return false;
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    } else {
      let removedNode = this.get(idx);
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      removedNode.prev = null;
      removedNode.next = null;
      this.length--;
      return removedNode;
    }
  }

  print() {}

  reverse() {}
}

const list = new DoublyLinkedList();
list
  .push(1)
  .push(2)
  .push(3)
  .push(4)
  .push(5)
  .push(6)
  .push(7)
  .push(8)
  .push(9)
  .push(10);
// console.log(list);
// console.log("shifted", list.shift());
// console.log("shift", list.shift());
// list.shift();
// console.log(list);
// list.unshift(4);
// list.unshift(3);
list.unshift("treagan");
// console.log("got Node:", list.get(1));
// console.log(list.set(10, "Treagan Birbal"));
// console.log(list.remove(0));
list.remove(3);
console.log(list);
