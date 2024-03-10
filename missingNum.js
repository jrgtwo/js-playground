function missingNum(arr) {
  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr[i]) {
      return i;
    }
  }

  return arr.length
}

const testArr = [0, 1, 2, 4]

console.log(missingNum(testArr))