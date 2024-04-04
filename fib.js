function fib(end) {
  let left = 0
  let right = 1
  let fibSequence = [0, 1]
  while (right < end - 1) {
    fibSequence.push(fibSequence[left] + fibSequence[right])
    left++
    right++
  }
  return fibSequence
}

const fibSeq = fib(20)
console.log(fibSeq[fibSeq.length - 1])
