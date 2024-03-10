const testArr = Array.from({ length: 100 }, (_, ind) => ind)
console.log(testArr)
const len = testArr.length
console.log(len * (len + 1))
console.log((len * (len + 1)) >> 1)

let sum = 0;
console.log(testArr.reduce((acc, item) => acc += item))