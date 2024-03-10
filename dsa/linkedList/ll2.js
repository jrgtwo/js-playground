class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  head = null
  tail = null
  length = 0

  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length++;
  }

  push(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined

    let pre = this.head
    let temp = this.head

    while (temp.next) {
      pre = temp
      temp = temp.next
    }

    this.tail = pre
    this.tail.next = null

    this.length--;

    if (this.length < 1) {
      this.head = null
      this.tail = null
    }

    return temp

  }

  unshift(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  shift() {
    if (!this.head) {
      return undefined
    }
    let temp = this.head
    this.head = this.head.next
    temp.next = null

    this.length--;

    if (this.length < 1) {
      this.head = null
      this.tail = null
    }

    return temp

  }

  get(index) {
    if (!this.head || index >= this.length) return undefined

    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  set(index, value) {
    let temp = this.get(index)

    if (!temp) {
      return false
    }

    temp.value = value
    return true
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value)
    }
    if (index === this.length) {
      return this.push(value)
    }
    if (index < 0 || index > this.length) {
      return false
    }

    const newNode = new Node()
    const temp = this.get(index - 1)

    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true

  }
  remove(index) { }
  reverse() { }

}

const myList = new LinkedList(1)

myList.push(2).push(3).push(4)
console.log(myList.pop())
console.log(myList.pop())
console.log(myList.pop())
console.log(myList.pop())
console.log(myList.pop())