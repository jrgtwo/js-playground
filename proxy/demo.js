const person = {
  firstName: 'Chewie',
  lastName: 'Louise'
}

const handler = {
  get(target, prop) {
    console.log(`getting ${prop}: ${target[prop]}`)
    return Reflect.get(...arguments)
  },
  set(target, prop, value) {
    console.log(`Setting ${prop}: ${value}`)
    return Reflect.set(...arguments)
  }
}

const personProxy = new Proxy(person, handler)

console.log(personProxy)
console.log(personProxy.firstName)
console.log(personProxy.lastName)
console.log(person)
console.log(personProxy.firstName = 'Jonathan')
console.log(personProxy.lastName = 'Garcia')
console.log(person)
console.log(personProxy)