const fourSum = (nums, target) => {
  let output = new Set()

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    let mid = left + 1

    if (i > right - 4) {
      break
    }
    while (left < mid) {
      mid = left + 1
      right = nums.length - 1

      while (mid < right) {

        const sum = nums[i] + nums[left] + nums[mid] + nums[right]

        if (sum === target) {
          output.add(JSON.stringify([nums[i], nums[left], nums[mid], nums[right]]))
          mid++
        } else if (sum < target) {
          mid++
        } else {
          right--
        }
      }

      left++
    }
  }

  return Array.from(output, JSON.parse)
}

console.log(
  fourSum([1, 0, -1, 0, -2, 2], 0), '\n',
  fourSum([2, 2, 2, 2, 2], 8), '\n',
  fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)
)
