

// const removeElem = (nums, val) => {

//   let left = 0
//   let right = nums.length - 1

//   nums.sort((a, b) => a - b)
//   while (left < right) {

//     if (nums[left] === val) {
//       const temp = nums[left]
//       if (nums[right] === val) {
//         while (nums[right] === val && right > left) {
//           right--
//         }
//       }
//       nums[left] = nums[right]
//       nums[right] = temp
//       right--
//     } else {
//       left++
//     }

//   }

//   return { left, nums }
// }

// var removeElem = function (nums, val) {
//   let left = 0
//   let right = nums.length - 1
//   nums.sort((a, b) => a - b)

//   if (left === right) {
//     if (nums[left] === val) {
//       return 0
//     } else {
//       return 1
//     }
//   }

//   while (left < right) {
//     if (nums[left] === val) {
//       if (nums[right] === val) {
//         while (nums[right] === val && right > left) {
//           right--
//         }
//       }
//       const temp = nums[left]
//       nums[left] = nums[right]
//       nums[right] = temp
//       right--
//     }
//     if (left > right) break
//     left++

//   }

//   return left
// // };

// var removeElement = function(nums, val) {
//   let left = 0;
//   for (let right = 0; right < nums.length; right++) {
//       if (nums[right] !== val) {
//           const temp = nums[left]
//           nums[left] = nums[right]
//           nums[right] = temp
//           left++
//       }
//   }
//   return left
// };

// const removeElem = (nums, val) => {
//   let left = 0

//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== val) {
//       const temp = nums[left]
//       nums[left] = nums[right]
//       nums[right] = temp
//       left++
//     }
//   }
//   return left
// }

const removeElem = (nums, val) => {
  let left = 0

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      const temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
    }
  }

  return left
}
console.log(
  removeElem([1, 2, 3, 3, 4, 5, 6, 4, 2, 2, 34, 45, 3, 3], 3),
  removeElem([3, 1, 2, 3, 3, 4, 5, 6, 4, 2, 2, 34, 45, 3, 3], 3),
  removeElem([3, 2, 2, 3], 3),
  removeElem([2], 3),
  removeElem([1], 1),
  removeElem([3, 3], 5)
)