function dupes1(nums) {
  const filtered = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (filtered.has(nums[i])) {
      return true
    }
    filtered.add(nums[i])
  }

  return false
};

function dupes2(nums) {
  const filtered = new Set()
  for (let num of nums) {
    if (filtered.has(num)) {
      return true
    }
    filtered.add(num)
  }

  return false
};
const test1 = []
const test2 = []

const testArr = Array.from({ length: 1000 }, () => parseInt(Math.random() * 1000));

for (let _ in testArr) {
  let t0 = performance.now()
  console.log(dupes1(testArr))
  test1.push(performance.now() - t0)

}
for (let _ in testArr) {
  let t1 = performance.now()
  console.log(dupes2(testArr))
  test2.push(performance.now() - t1)
}

test1.shift()
test2.shift()
const avg1 = test1.reduce((acc, item) => acc += item) / test1.length
const avg2 = test2.reduce((acc, item) => acc += item) / test2.length

console.log(avg1, avg2)

/// no clear winners