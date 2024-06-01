const person = {
  name: 'Chewie',
  age: 12,
  adder: {

  }
}

console.log(person)

person.age = 11

console.log(person)

Object.freeze(person)

try {
  person.age = 100
} catch (e) {
  console.log(e)
}

person.adder.hi = 1

console.log(person)