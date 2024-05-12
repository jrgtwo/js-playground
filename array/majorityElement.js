/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const numsMap = new Map()
  nums.forEach((item) => {
    numsMap.set(
      item, (numsMap.get(item) || 0) + 1
    )
  })

  const result = [...numsMap.entries()].find((key) => key[1] > Math.floor(nums.length / 2))

  return result[0]
};

console.log(majorityElement([3, 2, 3]))
