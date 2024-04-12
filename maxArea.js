// function maxArea(height) {

//   let selectedArea = 0

//   for (let i = 0; i < height.length; i++) {
//     const left = height[i]
//     for (let j = i + 1; j < height.length; j++) {
//       const right = height[j]

//       let currArea = 0
//       let distance = j - i
//       let h = right

//       if (left < right) {
//         h = left
//       }

//       currArea = h * distance
//       if (currArea > selectedArea) {
//         selectedArea = currArea
//       }
//     }
//   }

//   return selectedArea
// }

function maxArea(height) {

  let selectedArea = 0

  let left = 0
  let right = height.length - 1
  let currArea
  let distance

  while (left < right) {
    distance = right - left

    if (height[left] > height[right]) {
      currArea = height[right] * distance
      right--
    } else {
      currArea = height[left] * distance
      left++
    }

    if (selectedArea < currArea) {
      selectedArea = currArea
    }
  }

  return selectedArea
}


console.log(
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
)

