const hIndex = (citations) => {
  
  citations.sort((a, b) => a - b)
  let i = citations.length
  let h = 0

  while (i--) {
    if (citations[i] >= citations.length - i) {
      h = citations.length - i
    }
  }
  return h
}

console.log(hIndex([3, 0, 6, 1, 5]))
console.log(hIndex([1, 3, 1]))
console.log(hIndex([100]))