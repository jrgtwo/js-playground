// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   const specialChars = [
//     ['(', 0], [')', 0], ['{', 0], ['}', 0], ['[', 0], [']', 0]
//   ]
//   const isSpecialChar = (char) => specialChars.findIndex(([sChar]) => sChar === char)

//   for (let i = 0; i < s.length; i++) {
//     const idx = isSpecialChar(s[i])

//     if (idx >= 0) {
//       specialChars[idx][1]++
//     }
//   }

//   let int = 0
//   console.log(specialChars)
//   while (int < specialChars.length - 1) {
//     if (specialChars[int][1] !== specialChars[int + 1][1]) {
//       return false
//     }
//     int += 2
//   }


//   return true

// };

const isValid = (s) => {
  const specialChars = [
    ['[', ']'],
    ['{', '}'],
    ['(', ')']
  ]
  const isSpecialChar = (char) => specialChars.find((sChar) => sChar.includes(char))
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i]
    let [open, close] = isSpecialChar(currChar)
    if (!open) continue

    if (currChar === open) {
      stack.push(currChar)
    } else if (currChar === close) {
      if (stack[stack.length - 1] !== open) {
        return false
      } else {
        stack.pop()
      }
    }
  }

  return stack.length === 0

}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
console.log(isValid('['))
console.log(isValid(']'))