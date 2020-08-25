//BFS visiting every sibling node/node on the same level before moving down to next level/child nodes

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
  //Breadth First Search
  bfs() {
    //BFS takes advantage of a queue(array) and a variable to store the values of a nodes visited
    //Place the root node in the queue
    //Loop as long as there is anything in the queue
    //Dequeue a node from the queue and push the values of the node into a variable that stores the nodes
    //If there is a left property on th node dequeue - add it to the queue
    //If there is a right property on the node dequeue - add it to the queue
    //Return the values stored in the variable
    let data = [];
    let queue = [];
    queue.push(this.root);
    let node = this.root;
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
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
console.log(tree);
console.log(tree.bfs());
