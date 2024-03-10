function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    if (arr[i] < arr[j]) {
      let min = i
      while (j >= 0) {
        if (arr[j] > arr[min]) {
          let temp = arr[j]
          arr[j] = arr[min]
          arr[min] = temp
          min = j
        } else {
          break
        }
        j--
      }
    }
  }

  return arr
}

console.log(insertionSort([
  3456, 5, 7, 4, 23, 3, 3, 5, 66, 7765, 33, 444, 7, 898, 34
]))