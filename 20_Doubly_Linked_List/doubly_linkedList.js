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
    if (!this.tail) {
      return undefined;
    }
    let lastNode = this.tail;
    this.tail = lastNode.prev;
    this.tail.next = null;
    this.length--;
    return lastNode;
  }

  shift() {}

  unshift() {}

  get() {}

  set() {}

  insert() {}

  remove() {}

  print() {}

  reverse() {}
}

const list = new DoublyLinkedList();
list.push(1).push(2).push(3);
console.log(list);
console.log("removed Node:", list.pop());
console.log(list);
