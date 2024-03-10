function selectionSort(arr) {
  let min

  for (let i = 0; i < arr.length - 1; i++) {
    min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) {
      let temp = arr[min]
      arr[min] = arr[i]
      arr[i] = temp
    }
  }

  return arr
}


console.log(
  selectionSort([
    56, 5, 2, 2, 4, 45, 8, 9, 9, 65, 4, 3
  ])
)