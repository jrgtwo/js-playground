// I had recursion on the brain, went a bit crazy the first pass :)
// const jump = (nums) => {
//   let len = nums.length - 1
//   console.log(nums, len, nums.length)
//   if (len === 0) return 0
//   let result = Infinity

//   const filter = (start, total) => {
//     console.log(start, total, result)
//     if (nums[start] >= (len - start)) {
//       console.log('result', result, start, nums[start])
//       result = Math.min(total + 1, result)
//       return
//     }

//     //    if (result < Infinity) return
//     if (nums[start] === 0) {
//       return
//     }
//     for (let i = nums[start]; i > 0; i--) {
//       console.log('filtering(', nums[start], total, ')')
//       filter(start + i, total + 1)
//     }
//   }
//   console.log('huh')
//   filter(0, 0)
//   return result
// }

const jump = (nums) => {

  if (nums.length === 1) return 0
  let result = 0
  let right = 0
  let currLongest = 0
  let i = 0

  while (i < nums.length) {
    const currJumps = nums[i]

    if (i > right) {
      result++
      right = currLongest
    }
    currLongest = Math.max(currLongest, currJumps + i)
    i++
  }

  return result
}

console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([0]))
console.log(jump([1, 2]))
console.log(jump([1, 2, 3]))
console.log(jump([5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5]))
console.log(jump([9, 8, 2, 2, 0, 2, 2, 0, 4, 1, 5, 7, 9, 6, 6, 0, 6, 5, 0, 5]))