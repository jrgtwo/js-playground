// const maxProfit = (prices) => {
//   let profit = 0


//   prices.forEach((price, idx) => {
//     let currMaxProfit = 0
//     for (let i = idx + 1; i < prices.length - 1; i++) {
//       currMaxProfit = Math.max(currMaxProfit, prices[i] - price)
//       if (price > prices[idx]) {
//         break
//       }
//     }

//     console.log(currMaxProfit)

//   })


//   return profit
// }

const maxProfit = (prices) => prices.reduce((profit, curr, idx) => curr < prices?.[idx + 1] ? profit += prices[idx + 1] - curr : profit, 0)


console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))