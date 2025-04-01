const testData = [
  1, 2, 3, [4, 5, 6], 7, [[8], [9, 10, 11], 12], 13
]

const output = []

const flatten = (data) => {
  data.forEach((item) => {
    if (Array.isArray(item)) {
      flatten(item)
    } else {
      output.push(item)
    }
  })
}

flatten(testData)

console.log(output)