
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

  if (s.length === 1 || numRows === 1) {
    return s
  }

  const store = []

  const window = (numRows - 1) * 2
  let offset = 0

  for (let i = 0; i < s.length; i++) {
    let row
    let currWin = i % window

    if (currWin >= numRows || (currWin === 0 && i !== 0)) {
      offset += 1
    }

    if (currWin >= numRows) {
      row = window - currWin
    } else {
      console.log(row, currWin)
      row = currWin
    }
    console.log(row, offset)
    if (!store?.[row]) {
      store[row] = []
    }
    store[row][offset] = s[i]

  }

  return store.flat().join('')
};

//const converted = convert('PAYPALISHIRING', 3)
const converted = convert('ABCABCABC', 2)

// for (let i = 0; i < full.length; i++) {
//   for (let j = 0; j < full[i].length; j++) {
//     if (!full[i][j]) {
//       full[i][j] = ' '
//     }
//   }
// }

console.log(converted)