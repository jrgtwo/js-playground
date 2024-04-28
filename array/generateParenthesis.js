// const generateParenthesis = (count) => {

//   const chars = ['(', ')']
//   const result = []


//   const filter = (curr, leftCount, rightCount) => {

//     if (curr.length === count * 2) {
//       result.push([...curr].join(''))
//       return
//     }

//     if (leftCount < count) {
//       curr.push(chars[0])
//       filter([...curr], leftCount + 1, rightCount)
//       curr.pop()
//     }
//     if (leftCount > rightCount) {
//       curr.push(chars[1])
//       filter([...curr], leftCount, rightCount + 1)
//       curr.pop()
//     }

//   }

//   filter([], 0, 0)
//   return result
// }



const generateParenthesis = (count) => {
  const chars = ['(', ')']
  let result = []


  const backtrack = (curr, left, right) => {
    if (curr.length === count * 2) {
      result.push(curr.join(''))
      return
    }

    if (left < count) {
      curr.push(chars[0])
      backtrack(curr, left + 1, right)
      curr.pop()
    }
    if (left > right) {
      curr.push(chars[1])
      backtrack(curr, left, right + 1)
      curr.pop()
    }
  }

  backtrack([], 0, 0)

  return result
}

console.log(
  generateParenthesis(5)
)
//generateParenthesis(3)