function factorial(base) {
  let temp = base

  if (temp <= 1) {
    return 1
  }
  return base * factorial(temp - 1)

}

console.log(factorial(20))