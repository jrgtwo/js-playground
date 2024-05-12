var rotate = function (nums, k) {
  const rotations = k % nums.length
  if (k === 0) return nums
  const spliced = nums.splice(0, nums.length - rotations)
  spliced.forEach((item) => nums.push(item))
};

const list = [1, 2, 3]
rotate(list, 4)
console.log(list)
const list2 = [1, 2, 3, 4, 5, 6, 7]
rotate(list2, 3)
console.log(list2)
const list3 = [-1, -100, 3, 99]
rotate(list3, 2)
console.log(list3)