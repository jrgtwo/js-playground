

// const permuteUnique = (nums) => {
//   const usedNums = new Set()
//   let result = []

//   if (nums.length === 1) return [[...nums]]

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums.shift()
//     if (!usedNums.has(num)) {
//       usedNums.add(num)
//       let perms = permuteUnique(nums)
//       let updatedPerms = perms.map((perm) => [...perm, num])
//       result = [...result, ...updatedPerms]
//     }
//     nums.push(num)
//   }
//   return result

// }

const permuteUnique = (nums) => {
  let result = []
  if (nums.length === 1) return [[...nums]]

  const usedNums = new Set()

  for (let i = 0; i < nums.length; i++) {
    const num = nums.shift()
    if (!usedNums.has(num)) {
      usedNums.add(num)
      const perms = permuteUnique(nums).map((perm) => [...perm, num])
      result = [...result, ...perms]
    }
    nums.push(num)
  }
  return result
}

console.log(permuteUnique([0]))
console.log(permuteUnique([1]))
console.log(permuteUnique([0, 1]))
console.log(permuteUnique([0, 1, 0]))
console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([1, 2, 3]))
console.log(permuteUnique([1, 1, 2, 3]))
console.log(permuteUnique([1, 2, 3, 4]))