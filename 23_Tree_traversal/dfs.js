//DEPTH FIRST SEARCH takes advantage of a stack
//3 different orders - PreOrder, InOrder, PostOrder

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
        if (value === currentNode.value) {
          return undefined;
        }
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
  }
  //Finding a Node in a BST
  find(val) {
    //start at the root,
    //check if there is a root- if not - return
    //if there is a root, check if the value of the new Node is the value we are looking for, if found we are done return node
    //if not, check to see if the value is greater or less than the value of the root
    //if value is greater
    //check to see if there is a node to the right
    //if there is move to the node and repeat these steps
    //if there is not then we are done searching
    //if value is less
    //check to seee if there is a node to the left
    //if there is move to the node and repeat these steps
    //if there is not then we are done searching
    if (!this.root) {
      return false;
    } else {
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (val < current.value) {
          current = current.left;
        } else if (val > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (!found) {
        return false;
      }
      return current;
    }
  }

  //preOrder Traversal starts with the root, processes left side and then right side
  preOrder() {
    //create a variable to store the values of nodes visited
    //Store the root of the tree in a variable called current
    //Write a helper function which accepts a node
    //Push the values of the node to the varialbe that stores the values
    //if the node has a left property, call the helper function with the left property of the node
    //if the node has a right property, call the helper funciton with the right property of the node
    //
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }

  inOrder() {}

  postOrder() {
    //create an array to store the values of nodes visited
    //Store the root of the bst in a variable called current
    //Write a helper function which accepts a node
    //If the node has a left property, call the helper function with the left property on the node
    //if the node has a right property, call the helper function with the right property on the node
    //Push the values of a the node to the array that stores values
    //Invoke helper funciton with the current variable
    const data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }
    traverse(current);

    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree.preOrder());
console.log(tree.postOrder());
