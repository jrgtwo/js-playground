import { bubbleSort } from "./bubblesort.js";
import { insertionSort } from "./insertionsort.js";
import { selectionSort } from "./selectionSort.js";

function runSort(func, label, arrLen = 1000, loopLen = 10) {
  console.log(arrLen)
  let i = 0;
  while (i < loopLen) {

    let testArr = []
    for (let i = 0; i < arrLen; i++) {
      testArr.push(Math.floor(Math.random() * arrLen))
    }

    console.time(label)
    func([...testArr])
    console.timeEnd(label)

    i++;
  }
}

let arrLen = process.argv[2];
let loopLen = process.argv[3];

runSort(bubbleSort, 'bubbleSort', arrLen, loopLen)        // Third Place  - ~0.9ms for 1000 records
runSort(selectionSort, 'selectionSort', arrLen, loopLen)  // Second Place - ~0.4ms for 1000 records
runSort(insertionSort, 'insertionsSort', arrLen, loopLen) // The Winner   - ~0.2ms for 1000 records
