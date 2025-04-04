const map = (data, cb = (item) => item) => {
  const mapped = []

  for (let i = 0; i < data.length; i++) {
    mapped.push(cb(data[i]))
  }

  return mapped
}

const testArray = [1, 2, 3]
const mapped = map(testArray, (item) => {
  return { count: item }
})

console.log(mapped)