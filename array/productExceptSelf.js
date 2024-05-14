var productExceptSelf = function (nums) {
  const answer = []
  const leftProducts = []

  let temp = 1
  nums.forEach((item) => {
    leftProducts.push(temp)
    temp = temp * item
  })

  let i = leftProducts.length
  temp = 1
  while (i--) {
    const left = leftProducts[i]
    answer[i] = left * temp
    temp = temp * nums[i]
  }


  return answer
};

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))