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
}
