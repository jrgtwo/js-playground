// function palindrome(str) {

//   if (str.length === 1) {
//     return str
//   }

//   let left = 0
//   let right = str.length - 1

//   let cacheLeft = ''
//   let cacheRight = ''

//   while (left <= right) {

//     if (str[left] === str[right]) {
//       if (left === right && cacheLeft.length === 0) {
//         cacheRight = str[right]
//         break
//       }
//       cacheLeft = cacheLeft + str[left]
//       cacheRight = str[right] + cacheRight
//       left++
//       right--
//       continue
//     }

//     if (str[left + 1] === str[right]) {
//       left++
//     } else if (str[right + 1] === str[left]) {
//       right--
//     } else {
//       left++
//       right--
//     }
//     cacheLeft = ''
//     cacheRight = ''
//   }

//   const combinedPalindrome = cacheLeft.length < 2
//     ? cacheLeft + cacheRight
//     : cacheLeft.substring(0, cacheLeft.length - 1) + cacheRight

//   return combinedPalindrome

// }

// function palindrome(str) {
//   if (str.length < 1) return ''

//   if (str.length === 1) return str

//   let left = null
//   let right = null

//   let currLeft = 0
//   let currRight = str.length - 1

//   while (currLeft <= currRight) {
//     if (str[currLeft] === str[currRight]) {
//       if (left === null) {
//         left = currLeft
//         right = currRight
//       }
//       currLeft++
//       currRight--
//       continue
//     }

//     if (str[currLeft + 1] === str[currRight]) {
//       currLeft++
//     } else if (str[currLeft] === str[currRight - 1]) {
//       currRight--
//     } else {
//       currLeft++
//       currRight--
//       left = null
//       right = null
//     }
//   }

//   return str.substring(left, right + 1)
// }


// function palindrome(str) {
//   if (str.length === 0) return ''
//   if (str.length === 1) return str

//   let right, left, palRight
//   let longestLen = -1
//   let longestStartIndex = -1

//   for (let i = 0; i < str.length; i++) {
//     left = i
//     right = str.length - 1
//     palRight = right

//     while (right >= left) {
//       if (str[left] === str[right]) {
//         left++
//         right--
//       } else {
//         left = i
//         right = str.length - 1 - i
//         palRight = right
//       }
//     }

//     if (i !== palRight && palRight - i > longestLen) {
//       longestStartIndex = i
//       longestLen = palRight - i
//     }
//   }

//   if (longestLen < 0) {
//     return str[0]
//   }

//   return str.substring(longestStartIndex, longestStartIndex + longestLen + 1)
// }


function palindrome(str) {

  if (str.length === 0) return ''
  if (str.length === 1) return str

  let result = ''
  for (let i = 0; i < str.length; i++) {
    for (let k = i; k < str.length; k++) {
      let subst = str.substring(i, k + 1)
      let rev = subst.split('').reverse().join('')
      if (subst === rev && subst.length > result.length) {
        result = subst
      }
    }
  }
  return result
}

const testStrs = [
  'babad',
  'cbbd',
  'ac',
  'bb',
  'ccc',
  'ccd',
  'eabcb',
  'aacabdkacaa',
  'ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy'
]


for (let str of testStrs) {
  console.log(palindrome(str))
}
