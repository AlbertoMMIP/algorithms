class Node {
  constructor (value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }
  insertNode (tree, node) {
    if (tree === null) {
      tree = node
    } else {
      if (tree.value > node.value) {
        tree.left = this.insertNode(tree.left, node)
      } else {
        tree.right = this.insertNode(tree.right, node)
      }
    }
    return tree;
  }
  insert (value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Recursive solution
      // this.root = this.insertNode(this.root, newNode)
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup (value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  remove (value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // We have a match, get to work!
        // Option 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          }
          // if parent > current value, make current left child a child of parent
          if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.left;
          // if parent < current value, make left child a righ child of parent  
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.left;
          }
        // Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            // if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            // if parent < current, make right child a right child of the parent 
            } else if (currentNode.vale > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        // Option 3: Right child that has a left child
        } else {
          // find the right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          // Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.vale) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

}

function traverse (node) {
  const tree = { node: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
} 

function init () {
  const tree = new BinarySearchTree();
  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
  // console.log('Binary search tree:: Exists 20', tree.lookup(20));
  tree.remove(170)
  console.log('Binary search tree:: After deleteing 170', JSON.stringify(traverse(tree.root), null, 2));
}


export {
  init,
}