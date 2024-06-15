class Store {
  static CHANGE_TYPES = {
    ADD: 'ADD',
    DELETE: 'DELETE'
  }

  #store = new Map()
  #handlers = new Map()

  constructor(item) {
    if (item) this.add(item)
  }

  add({ key, data }) {
    this.#store.set(key, data)
    this.handleChange(Store.CHANGE_TYPES.ADD, key, data)
  }

  remove(key) {
    const data = this.#store.get(key)
    this.#store.delete(key)
    this.handleChange(Store.CHANGE_TYPES.DELETE, key, data)
  }

  get(key) {
    return this.#store.get(key)
  }

  getAll() {
    return [...this.#store]
  }

  handleChange(type, key, data) {
    const handlers = this.#handlers.get(key)

    if (!handlers || handlers?.length === 0) return
    handlers.forEach((cb) => {
      try {
        return cb?.(type, key, data)
      } catch (error) {
        return error
      }
    })
  }

  onChange({ key, cb }) {
    this.#handlers.set(key, [
      ...(this.#handlers.get(key) || []),
      cb
    ])
  }
}

const localStore = new Store()
localStore.onChange({
  key: 'candy',
  cb: (type, key, data) => {
    console.log('candyOnChange', type, key, data)
  }
})
localStore.onChange({
  key: 'guacamole',
  cb: (type, key, data) => {
    console.log('guacamoleOnChange', type, key, data)
  }
})
localStore.onChange({
  key: 'guacamole',
  cb: (type, key, data) => {
    console.log('guacamole2OnChange', type, key, data)
  }
})

localStore.add({ key: 'watermelon', data: 5 })
localStore.add({ key: 'candy', data: 10 })
localStore.add({ key: 'guacamole', data: 5 })
localStore.remove('guacamole')
localStore.add({ key: 'guacamole', data: 7 })
localStore.add({ key: 'rice', data: 100 })

console.log(localStore.getAll())