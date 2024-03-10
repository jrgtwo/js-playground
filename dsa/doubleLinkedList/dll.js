class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if (!this.length === 0) {
      return undefined
    }

    let temp = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      let prev = temp.prev

      this.tail = prev
      this.tail.next = null
      temp.prev = null
    }

    this.length--

    return temp
  }

  unshift(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }

    this.length++
    return this
  }
  shift() {
    if (this.length === 0) {
      return false
    }

    let temp = this.head
    if (this.length === 1) {
      this.tail = null
      this.head = null
    } else {
      this.head = this.head.next
      this.head.prev = null
      temp.next = null
    }

    this.length--
    return temp
  }

  get(index) {
    if (index > this.length || index < 0) {
      return undefined
    }

    let temp = this.head

    if (index < this.length / 2) {
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
    const temp = this.get(index)

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
    const temp = this.get(index)

    if (!temp) {
      return false
    }

    const newNode = new Node(value)
    const prev = temp.prev

    prev.next = newNode
    newNode.next = temp
    newNode.prev = prev
    temp.prev = newNode

    this.length++
    return true

  }
  remove(index) {
    if (index === 0) {
      return this.shift()
    }
    if (index === this.length) {
      return this.pop()
    }
    const temp = this.get(index)
    if (!temp) {
      return undefined
    }
    temp.prev.next = temp.next
    temp.next.prev = temp.prev

    this.length--
    return temp
  }
}

const dll = new DoublyLinkedList(1)
dll.push(8)
dll.unshift(99)
console.log(dll.get(0))
console.log(dll.get(1))
console.log(dll.get(2))
console.log(dll.shift())
dll.push(9)
dll.push(10)
console.log(dll)
console.log(dll.pop())
console.log(dll.pop())
console.log(dll)