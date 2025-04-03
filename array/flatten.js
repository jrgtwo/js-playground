const testData = [
  1, 2, 3, [4, 5, 6], 7, [[8], [9, 10, 11], 12], 13
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

const flatten = (data) => {
  const flattened = data.reduce((acc, elem) => {
    if (Array.isArray(elem)) {
      return [...acc, ...flatten(elem)]
    }
    return [...acc, elem]
  }, [])

  return flattened
}

console.log(testData)
console.log(flatten(testData))

// console.log(output)