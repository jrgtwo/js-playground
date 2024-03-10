class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
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

      if (value === temp.value) {
        return undefined
      }
      if (value > temp.value) {
        if (temp.right === null) {
          temp.right = newNode
          return this
        }
        temp = temp.right
      } else {

        if (temp.left === null) {
          temp.left = newNode
          return this
        }
        temp = temp.left
      }
    }
  }

  bfs() {
    let currentNode;
    let queue = [this.root]
    let results = []

    while (queue.length) {
      currentNode = queue.shift()
      results.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return results
  }

  dfs_preorder() {
    let results = []

    function traverse(currentNode) {
      results.push(currentNode.value)
      if (currentNode.left) {
        traverse(currentNode.left)
      }
      if (currentNode.right) {
        traverse(currentNode.right)
      }
    }

    traverse(this.root)

    return results
  }

  dfs_postorder() {
    let results = []

    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left)
      }
      if (currentNode.right) {
        traverse(currentNode.right)
      }
      results.push(currentNode.value)
    }

    traverse(this.root)

    return results
  }

  dfs_inorder() {
    let results = []

    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left)
      }
      results.push(currentNode.value)
      if (currentNode.right) {
        traverse(currentNode.right)
      }
    }

    traverse(this.root)

    return results
  }

}

const tree = new Tree()
tree.insert(47)
tree.insert(21)
tree.insert(27)
tree.insert(76)
tree.insert(18)
tree.insert(82)
tree.insert(52)
console.log(tree)
console.log(tree.bfs())
console.log(tree.dfs_preorder())
console.log(tree.dfs_postorder())
console.log(tree.dfs_inorder())
