const reverse = (arr, start, end, once) => {
  let temp
  while (start < end) {
    temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--

    if (once) {
      break
    }
  }
  return arr
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

  let toSwap = nums.length - 2

  while (toSwap >= 0) {
    if (nums[toSwap + 1] > nums[toSwap]) {
      break
    }
    toSwap--
  }

  if (toSwap >= 0) {
    let gap = toSwap + 1
    while (nums[toSwap] < nums[gap]) {

      gap++
    }
    reverse(nums, toSwap, gap - 1, true)
  }

  reverse(nums, toSwap + 1, nums.length - 1)

  return nums
};

console.log(nextPermutation([1, 2, 3]))
console.log(nextPermutation([2, 3, 1]))
console.log(nextPermutation([3, 2, 1]))