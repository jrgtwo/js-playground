class Node {
  _val
  _left
  _right
  constructor(val) {
    this._val = val
    this._left = null
    this._right = null
  }

  get left() {
    return this._left
  }
  set left(node) {
    this._left = node
  }
  get right() {
    return this._right
  }
  set right(node) {
    this._right = node
  }
  set val(val) {
    this._val = val
  }
  get val() {
    return this._val
  }

}

class LinkedList {
  _head
  constructor(val) {
    this.add(val)
  }

  add(val) {
    const node = new Node(val)
    if (!this._head) {
      this._head = node
      return
    }

    let curNode = this._head

    while (curNode) {
      if (val > curNode.val) {
        if (!curNode.right) {
          curNode.right = node
          break
        } else {
          curNode = curNode.right
        }
      } else {
        if (!curNode.left) {
          curNode.left = node
          break
        }
        curNode = curNode.left
      }
    }

  }
  remove() { }

}

const list = new LinkedList(10)
list.add(11)
list.add(9)
list.add(8)
list.add(12)
console.log(list)