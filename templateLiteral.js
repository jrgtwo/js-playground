function currency(strings, ...values) {
  return strings.reduce((result, string, i) => {
    let value = values[i - 1]
    if (typeof value === "number") {
      value = `${value.toFixed(2)}`
    }
    return result + value + string
  })
}

const price = 19.5005
const formatted = currency`The total price is ${price}`

console.log(formatted)


const coolFunc = (strings, ...values) => {
  console.log(strings, values)
  return 'hi'
}

console.log(coolFunc`some ${5} ${7}`)
