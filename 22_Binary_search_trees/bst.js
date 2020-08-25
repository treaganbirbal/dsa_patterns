//A Binary Search Tree (BST)
//Every parent node has at most two children
//Every node to the left of a parent node is always less than the parent
//Every node to the right of the parent node is always greater than the parent

//Node class takes in a value, ref to left and right
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//---BST class takes in a root
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //inserting a node at the appropiate place
  insert(value) {
    //create new node that takes in a val
    //start at root, if no root new Node becomes root
    //if there is a root, check the value of the new node is greater or less than value of root
    //if it is greater
    //check to see if there is a node to the right
    //if ther is move on to the next node and repeat these steps
    //if there is no node, add that node as the right property
    //else if it is less
    //check to see if there is a node to the right
    //if there is a node, move to left of that node and repeat these steps
    //if there is no node, add that node as the left property
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    return this;
  }
}

const bst = new BinarySearchTree();
console.log(bst);
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(12);
console.log(bst.root.right);
