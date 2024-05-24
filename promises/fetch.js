async function getTodos() {
  let data, err

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    data = await res.json()
  } catch (e) {
    err = e
  }

  return err ? err : data
}

async function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(100), 3000)
  })
}
console.log(
  await getTodos()
)
setTimeout(async () => {
  console.log(await getPromise())
}, 3000)


