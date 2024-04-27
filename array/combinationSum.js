
const combinationSum = function (candidates, target) {

  candidates.sort((a, b) => a - b)
  let idx = 0
  let right = idx + 1
  let store = 0
  let endStack = []
  let currCount = 0
  let currStack = []

  while (idx < candidates.length) {

    if (candidates[idx] > target) break
    if (candidates[idx] === target) break

    if (candidates[idx] + currCount === target) {
      currStack.push(candidates[idx])
      endStack.push([...currStack])

      if (currStack[0] === currStack[currStack.length - 1]) {
        idx++
      }
      currCount = 0
      currStack = []

    } else if (candidates[idx] + currCount < target) {
      currStack.push(candidates[idx])
      currCount = currCount + candidates[idx]
    } else {
      if (currStack.length > 0) {
        const lastVal = currStack.pop()
        currCount -= lastVal

      }
      idx++
    }

  }

  return endStack
};

console.log(combinationSum([2, 3, 6, 7], 9))