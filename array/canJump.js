// var canJump = function (nums) {

//   if (nums.length === 1) return true

//   let i = 0
//   while (i < nums.length - 1) {
//     if (nums[i] === 0) return false
//     if ((nums[i] + i) >= nums.length - 1) {
//       return true
//     }
//     i = nums[i] + i

//   }

//   return false
// }

// const canJump = function (nums) {
//   if (nums.length === 1) return true

//   const search = (jumpTo) => {

//     if (jumpTo >= nums.length) true
//     if (nums[jumpTo] === 0) return false

//     for (let i = 0; i < jumpTo; i++) {
//       return search(nums[i])
//     }


//   }

//   search(nums[0])
// }

// const canJump = (nums) => {

//   const makeJump = (index) => {
//     if (index >= nums.length) return true
//     if (nums[index] === 0) return false
//     let maxJump = -1
//     for (let i = index + 1; i <= index + nums[index]; i++) {
//       if (nums[index + nums[index]] === 0) continue
//       maxJump = Math.max(maxJump, nums[i] + i)
//     }

//     return maxJump > -1 ? makeJump(maxJump) : false

//   }

//   return makeJump(0)
// }

const canJump = (nums)  => {
  if (nums.length === 1) return true
  if (nums[0] === 0) return false
  let end = nums.length - 1

  for (let i = end - 1;  i > -1; i--) {
    if (nums[i] + i >= end) end = i
  }

  return end === 0

}
console.log(canJump([0, 2, 3]))
console.log(canJump([1, 2, 3]))
console.log(canJump([1, 2]))
console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([2, 5, 0, 0]))