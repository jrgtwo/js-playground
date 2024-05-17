async function promiseAllSettled(iterable) {
  if (iterable.length === 0) return Promise.resolved([])


  return new Promise((resolve) => {
    let finished = []
    let fullCount = iterable.length
    iterable.forEach(async (prom, idx) => {
      try {
        let data = await prom;
        finished[idx] = {
          status: 'fulfilled',
          data
        }
      } catch (err) {
        finished[idx] = {
          status: 'rejected',
          reason: err
        }
      }
      fullCount--
      if (fullCount === 0) {
        resolve(finished)
      }
    })

  })

}
console.log(performance.now())
console.log(
  await promiseAllSettled([
    new Promise((res) => setTimeout(() => res(789), 4000)),
    new Promise((res) => setTimeout(() => res(123), 1000)),
    new Promise((_, rej) => setTimeout(() => rej(456), 2000)),
    new Promise((res) => setTimeout(() => res(789), 1000))
  ])
)
console.log(performance.now())