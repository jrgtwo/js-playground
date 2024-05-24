/**
  PROMISES
**/
const promise = new Promise((res, rej) => { res(123) })
const promiseFactory = async () => new Promise((res, rej) => {
  setTimeout(() => res(1234), 3000)
})

console.log(await promise)
console.log(await promiseFactory())

/**
  FETCH 
 */

try {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  console.log(await res.json())
} catch (e) {
  console.log(e)
}