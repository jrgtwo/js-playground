const firstMissingPositive = (nums) => {
  nums.sort((a, b) => a - b)
  let prev = 0
  let found = nums.some((item) => {
    if (item < 1) return
    if (item === prev) return
    if ((item - 1) !== prev) {
      return true
    }
    prev = item
  })

  return prev + 1
}

console.log(firstMissingPositive([0, 2, 2, 1, 1]))