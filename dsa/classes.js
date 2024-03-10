// capitalize class name
class Cookie {
  constructor(color) {
    this.color = color
  }
  getColor() {
    return this.color
  }
  setColor(color) {
    this.color = color
  }
}

let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('blue')

console.log(cookieOne.getColor())
console.log(cookieTwo.getColor())

cookieOne.setColor('Orange')
cookieTwo.setColor('red')

console.log(cookieOne.getColor())
console.log(cookieTwo.getColor())



// TO COME LATER
class LinkedList {
  constructor(value) {}

  push(value) {}

  ushift(value) {}

  insert(index, value) {}

  remove(index) {}

  shift() {}
}