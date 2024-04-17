// const intToRoman = (int) => {
//   const runes = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   }

//   const multiples = {
//     1: 'I',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M'
//   }

//   let numerals = []
//   let curr = int

//   if (curr > 1000) {
//     let div = Math.floor(curr / 1000)
//     let rNum = ''

//     for (let i = 0; i < div; i++) {
//       rNum = rNum + multiples[1000]
//     }

//     numerals.push(rNum)
//     curr = curr % 1000
//   }

//   if (curr > 500) {
//     let div = Math.floor((curr - 500) / 100)
//     let rNum = multiples[500]

//     for (let i = 0; i < div - 1; i++) {
//       rNum = rNum + multiples[100]
//     }

//     numerals.push(rNum)
//     curr = curr % 100
//   } else {
//     let div = Math.floor((curr / 100))
//     if (div > 3) {
//       numerals.push(`${multiples[100]}${multiples[500]}`)
//     } else {
//       let rNum = ''
//       console.log(div)
//       for (let i = 0; i < div; i++) {
//         rNum = rNum + multiples[100]
//       }
//       numerals.push(rNum)
//     }
//   }

//   return numerals.join('')
// }

const intToRoman = (int) => {

  const numMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ]
  let toReduce = int
  let convertedNumeral = []

  while (toReduce >= 0) {

    const currSymbolPair = numMap.find(([_, value]) => toReduce >= value)
    if (!currSymbolPair) {
      break
    }

    convertedNumeral.push(currSymbolPair[0])
    toReduce -= currSymbolPair[1]
  }

  return convertedNumeral.join('')
}

console.log(intToRoman(3987))
console.log(intToRoman(3487))
console.log(intToRoman(3387))