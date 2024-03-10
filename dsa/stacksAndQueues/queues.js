/**
 * FIFO
 * First in First Out
 * Just like standing in a line
 * 
 */

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.first = newNode
    this.last = newNode
    this.length = 1
  }

  enqueue(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    this.length++
    return this
  }

  dequeue() {
    if (this.length === 0) {
      return undefined
    }

    const temp = this.first

    if (this.length === 1) {
      this.last = null
      this.first = null
    } else {
      this.first = temp.next
      temp.next = null
    }

    this.length--
    return temp

  }
}

const q = new Queue(1)
