// const candy = (ratings) => {

//   let candies = ratings.length
//   let step = 0

//   ratings.forEach((item, i) => {

//     let toStep = step
//     if (i !== 0 && item > ratings[i - 1]) {
//       candies += 1 + step
//       toStep++
//     } else if (item + (step + 1) > ratings[i + 1]) {
//       toStep = 0
//       candies += 1

//     }
//     step = toStep

//   })

//   return candies
// }

const candy = (ratings) => {
  let candies = Array(ratings.length).fill(1)
  ratings.forEach((item, i) => {
    if (item > ratings?.[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  })

  let i = ratings.length
  while (i--) {
    if (ratings[i] > ratings?.[i + 1]) {
      if (candies[i] <= candies[i + 1]) {
        candies[i] = candies[i + 1] + 1
      }

    }
  }
  return candies.reduce((acc, curr) => acc + curr)

}



console.log(candy([1, 0, 2]))
console.log(candy([1, 2, 2]))
console.log(candy([1, 3, 2, 2, 1]))
console.log(candy([1, 2, 87, 87, 87, 2, 1]))
console.log(candy([5, 4, 3, 5, 6, 2]))