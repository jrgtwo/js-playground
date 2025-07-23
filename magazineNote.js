const canCreateNote = (message, magazine) => {
  const magazineLetters = new Map()

  magazine.split('').forEach((letter) => {
    const count = magazineLetters.get(letter) || 0
    magazineLetters.set(letter.toLowerCase(), count + 1)
  })

  for (let letter of message.split('')) {
    const magCount = magazineLetters.get(letter.toLowerCase())
    if (!magCount) return false

    if (magCount - 1 < 0) return false
    magazineLetters.set(letter.toLowerCase(), magCount - 1)
  }

  return true
}

console.log(canCreateNote('Hello World!', 'Some Long words that Have all the letters that We NEed Hello !! We have it'))
console.log(canCreateNote('Hello World!', 'Hello World'))