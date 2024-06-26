// const evenJump = (arr, idx) => {
//   let toMatch = arr[idx]

//   for (let i = idx + 1; i < arr.length; i++) {
//     if (arr[i] >= toMatch) return i
//   }
//   return null
// }

// const oddJump = (arr, idx) => {
//   const toMatch = arr[idx]

//   for (let i = idx + 1; i < arr.length; i++) {
//     if (arr[i] <= toMatch) return i
//   }
//   return null
// }

// /**
// * @param {number[]} arr
// * @return {number}
// */
// var oddEvenJumps = function (arr) {

//   if (arr.length === 1) return 1

//   let results = 1

//   arr.forEach((_, i) => {
//     let count = 0
//     let index = i
//     while (index < arr.length) {
//       count++
//       index = (count % 2) === 1
//         ? oddJump(arr, index)
//         : evenJump(arr, index)

//       if (index === null) return
//       if (index === arr.length - 1) {
//         results++
//         return
//       }
//     }
//   })
//   return results
// };

// const oddEvenJumps = (arr) => {
//   let jumps = 0

//   arr.forEach((_, idx) => {
//     let i = idx
//     let curr = arr[idx]
//     let count = 0

//     while (i < arr.length) {
//       count++

//       if (i === arr.length - 1) {
//         jumps++
//         return
//       }

//       const isOdd = (count % 2) === 1

//       for (let j = i; j < arr.length; i++) {
//         if (isOdd && curr <= arr[j]) {
//           i = j
//           continue
//         } else if (!isOdd && curr >= arr[j]) {
//           i = j
//           continue
//         } else {
//           break
//         }
//       }
//     }

//   })

//   return jumps
// }

// const oddEvenJumps = (arr) => {
//   let jumps = 1

//   arr.forEach((_, idx) => {
//     let i = idx
//     let count = 0

//     let match
//     while (i < arr.length - 1) {
//       count++
//       let curVal = arr[i]

//       const isOdd = count % 2 === 1
//       innerloop: for (let j = i + 1; j < arr.length; j++) {
//         if ((isOdd && curVal <= arr[j]) || (!isOdd && curVal >= arr[j])) {
//           i = j
//           match = j
//           break innerloop
//         }
//       }

//     }
//     if (match === arr.length - 1) {
//       jumps++

//     }
//   })

//   return jumps
// }

// const oddEvenJumps = (arr) => {
//   let jumps = 0

//   arr.forEach((_, idx) => {
//     let count = 0
//     let i = idx

//     while (true) {
//       count++
//       let curVal = arr[i]
//       const isOdd = count % 2 === 1
//       let matched
//       for (let j = i + 1; j < arr.length; j++) {
//         if (
//           (isOdd && curVal <= arr[j] && (arr[j] < arr[matched] || !matched)) ||
//           (!isOdd && curVal >= arr[j] && (arr[j] > arr[matched] || !matched))
//         ) {
//           matched = j
//           i = j
//         }
//       }
//       if (!matched) break
//     }
//     if (i === arr.length - 1) {
//       jumps++
//     }

//   })
//   return jumps
// }
// const oddEvenJumps = (arr) => {
//   let jumps = 0
//   let candidates = 0


//   arr.forEach((item, index) => {
//     let count = 1
//     candidates++

//     const isOdd = count % 2 === 1
//     let smallestMatch
//     let largestMatch

//     for (let i = index + 1; i < arr.length; i++) {
//       if (isOdd) {
//         if (arr[index] <= arr[i]) {
//           if (!smallestMatch || arr[smallestMatch] !== arr[i]) {
//             smallestMatch = i
//           }
//         }
//       } else if (arr[index] >= ar[i] ) {
//         if (!largestMatch || arr[largestMatch] !== arr[i]) {

//         }
//       }
//     }

//   })

// }

// const oddEvenJumps = (arr) => {
//   let candidates = []
//   let curr = 0
//   let right = 1

//   while (true) {

//     if (arr[curr] < arr[right]) {
//       candidates.push(right)
//       right++
//     } else if (arr[curr] === arr[right]) {

//     } else {

//     }

//   }
// }
let evenCache = new Map()
let oddCache = new Map()
let evenCandidates = new Map()
let oddCandidates = new Map()

const oddJumps = (arr, index) => {
  let smallestIndex
  for (let i = index; i < arr.length; i++) {
    if (arr[index] <= arr[i] && (!smallestIndex || arr[smallestIndex] !== arr[i])) {
      smallestIndex = i
    }
  }
  oddCandidates.set(index, smallestIndex)
  return smallestIndex
}
const evenJumps = (arr, index) => {
  let smallestIndex
  for (let i = index; i < arr.length; i++) {
    if (arr[index] >= arr[i] && (!smallestIndex || arr[smallestIndex] !== arr[i])) {
      smallestIndex = i
    }
  }
  evenCandidates.set(index, smallestIndex)
  return smallestIndex
}

const oddEvenJumps = (arr) => {
  let jumps = 0

  const dfs = (idx, count) => {
    if (idx === arr.length - 1) {
      return 1
    }
    const isOdd = count % 2 === 1
    let nextJump

    if (isOdd) {
      nextJump = oddJumps(arr, idx)
    } else {
      nextJump = evenJumps(arr, idx)
    }

    if (!nextJump) {
      return
    }

    return dfs(nextJump, count + 1)
  }

  for (let i = 0; i < arr.length; i++) {
    evenCandidates = new Map()
    oddCandidates = new Map()
    if (dfs(i, 0) === 1) {
      jumps++
      oddCache = new Map([...oddCache, ...oddCandidates])
      evenCache = new Map([...evenCache, ...evenCandidates])
    }
  }
  console.log(oddCache, evenCache)
  return jumps

}

console.log(
  'result: ', oddEvenJumps([10, 13, 12, 14, 15]), ' expected: 2'
)
console.log(
  'result: ', oddEvenJumps([2, 3, 1, 1, 4]), ' expected: 3'
)
console.log(
  'result: ', oddEvenJumps([5, 1, 3, 4, 2]), ' expected: 3'
)
console.log(
  'result: ', oddEvenJumps([14, 13, 15]), ' expected: 3'
)