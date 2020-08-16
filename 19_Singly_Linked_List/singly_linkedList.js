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
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //pop removes node from end of linked list
  pop() {
    //if there are no nodes in list return undefined
    //loop through entire list until you get tail
    //keep track of previous value from tail
    //set the next property of prev to be null
    //set tail to prev node
    //decrement the lengh of list
    //return the value of the node removed
    if (!this.head) {
      return undefined;
    }
    let currNode = this.head;
    let prev = currNode;
    while (currNode.next) {
      prev = currNode;
      currNode = currNode.next;
    }
    currNode = this.tail;
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currNode;
  }
}

let list = new SinglyLinkedList();
list.push(1).push(2).push(3).push({ name: "Treagan" });
console.log(list);
list.pop();
console.log(list);

list.pop();
console.log(list);

list.pop();
console.log(list);

list.pop();
console.log(list);
