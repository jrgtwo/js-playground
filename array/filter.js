const filter = (data, comp) => {
  if (!data || !comp) return false

  const filtered = []

  for (let i = 0; i < data.length; i++) {
    const shouldKeep = comp(data[i])
    if (shouldKeep) filtered.push(data[i])
  }

  return filtered
}

const testArray = [1, 2, 3]

const filtered = filter(testArray, (item) => item !== 2)
console.log(filtered)