// const dedupe = (arr) => {

//   let left = 0
//   let right = 1
//   let toSwap


//   while (left < right && right < arr.length) {
//     console.log(left, right, arr[left], arr[right])
//     console.log(arr)
//     if (arr[left] < arr[right]) {
//       left++

//     } else if (arr[left] === arr[right]) {
//       toSwap = left + 1
//     }

//     if (!!toSwap && arr[toSwap] < arr[right]) {
//       let temp = arr[toSwap]
//       arr[toSwap] = arr[right]
//       arr[right] = temp
//       left = toSwap
//       toSwap = null
//     }
//     right++

//   }

//   return arr
// }

const dedupe = (arr) => {

  let left = 0
  let right = 0 + 1

  while (right < arr.length) {
    if (arr[left] < arr[right]) {

      if (right - left > 1) {
        let temp = arr[left + 1]
        arr[left + 1] = arr[right]
        arr[right] = temp
      }
      left++
      right++
    } else if (arr[left] === arr[right]) {
      right++
    }
  }

  return arr.slice(0, left + 1)
}
console.log(
  dedupe([
    1, 2, 3, 3, 3, 4, 4, 5, 6, 7
  ])
)

