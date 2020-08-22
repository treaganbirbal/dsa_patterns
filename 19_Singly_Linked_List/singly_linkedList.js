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

  //removing a new node from the beginning of the linked list
  shift() {
    //if there are no nodes return undefined
    //store the current head property in a variable
    //set the head property to be current head's next property
    //decrement the length by 1
    //return removed node
    if (!this.head) {
      return undefined;
    }
    let removedNode = this.head;
    this.head = removedNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedNode;
  }

  //add a new node to the beginning of the linked list
  unshift(val) {
    //create a new node to add
    //if no nodes
    //head and tail = new Node
    //else set the newly created nodes' next property to be current head property
    //set the head property to be the newly created node
    //increment length by 1
    //return linked list
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //retrieving a node by it's position in the linked list
  get(idx) {
    //accept an index as position
    //if the idx is negative or >= to length
    //return null;
    //loop through the list until you reach the index and return the node at the specific index
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let counter = 0;
    let currNode = this.head;
    while (counter !== idx) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  //changing the value of a node based on its position in linked list
  set(idx, val) {
    //accepts idx, val
    //use get method to find the node
    //update val to new val
    let nodeToUpdate = this.get(idx);
    if (nodeToUpdate) {
      nodeToUpdate.value = val;
    } else {
      return null;
    }
  }

  //adding a node to the linked list at a specific position
  insert(idx, val) {
    //takes indx and val as args
    //if index < 0 || > list.length
    // return false;
    //if index is the same a the length; push a new node to the end of the list
    //if index is 0, unshift new node to the beginning of list;
    // else get item 1 before idx
    //set next to the new node
    //get the item 1 after idx
    //set next of new node
    //increment length by
    //return true
    if (idx < 0 || idx > this.length) {
      return false;
    } else {
      const newNode = new Node(val);
      if (idx === this.length) {
        return !!this.push(newNode);
      } else if (idx === 0) {
        return !!this.unshift(newNode);
      } else {
        let prev = this.get(idx - 1);
        let nextNode = prev.next;
        prev.next = newNode;
        newNode.next = nextNode;

        this.length++;
        return true;
      }
    }
  }

  //removing a node from a specific position in linked list
  remove(idx) {
    //if idx less than 0 or idx is greater or equal than the lengh of list
    //return false
    //iff the idx is the same as length - 1
    //pop from end of list
    //if the idx is 0; shift from the front of list
    //else get prev node at index - 1 and set its next to current index +1
    //decrease length by 1
    //return the removed node
    if (idx < 0 || idx >= this.length) {
      return false;
    } else {
      if (idx === 0) {
        return this.shift();
      }
      if (idx === this.length - 1) {
        return this.pop();
      } else {
        let removedNode = this.get(idx);
        let prev = this.get(idx - 1);
        prev.next = removedNode.next;
        removedNode.next = null;
        this.length--;
        return removedNode;
      }
    }
  }

  //reverse the linked list in place
  reverse() {
    //swap the head and tail
    //create a variable to store next
    //create a variable to store prev
    //create a variable to store current
    //initalize current to the head property
    //loop through the list
    //set next to be the next property of current node is
    //set the next property on the node to whatver prev is
    //set the node variable to
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push(1).push(2).push(3).push({ name: "Treagan" });
// console.log(list);
// console.log("removed last item is: ", list.pop());
// console.log(list);
// console.log("removed first item is:", list.shift());
// list.unshift(10);
// console.log("got node: ", list.get(3));
// console.log(list.insert(3, { name: "Treagan Birbal" }));
console.log(list);
// console.log("removed node is: ", list.remove(3));
// console.log(list.get(3));
list.print();
list.reverse();
list.print();
