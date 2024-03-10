const testArr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]

class Snail {

  constructor(arr) {
    this.path = arr
    this.length = arr.length
  }

  traverse(rowsCount, colsCount) {

    if (rowsCount * colsCount !== this.length) {
      return []
    }

    let traversed = []

    for (let i = 0; i < this.length; i++) {
      const col = Math.floor(i / rowsCount)
      const shouldFlipRow = col % 2

      let row = ((val) => (shouldFlipRow)
        ? Math.abs(val - rowsCount) - 1
        : val
      )(i % rowsCount)


      if (!traversed[row]) {
        traversed.push([this.path[i]]);
      } else {
        traversed[row].push(this.path[i]);
      }
    }

    /**
     * rowsCount = 3
     * colsCount = 4
      index 0  = 0 0 
      index 1  = 1 0
      index 2  = 2 0 
      index 3  = 2 1
      index 4  = 1 1
      index 5  = 0 1
      index 6  = 0 2
      index 7  = 1 2
      index 8  = 2 2
      index 9  = 2 3
      index 10 = 1 3
      index 11 = 0 3
     */

    return traversed
  }

}

const snail = new Snail(testArr);
console.log(snail.traverse(5, 4))