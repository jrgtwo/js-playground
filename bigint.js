const bigNumber = 9007199254740991
console.log(bigNumber)
console.log(bigNumber + 1) //9007199254740991
console.log(bigNumber + 2) //9007199254740992
console.log(bigNumber + 3) //9007199254740992
console.log(bigNumber + 4) //9007199254740994
console.log(bigNumber + 5) //9007199254740996
console.log(bigNumber + 6) //9007199254740996
console.log(bigNumber + 7) //9007199254740996
console.log(bigNumber + 8) //9007199254740998
console.log(bigNumber + 9) //9007199254741000
console.log(bigNumber + 10)//9007199254741000

const bigInt = 9007199254740991n
console.log(bigInt)

try {
  (bigInt + 2)
} catch (e) {
  console.log(e)
}


console.log(bigInt + 1n) //9007199254740992n
console.log(bigInt + 2n) //9007199254740993n
console.log(bigInt + 3n) //9007199254740994n
console.log(bigInt + 4n) //9007199254740995n
console.log(bigInt + 5n) //9007199254740996n
console.log(bigInt + 6n) //9007199254740997n
console.log(bigInt + 7n) //9007199254740998n
console.log(bigInt + 8n) //9007199254740999n
console.log(bigInt + 9n) //90071992547401000n