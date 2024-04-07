function isIntPal(int) {

  if (!int || int.length === 0) {
    return false
  }

  if (int.length === 1) {
    return true
  }

  const str = String(int)
  let isPal = true

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      isPal = false
      break
    }
  }

  return isPal
}

const testCases = [
  [1, true],
  [11, true],
  [12, false],
  [121, true],
  [123, false],
  [-121, false],
  [123454321, true]
]

for (let testCase in testCases) {
  const test = isIntPal(testCases[testCase][0])
  console.log(`${test === testCases[testCase][1] ? 'PASS' : 'FAIL'}==Received->${test}==Expected->${testCases[testCase][1]}`)
}
