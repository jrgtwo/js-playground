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
  _root
  constructor(val) {
    this.add(val)
  }

  add(val) {
    const node = new Node(val)
    if (!this._root) {
      this._root = node
      return
    }

    let curNode = this._root

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

  remove(val) {
    let curNode = this._root
    let prevNode
    while (curNode) {
      if (curNode.val === val) {
        //bingo
        let node
        if (!curNode) {
          break
        }
        if ((!curNode.left & !curNode.right)) {
          if (prevNode.val > val) {
            prevNode.left = null
            break
          } else {
            prevNode.right = null
            break
          }
        }

        if (!curNode.right) {
          if (prevNode.val > val) {
            prevNode.left = curNode.left
            break
          } else {
            prevNode.right = curNode.left
            break
          }
        } else if (!curNode.left) {
          if (prevNode.val > val) {
            prevNode.left = curNode.right
            break
          } else {
            prevNode.right = curNode.right
            break
          }
        } else {
          const left = curNode.left
          const right = curNode.right

          if (prevNode.val > val) {
            prevNode.left = right
            let secCurNode = right.left
            if (!secCurNode) {
              right.left = left
              break
            }
            while (secCurNode?.left) {
              secCurNode = secCurNode.left
            }
            secCurNode.left = left
            break
          } else {
            prevNode.right = left
            let secCurNode = left.right
            if (!secCurNode) {
              left.right = right
              break
            }
            while (secCurNode?.right) {
              secCurNode = secCurNode.right
            }
            secCurNode.right = right
            break
          }
        }

      } else if (curNode.val > val) {
        prevNode = curNode
        curNode = curNode.left
      } else {
        prevNode = curNode
        curNode = curNode.right
      }

    }
  }

  has(val) {

  }

}

const list = new LinkedList(10)
list.add(11)

list.add(8)
list.add(9)
list.add(7)
list.add(10)
list.add(12)
list.remove(11)
list.remove(12)
list.remove(8)
console.log(list)