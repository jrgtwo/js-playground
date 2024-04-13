// function fib(end) {
//   let left = 0
//   let right = 1
//   let fibSequence = [0, 1]
//   while (right < end - 1) {
//     fibSequence.push(fibSequence[left] + fibSequence[right])
//     left++
//     right++
//   }
//   return fibSequence
// }

// const fibSeq = fib(20)
// console.log(fibSeq[fibSeq.length - 1])


const isInFib = (value) => {

  if (!value) return false

  const val = parseInt(value)

  if (Number.isNaN(val) || val < 0) return false

  let left = 0
  let right = 1
  let fib = [0, 1]

  while (fib[fib.length - 1] <= val) {

    if ([fib[left], fib[right]].includes(val)) {
      return true
    }

    fib.push(fib[left] + fib[right])
    left++
    right++
  }

  return false
}
for (let i = 0; i < 100; i++) {
  if (isInFib(i)) console.log(i)
}

console.log('a', isInFib('a'))
console.log(undefined, isInFib(undefined))
console.log(null, isInFib(null))
console.log('1', isInFib('1'))