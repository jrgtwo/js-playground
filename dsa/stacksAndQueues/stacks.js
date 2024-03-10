/**
 * Push to a stack 
 * Pop from a stack
 * LIFO - last in first out
 * PUSH to stack
 * adding y to top of stack
 *          | Y |
 *          |   |
 *          | X |
 *          | Z |
 *          ===== 
 * 
 * POP from stack
 * removing y from top of stack
 *          | Y |
 *          |   |
 *          | X |
 *          | Z |
 *          ===== 
 * 
 */
/**
 * 
 * POP and push from an array
 * shift unshift from linked list
 * 
 * 
 */

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value)
    this.top = newNode
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)
    newNode.next = this.top || null
    this.top = newNode
    this.length++

    return this
  }

  pop() {
    if (this.length === 0) {
      return undefined
    }

    const temp = this.top
    this.top = temp.next
    temp.next = null

    this.length--
    return temp
  }
}

const stack = new Stack(1)
