function longestPal(input) {

  if (input.length < 1) {
    return false
  }

  let longestStr = 0
  let longestPal = ''

  input.split('').forEach((_, index) => {
    let l = index
    let r = index

    while (
      l > -1
      && r < input.length
      && input[l] === input[r]
    ) {
      if (longestStr < (r - l + 1)) {
        longestStr = r - l + 1
        longestPal = input.substring(l, r + 1)
      }
      l--
      r++
    }

    l = index
    r = index + 1
    while (
      l > -1
      && r < input.length
      && input[l] === input[r]
    ) {
      if (longestStr < (r - l + 1)) {
        longestStr = r - l + 1
        longestPal = input.substring(l, r + 1)
      }
      l--
      r++
    }

  })

  return longestPal
}

const testPals = [
  // 'b',
  // 'aaaa',
  // 'ccc',
  // 'babad',
  'cbbd',
  // 'adccdb',
  // 'aaabbb',
  // 'aaaabbaa'
]

testPals.forEach((testPal) => {
  console.log(longestPal(testPal), testPal)
})