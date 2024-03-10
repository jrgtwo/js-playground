/**
 * BIG O - LINKED LIST
 * adding to the end => O(1)
 * removing from the end => O(n) becase we can't set the tail correctly without traversing the list
 * 
 * adding to the front O(1)
 * removing from the front O(1)
 * 
 * Insert into middle of list O(n) - need to traverse
 * remove from middle of list O(n)
 * 
 * Searching for an item O(n) - need to traverse
 * 
 */

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if (!this.head) {
      return undefined
    }

    let temp = this.head
    let pre = this.head

    while (temp.next) {
      pre = temp
      temp = temp.next
    }

    this.tail = pre
    this.tail.next = null

    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return temp
  }

  unshift(value) {
    const newNode = new Node(value)
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
    if (!this.head) return undefined

    let temp = this.head
    this.head = this.head.next

    temp.next = null
    this.length--
    if (this.length === 0) {
      this.tail = null
    }

    return temp
  }

  get(index) {

    if (index < 0 || index >= this.length) {
      return undefined
    }

    let temp = this.head

    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  set(index, value) {
    let temp = this.get(index)

    if (temp) {
      temp.value = value
      return true
    }

    return false
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

    const newNode = new Node(value)
    const temp = this.get(index - 1)

    newNode.next = temp.next
    temp.next = newNode

    this.length++
    return true
  }

  remove(index) {
    if (index === 0) {
      return this.shift()
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    if (index < 0 || index >= this.length) {
      return undefined
    }

    const temp = this.get(index - 1)
    const curr = temp.next
    temp.next = curr.next
    curr.next = null

    this.length--
    return curr
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null

    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }

    return this
  }
}

// const linkedList = new LinkedList(4);

// console.log(linkedList)

// linkedList.push(10).push(11).push(12)
// linkedList.insert(1, 2)
// console.log(linkedList)
// linkedList.remove(1)
// console.log(linkedList)

const linkedList = new LinkedList(1)
linkedList.push(2).push(3)
linkedList.reverse()
console.log(linkedList)