const addItem = (data, item, type) => {
  if (data?.has(item)) {
    return false
  } else {
    data.add(item)
    return true
  }
}

const validate = (dataArr, item, type) => {
  return dataArr.find((data) => {
    if (!addItem(data, item, 'square')) return false
    return true
  })

}

const backTrack = () => {

}

const solveSudoku = (board) => {

  const SPACEHOLDER = '.'

  const rows = []
  const columns = []
  const squares = []
  const placeholderStack = []

  for (let rowId in board) {
    let row = board[rowId]

    let col, square

    for (let j in row) {
      col = j
      square = Math.floor((col / 3)) + (Math.floor(rowId / 3) * 3)

      if (!rows[rowId]) {
        rows[rowId] = new Set()
      }

      if (!columns[col]) {
        columns[col] = new Set()
      }

      if (!squares[square]) {
        squares[square] = new Set()
      }

      let item = row[j]

      if (item === SPACEHOLDER) continue


      if (!addItem(squares[square], item, 'square')) return false
      if (!addItem(rows[rowId], item, 'row')) return false
      if (!addItem(columns[col], item, 'col')) return false

    }
  }

  let rowId = 0

  let isBacktracking = false

  while (rowId < board.length) {

    let col, square
    let j = 0

    while (j < board[rowId].length) {
      let row = board[rowId]
      let item = row[j]
      col = j

      square = Math.floor((col / 3)) + (Math.floor(rowId / 3) * 3)

      if (item !== SPACEHOLDER && !isBacktracking) {
        j++
        continue
      }

      let match
      let currExists = board[rowId][j]
      let curr = currExists === '.' ? 0 : currExists

      board[rowId][j] = '.'

      inner: for (let k = curr + 1; k < 10; k++) {
        if (
          !squares[square].has(`${k}`)
          && !rows[rowId].has(`${k}`)
          && !columns[col].has(`${k}`)
        ) {
          match = k
          break inner
        }
      }

      isBacktracking = false

      if (match) {
        placeholderStack.push([square, rowId, col])

        board[rowId][j] = match
        addItem(squares[square], `${match}`, 'square')
        addItem(rows[rowId], `${match}`, 'row')
        addItem(columns[col], `${match}`, 'col')
        j++
      } else {
        //backtrack
        const lastPlace = placeholderStack.pop()

        j = lastPlace[2]
        rowId = lastPlace[1]
        square = lastPlace[0]
        const lastVal = board[rowId][j]

        isBacktracking = true
        squares[square].delete(`${lastVal}`)
        rows[rowId].delete(`${lastVal}`)
        columns[j].delete(`${lastVal}`)
      }
    }

    rowId++
  }

  return true
}

const validBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

// export const invalidBoard = [
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."]
//   , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//   , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//   , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//   , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//   , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//   , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//   , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//   , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

// export const anotherValidBoard = [
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", "3", ".", "."],
//   [".", ".", ".", "1", "8", ".", ".", ".", "."],
//   [".", ".", ".", "7", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", "1", ".", "9", "7", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", "3", "6", ".", "1", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", "2", "."]
// ]

console.log(solveSudoku(validBoard))
// console.log(isValidSudoku(invalidBoard))
// console.log(isValidSudoku(anotherValidBoard))

