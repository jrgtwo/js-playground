var twoSum = function (nums, target) {
  const len = nums.length;
  let i, j;

  loop1:
  for (i = 0; i < len; i++) {
    let val = nums[i]
    for (j = i + 1; j < len; j++) {
      let curr = nums[j]
      const sum = val + curr;
      if (sum === target) {
        break loop1;
      }
    }
  }

  return [i, j]

};

console.log(twoSum([0, 1, 2], 3));