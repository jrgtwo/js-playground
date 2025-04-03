const testData = [
  1, 2, 3, [4, 5, 6], 7, [[8], [9, 10, 11], 12], 13
]

const testData2 = [
  1, 2, 3, [4, [5, [6, 7], 8], 9], 10, [[11], [12, 13, { 14: 15 }], 16], 17
]

const toFlatten = () => {

}



// const flatten = (data) => {
//   const output = []
//   data.forEach((item) => {
//     if (Array.isArray(item)) {
//       flatten(item)
//     } else {
//       output.push(item)
//     }
//   })

// }
// console.log(output)

const flatten = (data) => data.reduce((acc, elem) => {
  if (Array.isArray(elem)) return [...acc, ...flatten(elem)]

  return [...acc, elem]
}, [])

console.log(testData)
console.log(flatten(testData))
console.log('=======')
console.log(testData2)
console.log(flatten(testData2))

