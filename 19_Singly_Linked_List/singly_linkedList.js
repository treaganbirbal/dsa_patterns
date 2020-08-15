class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //push method adds new node to list
  push(val) {
    //create new Node with value
    //if no head
    //set head & tail to new node
    //else set next property on tail to be new node and set the tail property on on the list to be newly created node
    //update length property by one
    //return list
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(1).push(2).push(3);
console.log(list);
