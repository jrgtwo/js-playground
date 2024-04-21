const longestPrefix = (strs) => {

  let longestPref = strs[0]

  outer: for (let i = 1; i < strs.length; i++) {
    if (strs[i].substring(0, longestPref.length) === longestPref) {
      continue outer
    } else {
      inner: for (let j = 0; j < longestPref.length; j++) {
        if (strs[i][j] !== longestPref[j]) {
          longestPref = strs[i].substring(0, j)
          break inner
        }
      }
    }
  }

  return longestPref
}

console.log(
  '==', longestPrefix(["dog", "racecar", "car"]), '==',
  longestPrefix(["flower", "flow", "flight"])
)