/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let int = 0
  let fromFront = true
  if (target <= nums[int]) {
    int = nums.length - 1
    fromFront = false
  }
  while (int < nums.length && int >= 0) {
    if (nums[int] === target) {
      return int
    }
    int = fromFront
      ? int + 1
      : int - 1
  }
  return -1
};

console.log(search([7, 8, 9, 0, 1, 2, 3, 4, 5, 6], 4))