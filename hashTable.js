class HashMap {
  length = null

  constructor(length = 10) {
    this.length = length
  }

  _map = new Map()

  static _hasher = function (str, len) {
    let hash = 0

    for (let char of str) {
      hash = (hash + char.charCodeAt(0)) % len
    }
    return hash
  }

  _getKey(str) {
    return HashMap._hasher(str, this.length)
  }

  set(key, value) {
    const keyForMap = this._getKey(key)
    const currValues = this._map.get(keyForMap) || []
    this._map.set(keyForMap, [...currValues, [key, value]])
  }

  get(key) {
    const keyForMap = this._getKey(key)
    const currValues = this._map.get(keyForMap)
    if (currValues === undefined) {
      return undefined
    }

    return currValues.find(([currKey]) => currKey === key)[1]
  }

  delete(key) {
    const keyForMap = this._getKey(key)
    const currValues = this._map.get(keyForMap)
    const currIndex = currValues.findIndex(([currKey]) => {
      return key === currKey
    });


    if (currIndex === undefined) {
      return undefined
    }
    const toDelete = currValues[currIndex]
    currValues.splice(currIndex, 1)
    return toDelete[1]
  }

  update(key, value) {
    const keyForMap = this._getKey(key)
    const currValues = this._map.get(keyForMap)
    const currIndex = currValues.findIndex(([currKey]) => {
      return key === currKey
    });
    currValues[currIndex][1] = value
    return true
  }
}


const hash = new HashMap()
hash.set('a', 1)
hash.set('b', 2)
hash.set('c', 3)
hash.set('d', 4)
hash.set('e', 5)
hash.set('f', 6)
hash.set('g', 7)
hash.set('h', 8)
hash.set('i', 9)
hash.set('j', 10)
hash.set('k', 11)
hash.set('l', 12)
hash.set('m', 13)
hash.set('n', 14)
console.log(hash.get('a'))
hash.update('k', 100)
console.log(hash.delete('k'))
console.log(hash._map)