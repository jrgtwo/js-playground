async function promiseAny(iterable) {
  let count = iterable.length
  if (count === 0) return Promise.reject(new AggregateError([]))

  return new Promise((resolve, reject) => {
    const errors = []
    iterable.forEach(async (prom, idx) => {
      try {
        let data = await prom
        resolve(data)
      } catch (err) {
        errors[idx] = err
        count--
        if (count === 0) {
          reject(new AggregateError(errors))
        }
      }
    })
  })
}

// console.log(
//   await promiseAny([])
// )

// console.log(
//   await promiseAny([
//     new Promise((resolve) => {
//       resolve(1)
//     }),
//     new Promise((resolve) => {
//       setTimeout(resolve.call(null, 2), 1000)
//     })
//   ])
// )

console.log(
  await promiseAny([
    new Promise((resolve) => {
      setTimeout(() => resolve(1), 2000)
    }),
    new Promise((resolve) => {
      setTimeout(() => resolve(2), 1000)
    }),
    new Promise((resolve) => {
      setTimeout(() => resolve(3), 10000)
    })
  ])
)

try {
  console.log(
    await promiseAny([
      new Promise((_, reject) => {
        setTimeout(() => reject(1), 2000)
      }),
      new Promise((_, reject) => {
        setTimeout(() => reject(2), 1000)
      }),
      new Promise((_, reject) => {
        setTimeout(() => reject(3), 10000)
      })
    ])
  )
} catch (err) {
  console.log(err)
}

console.log('hello')