function atoi(str) {

  let trimmed = str.trim()
  let isSigned = ['+', '-'].includes(trimmed[0])
  let sign = isSigned && trimmed[0]

  let store = []
  for (let i = isSigned ? 1 : 0; i < trimmed.length; i++) {
    const char = trimmed[i]
    const converted = parseInt(char)
    store[i] = converted
  }

  let convertedInt = 0

  for (let i = store.length - 1; i >= isSigned ? 1 : 0; i--) {
    const power = store.length - i - 1
    const multiple = 10 ** power
    const placed = store[i] * multiple
    convertedInt += placed
  }

  if (isSigned) {
    convertedInt = sign === '+'
      ? convertedInt
      : (-1 * convertedInt)
  }

  return convertedInt
}

const testStrings = [
  ['    -45', -45],
  ['-45', -45],
  ['+45', 45],
  ['45', 45]
]
testStrings.forEach((testString) => {
  const converted = atoi(testString[0])
  console.log('==START TEST==')
  console.log('Received====>', converted)
  console.log('Expected==>', testString[1])
  console.log('PASS======>', converted === testString[1])
  console.log('===END TEST===\n')
})

