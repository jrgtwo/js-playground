// var maxProfit = function (prices) {
//   let minIdx
//   let maxIdx
//   prices.forEach((price, idx) => {
//     if (price < (prices?.[minIdx] || Infinity)) {
//       minIdx = idx
//       maxIdx = idx
//     }
//     if (price > (prices?.[maxIdx] || -1)) {
//       maxIdx = idx
//     }
//   })

//   if (minIdx === Infinity || maxIdx === -1) return 0

//   return prices[maxIdx] - prices[minIdx]
//};


// const maxProfit = (prices) => {
//   let currMin = 0
//   let currMax = 0
//   let bestProfit = 0

//   while (currMin < currMax) {

//     if (prices[currMin + 1] < curr)  
//     bestProfit = Math.max(prices[currMax] - prices[currMin, bestProfit])


//   }

// }

const maxProfit = (prices) => {
  let minId = 0
  let maxProfit = 0

  prices.forEach((price, idx) => {
    maxProfit = Math.max(prices[idx] - prices[minId], maxProfit)
    if (price < prices[minId]) {
      minId = idx
    }
  })

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([2, 4, 1]))