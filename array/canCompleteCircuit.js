// const canCompleteCircuit = (gas, cost) => {

//   const someMap = new Map()
//   for (let i = 0; i < gas.length; i++) {
//     let start = gas[i] - cost[i]
//     let index = i + 1
//     if (index >= gas.length) index = 0
//     while (index !== i) {
//       start -= cost[index]
//       start += gas[index]
//       index++
//       if (index >= gas.length) index = 0
//     }
//     console.log(start)
//   }
//   console.log(Array.from(someMap))
// }

const canCompleteCircuit = (gas, cost) => {
  let currGain = 0
  let totalGain = 0
  let answer = 0

  for (let i = 0; i < gas.length; i++) {
    totalGain += gas[i] - cost[i]
    currGain += gas[i] - cost[i]

    console.log(i, totalGain, currGain, answer)

    if (currGain < 0) {
      answer = i + 1
      currGain = 0
    }
  }
  return totalGain >= 0 ? answer : -1
}
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))