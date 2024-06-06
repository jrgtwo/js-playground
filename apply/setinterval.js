// const setCancellableInterval = (cb, dur, ...args) => {

//   const timerId = setInterval(() => cb.apply(null, args), dur)
//   return () => clearInterval(timerId)
// }

// let i = 0;

// const cancel = setCancellableInterval(() => {
//   i++;
// }, 10);

// cancel(); // Called at t = 25
// console.log(i)



function promiseFactory(cb) {
  return new Promise(cb)
}

(async function () {
  const boom = await promiseFactory((res, rej) => setTimeout(() => res(123), 2000))
  console.log(boom)
})()