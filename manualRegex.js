
function reg(str, ptrn) {

  if (!str || !ptrn || str.length === 0 || ptrn.length === 0) {
    return false
  }

  let isStarred = false
  let patternStorage  = {}

  const specialChars = ['.', '*']
  let isMatched = true

  for (let ind = 0; ind < str.length; ind++) {
    const char = str[ind]
    const ptrnChar = isStarred
      ? specialChars[1]
      : ptrn[ind]

    if (ptrnChar === specialChars[0]) {
      if (ptrn[ind + 1] === specialChars?.[1]) {
        isMatched = true
        break
      }

      if (char !== str[ind - 1]) {
        isMatched = false
        break
      }

      continue
    }

    if (isStarred || ptrnChar === specialChars[1]) {
      isStarred = true
      if (char !== str[ind - 1]) {

        isMatched = false
        break
      }

      continue
    }

    if (char !== ptrnChar) {
      isMatched = false
      break
    }

  }

  return isMatched
}
const TestCases = [

  [["aab", "c*a*b"], true],
  [['abccccc', 'abc*'], true]
];

TestCases.forEach((testCase) => {
  const output = reg(...testCase[0])
  console.log('pass=>', output === testCase[1])
})