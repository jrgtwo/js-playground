export function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) {

            if ( arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            const temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = temp
        }
    }

    return arr
}
