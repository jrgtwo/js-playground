const groupAnagrams = (strs) => {
  const groups = new Map()

  strs.forEach((str) => {
    const sorted = str.split('').sort().join('')

    if (groups.has(sorted)) {
      groups.set(sorted, [...groups.get(sorted), str])
    } else {
      groups.set(sorted, [str])
    }
  })
  return groups
}

const groupMap = groupAnagrams(
  ["eat", "tea", "tan", "ate", "nat", "bat"]
)

for (let i = 0; i < 1000; i++) {
  let test = [...groupMap.values()]
}

for (let i = 0; i < 1000; i++) {
  let test = Array.from(groupMap.values())
}




let start = performance.now()
for (let i = 0; i < 10000; i++) {
  let test = [...groupMap.values()] // WINNER 
}
let end = performance.now()
console.log(end - start)

start = performance.now()
for (let i = 0; i < 10000; i++) {
  let test = Array.from(groupMap.values())
}
end = performance.now()
console.log(end - start)