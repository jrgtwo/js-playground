// function bubbleSort(arr) {
//   for (let i in arr) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr
// }


// function bubbleSort(arr) {
//   for (let i in arr) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(arr) {
  for (let i in arr) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(
  bubbleSort([
    7, 5, 12, 29, 3, 67, 8, 997, 3, 3, 3, 578, 4, 6, 9, 8, 6, 4, 2, 10
  ])
)