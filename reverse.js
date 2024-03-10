function reverse(num) {
  let newInt = parseInt(Math.abs(num).toString().split('').reverse().join(""))
  const maxSize = Math.pow(2, 31) - 1

  return newInt > maxSize
    ? 0
    : num < 0
      ? -newInt
      : newInt
}

console.log(reverse(-1234))