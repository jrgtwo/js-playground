// const permute = (nums) => {

//   if (nums.length === 1) return nums

//   let permCount = ((nums.length - 1) * nums.length)
//   let permPerPos = nums.length - 1
//   let perms = []

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < permCount; j++) {
//       if (!perms[j]) {
//         perms[j] = []
//       }
//       const currLoc = (i + Math.floor(j / permPerPos)) % nums.length
//       console.log(i, currLoc, nums[i])
//       perms[j][currLoc] = nums[i]
//     }
//   }

//   return perms
// };

// const permute = (nums) => {
//   if (nums.length === 1) return nums
//   const perms = []
//   for (let i = 0; i < nums.length; i++) {
//     perms[i] = [...nums]
//     const currEnd = nums.pop()
//     nums.unshift(currEnd)
//   }
//   const reversed = []
//   if (nums.length > 2) {
//     for (let i = 0; i < perms.length; i++) {
//       reversed.push(perms[i].reverse())
//     }
//   }

//   return [...perms, ...reversed]
// }

// const permute = (nums) => {
//   let perms = []

//   const dfs = (idx, currPos, currPerm) => {

//     if (idx > nums.length) return
//     if (currPos >= nums.length) {
//       perms.push(currPerm)
//       return
//     }
//     console.log(idx, currPos, currPerm)
//     dfs(idx, currPos + 1, [...currPerm, nums[(currPos + idx) % nums.length]])

//     dfs(idx + 1, currPos + idx, [...currPerm, nums[(currPos + idx) % nums.length]])

//   }

//   dfs(0, 0, [])

//   return perms
// }

const permute = (nums) => {
  let result = []

  if (nums.length === 1) {
    return [[...nums]]
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums.shift()
    let perms = permute(nums)

    const newPerms = perms.map((perm) => [...perm, num])
    result = [...result, ...newPerms]
    nums.push(num)
  }

  return result
}



console.log(permute([1, 2, 3]))
// console.log(permute([1, 2, 3]))
// console.log(permute([0, 1]))
// console.log(permute([0]))