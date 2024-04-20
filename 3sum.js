var threeSum = function (nums) {
  if (nums.length < 3) {
    return []
  }

  let store = new Set()
  nums.sort((a, b) => a - b)

  let curr = 0

  while (nums[curr] <= 0) {

    let left = curr + 1
    let right = nums.length - 1

    while (left < right) {
      if (nums[curr] + nums[left] + nums[right] === 0) {
        const toSave = `[${nums[curr]}, ${nums[left]}, ${nums[right]}]`
        store.add(toSave)
        right--
      } else if (nums[curr] + nums[left] + nums[right] > 0) {
        right--
      } else {
        left++
      }
    }
    curr++
  }

  return Array.from(store.keys(), JSON.parse)
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 0, 0, 0]))
console.log(threeSum([1, -1, -1, 0]))
console.log(threeSum([3, 0, -2, -1, 1, 2]))