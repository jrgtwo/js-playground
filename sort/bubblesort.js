export function bubbleSort(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            const temp = arr[j + 1]
            if (arr[j] > arr[j+1]) {
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr

}
