const trap = (height) => {

  let left = 0
  let right = height.length - 1


  let leftMax = height[left]
  let rightMax = height[right]
  let total = 0

  while (left < right && left < height.length) {
    let currMin = Math.min(leftMax, rightMax)


    if (leftMax < rightMax) {
      if (currMin - height[left] > 0) {
        total += currMin - height[left]
      }
      left++
    } else {
      if (currMin - height[right] > 0) {
        total += currMin - height[right]
      }
      right--
    }

    if (height[left] > leftMax) {
      leftMax = height[left]
    } else if (height[right] > rightMax) {
      rightMax = height[right]
    }

  }
  return total
}

console.log(trap([4, 2, 0, 3, 2, 5]))