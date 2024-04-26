const addItem = (data, item, type) => {
  if (data.has(item)) {
    console.log(data, item, type)
    return false
  } else {
    data.add(item)
    return true
  }
}

const isValidSudoku = (board) => {
  const SPACEHOLDER = '.'

  const rows = []
  const columns = []
  //const diagonal = []
  const squares = []

  for (let rowId in board) {
    let row = board[rowId]

    let col, square

    for (let j in row) {
      let item = row[j]
      col = j
      square = Math.floor((col / 3)) + (Math.floor(rowId / 3) * 3)

      if (item === SPACEHOLDER) continue


      if (!rows[rowId]) {
        rows[rowId] = new Set()
      }
      if (!columns[col]) {
        columns[col] = new Set()
      }

      if (!squares[square]) {
        squares[square] = new Set()
      }
      if (!addItem(squares[square], item, 'square')) return false
      if (!addItem(rows[rowId], item, 'row')) return false
      if (!addItem(columns[col], item, 'col')) return false

      // if (rowId === col) {
      //   if (!diagonal[0]) {
      //     diagonal[0] = new Set()
      //   }
      //   if (!addItem(diagonal[0], item, 'diagleft')) return false
      // }

      // if (rowId + col === board.length - 1) {
      //   if (!diagonal[1]) {
      //     diagonal[1] = new Set()
      //   }
      //   if (!addItem(diagonal[1], item, 'diagright')) return
      // }
    }
  }
  return true
}


const validBoard = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
  , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
  , [".", "9", "8", ".", ".", ".", ".", "6", "."]
  , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
  , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
  , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
  , [".", "6", ".", ".", ".", ".", "2", "8", "."]
  , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
  , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

export const invalidBoard = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."]
  , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
  , [".", "9", "8", ".", ".", ".", ".", "6", "."]
  , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
  , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
  , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
  , [".", "6", ".", ".", ".", ".", "2", "8", "."]
  , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
  , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

export const anotherValidBoard = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "1", "8", ".", ".", ".", "."],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "1", ".", "9", "7", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "3", "6", ".", "1", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "2", "."]
]

console.log(isValidSudoku(validBoard))
console.log(isValidSudoku(invalidBoard))
console.log(isValidSudoku(anotherValidBoard))

