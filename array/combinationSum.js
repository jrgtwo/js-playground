
// const combinationSum = function (candidates, target) {

//   candidates.sort((a, b) => a - b)
//   let idx = 0
//   let right = idx + 1
//   let store = 0
//   let endStack = []
//   let currCount = 0
//   let currStack = []

//   while (idx < candidates.length) {

//     if (candidates[idx] > target) break
//     //if (candidates[idx] === target) break

//     if (candidates[idx] === target, candidates[idx] + currCount === target) {
//       currStack.push(candidates[idx])
//       endStack.push([...currStack])

//       if (currStack[0] === currStack[currStack.length - 1]) {
//         const val = currStack.shift()
//         currCount -= val
//         idx++
//       } else {
//         currCount = 0
//         currStack = []
//       }


//     } else if (candidates[idx] + currCount < target) {
//       currStack.push(candidates[idx])
//       currCount = currCount + candidates[idx]
//     } else {
//       if (currStack.length > 0) {
//         const lastVal = currStack.pop()
//         currCount -= lastVal
//       }
//       idx++
//     }

//   }

//   return endStack
// };

const combinationSum = (candidates, target) => {
  let result = []

  const dfs = (i, curr, total) => {
    console.log(i, curr, total)
    if (total === target) {
      result.push([...curr])
      return
    }
    if ((i >= candidates.length) || total > target) {
      return
    }

    curr.push(candidates[i])

    dfs(i, curr, total + candidates[i])
    curr.pop()
    dfs(i + 1, curr, total)
  }

  dfs(0, [], 0)
  return result
}


console.log(combinationSum([2, 3, 6, 7], 7))