function atoi(s) {
  if (!s || s.length === 0) {
    return 0
  }

  const whitespace = ' '

  const trimmed = s.trim()
  const isSigned = ['+', '-'].includes(trimmed[0])
  const sign = isSigned && trimmed[0]
  const bounds = [(2 ** 31), (2 ** 31) - 1]

  let convertedInt = 0

  for (let i = isSigned ? 1 : 0; i < s.length; i++) {
    const char = trimmed[i]

    if (char === whitespace) {
      break
    }

    const converted = Number(char)

    if (isNaN(converted)) {
      break
    }

    let toUpdate = (convertedInt * 10) + converted

    if (isSigned && sign === '-' && toUpdate >= bounds[0]) {
      convertedInt = bounds[0]
      break
    } else if (toUpdate > bounds[1]) {
      convertedInt = bounds[1]
      break
    }

    convertedInt = toUpdate

  }

  if (isSigned && sign === '-') {
    convertedInt = -1 * convertedInt
  }

  return convertedInt

};

const testStrings = [
  ['    -45', -45],
  ['-45', -45],
  ['+45', 45],
  ['45', 45],
  [, 0],
  ['    45 55', 45],
  ["-91283472332", -2147483648],
  ["-2147483648", -2147483648],
  ["2147483648", 2147483647],
  ["2147412345343648", 2147483647]

]
testStrings.forEach((testString) => {
  const converted = atoi(testString[0])
  console.log(converted === testString[1] ? 'PASS' : 'FAIL', '====Expected==>', testString[1], '  Received====>', converted)
})

