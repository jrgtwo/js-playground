// var pass = new Promise((resolve, reject) => {
//   setTimeout(() => { resolve() }, 1000)
// })
// var fail = new Promise((resolve, reject) => {
//   setTimeout(() => { reject() }, 2000)
// })

// pass.then(() => {
//   console.log('yay')
// })
// fail.then(() => {
//   console.log('yay')
// }, () => {
//   console.log('dang12')
// })


async function test() {
  try {
    const one = await new Promise((resolve) => setTimeout(() => {
      resolve(1)
    }, 1000))

    const two = await new Promise((resolve, reject) => setTimeout(() => {
      resolve(2)
    }, 1000))

    return [one, two]

  } catch (err) {
    return err
  }
}

const boom = await test()

console.log(boom)
const bam = await test()
console.log('hi')