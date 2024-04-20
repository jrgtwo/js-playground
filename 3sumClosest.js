var threeSumClosest = function (nums, target) {
  let bestTarget = Infinity
  let curr = 0
  let left = 1
  let right = nums.length - 1

  nums.sort((a, b) => a - b)

  while (curr < nums.length - 2) {
    while (left < right) {

      const currTarget = nums[curr] + nums[left] + nums[right]
      const currDiff = Math.abs(target - currTarget)
      const bestDiff = Math.abs(target - bestTarget)

      if (currTarget === target) {
        bestTarget = target
        break
      } else if (currTarget > target) {
        right--
      } else {
        left++
      }

      bestTarget = currDiff > bestDiff ? bestTarget : currTarget

    }
    curr++
    left = curr + 1
    right = nums.length - 1
  }

  return bestTarget
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 0, 0, 0], 1))