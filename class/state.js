class Store {

  #state

  constructor(initialState) {
    this.#state = new Map(initialState)
  }

  get(id) {
    return this.#state.get(id)
  }


  set(id, data) {
    return this.#state.set(id, data)
  }

  delete(id) {
    return this.#state.delete(id)
  }

  getAll() {
    return [...this.#state]
  }

}

const myStore = new Store();

for (let i = 0; i < 10; i++) {
  myStore.set(i, { index: i })
}

for (let i = 0; i < 10; i++) {
  console.log(myStore.get(i))
}

console.log(myStore.getAll())

for (let i = 0; i < 10; i++) {
  console.log(myStore.delete(i))
}

console.log(myStore.getAll())