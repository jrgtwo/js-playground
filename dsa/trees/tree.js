/**
 * Binary Trees
 * A full tree is when 
 * all nodes pointers are full or completely empty
 * 
 * A perfect tree is when all siblings have equal children
 * 
 * A node with no children is considered a leaf node
 * 
 * Big O of a BST is  around O(log n) for a balanced tree
 * Each row of the tree is one step
 * 
 * Binary Search Trees use Divide and Conquer to find nodes
 * This breaks down with unbalanced trees
 * 
 * Slower to isert than linked list
 * Fast to lookup and remove
 * 
 * 
 */


class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {

    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }

    let temp = this.root

    while (true) {
      if (newNode.value === temp.value) {
        return undefined
      }
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode
          return this
        }
        temp = temp.left
      } else {
        if (temp.right === null) {
          temp.right === newNode
          return this
        }
        temp = temp.right
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false
    }

    let temp = this.root
    while (temp) {
      if (value < temp.value) {
        temp = temp.left
      } else if (value > temp.value) {
        temp = temp.right
      } else {
        return true
      }
    }

    return false
  }

  minimumValue(currentNode = this.root) {
    while (currentNode.left != null) {
      currentNode = currentNode.left
    }
    return currentNode
  }
}

const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(17)
bst.insert(18)
bst.insert(14)
bst.insert(9)
bst.insert(1)
console.log(bst.contains(1))
console.log(bst.contains(2))
console.log(bst.contains(10))
console.log(bst.contains(7))
