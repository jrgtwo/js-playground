const promiseResolve = (value) => {
  if (value instanceof Promise) return value
  if (value?.then) return new Promise(value.then.bind(value))
  return Promise.resolve(value)
}



console.log(
  await promiseResolve(6)
)

console.log(
  await promiseResolve(
    new Promise(
      (res, rej) => setTimeout(() => res(5), 1000)
    )
  )
)

console.log(
  await promiseResolve({
    then(res, rej) {
      res(10)
    }
  })
)