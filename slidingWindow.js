// function longestStr(str) {

//   let left = 0
//   let longest = 0
//   let longestStr;
//   let charMap = new Map()

//   for (let i = 0; i < str.length; i++) {
//     const currChar = str[i]
//     const charPosInMap = charMap.get(currChar)

//     if (charPosInMap >= left) {
//       left = charPosInMap + 1
//     }

//     charMap.set(currChar, i)

//     const possibleLongest = i - left + 1
//     if (possibleLongest > longest) {
//       longest = possibleLongest
//       longestStr = str.substring(left, i + 1)
//     }
//   }


//   return [longest, longestStr]
// }

function longestStr(str) {

  let left = 0;
  let len = 0;
  let charMap = new Map()
  let longestStr;

  for (let i = 0; i < str.length; i++) {
    const currChar = str[i]
    const charPosInMap = charMap.get(currChar)


    if (charPosInMap >= left) {
      left = charPosInMap + 1
    }

    charMap.set(currChar, i)

    const possibleLen = i - left + 1
    if (possibleLen > len) {
      len = possibleLen
      longestStr = str.substring(left, i + 1)
    }
  }

  return [len, longestStr]

}

console.log('=======')
console.log(
  longestStr('abaacde')
)
console.log('=======')
console.log(
  longestStr('bbb')
)
console.log('=======')
console.log(
  longestStr(' ')
)
console.log('=======')
console.log(
  longestStr('abaa')
)
console.log('=======')
console.log(
  longestStr('aab')
)
console.log('=======')
console.log(
  longestStr('dvdf')
)
console.log('=======')
console.log(
  longestStr('abba')
)