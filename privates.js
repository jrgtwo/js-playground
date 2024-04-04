class PrivatesTest {
  #value

  setValue(val) {
    this.#value = val
  }

  getValue() {
    return this.#value
  }
}

const privates = new PrivatesTest()
privates.setValue('helllooooo')
console.log(privates.getValue())
console.log(privates.#value)