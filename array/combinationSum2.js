const combinationSum = (candidates, target) => {
  let result = []

  candidates.sort((a, b) => a - b)

  const backtrack = (j, currStack, currVal) => {
    if (currVal === target) {
      result.push([...currStack])
      return
    }
    if (currVal > target) {
      return
    }

    let prev = -1
    for (let i = j; i < candidates.length; i++) {

      if (candidates[i] === prev) continue

      currStack.push(candidates[i])
      backtrack(i + 1, currStack, currVal + candidates[i])
      currStack.pop()
      prev = candidates[i]
    }
  }

  backtrack(0, [], 0)

  return result
}

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8))