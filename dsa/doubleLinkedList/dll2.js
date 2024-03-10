class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {

  head = null
  tail = null
  length = 0

  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length++
  }

  push(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    }

    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode

    this.length++

    return this
  }

  pop() {
    if (this.length === 0) {
      return undefined
    }

    let curr = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      let prev = curr.prev

      this.tail = prev
      this.tail.next = null
      curr.prev = null
    }

    this.length--
    return curr

  }

  unshift(value) {

    if (this.length === 0) {
      return this.push(value)
    }
    const newNode = new Node(value)
    //const curr = this.head
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode

    this.length++;
    return this
  }

  shift() {
    if (this.length === 0) {
      return undefined
    }

    if (this.length === 1) {
      return this.pop()
    }

    let temp = this.head
    this.head = this.head.next
    this.head.prev = null
    temp.next = null

    this.length--
    return temp
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return undefined
    }

    let temp

    if (index < this.length / 2) {
      temp = this.head
      for (let i = 0; i < index; i++) {
        temp = temp.next
      }
    } else {
      temp = this.tail
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev
      }
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

    let temp = this.get(index)

    if (!temp) {
      return false
    }

    let newNode = new Node(value)
    newNode.prev = temp.prev
    newNode.next = temp
    newNode.prev.next = newNode
    temp.prev = newNode

    this.length++
    return true

  }

  remove(index) {
    if (index === 0) {
      return this.shif()
    }

    if (index === this.length - 1) {
      return this.pop()
    }
    let temp = this.get(index)

    if (!temp) {
      return undefined
    }

    temp.prev.next = temp.next
    temp.next.prev = temp.prev
    temp.prev = null
    temp.next = null

    this.length--
    return temp

  }

}

const dll = new DoublyLinkedList(1)