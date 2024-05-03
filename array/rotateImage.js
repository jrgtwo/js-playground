// const rotate = (matrix) => {

//   let i = 0
//   let j = 0
//   let matrixLen = matrix.length - 1
//   let temp = matrix[0][0]
//   let first = [0, 0]

//   while (true) {

//     let computedPosition = [j, matrixLen - i]
//     let currTemp = matrix[computedPosition[0]][computedPosition[1]]

//     matrix[computedPosition[0]][computedPosition[1]] = temp
//     temp = currTemp

//     i = computedPosition[0]
//     j = computedPosition[1]

//     if (first[0] === i && first[1] === j) {
//       j++
//       if (j > Math.ceil((matrixLen - first[0]) / 2)) {
//         i++
//         j = i
//         if (i >= Math.ceil(matrixLen / 2)) break
//       }

//       first = [i, j]
//       temp = matrix[i][j]
//     }
//   }

//   return matrix

// }


const rotate = (matrix) => {

  const matrixLen = matrix.length

  if (matrixLen === 1) return matrix

  let i = 0
  let j = 0
  let temp = matrix[0][0]
  let first = [0, 0]

  while (true) {
    const computedPos = [
      j,
      matrixLen - 1 - i
    ]
    const currTemp = matrix[computedPos[0]][computedPos[1]]
    matrix[computedPos[0]][computedPos[1]] = temp
    temp = currTemp

    i = computedPos[0]
    j = computedPos[1]

    if (first[0] === i && first[1] === j) {
      j++
      if (j >= matrixLen - 1 - i) {
        i++
        j = i
      }

      if (i > Math.floor((matrixLen - 2) / 2)) {
        break
      }
      first = [i, j]
      temp = matrix[i][j]
    }

  }
  return matrix
}


console.log(
  rotate([
    [1]
  ])
)

console.log(
  rotate([
    [1, 2],
    [3, 4]
  ])
)

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)

console.log(
  rotate([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ])
)

console.log(
  rotate([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ])
)
