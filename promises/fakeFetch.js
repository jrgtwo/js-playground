const promiseTimeout = (prom, duration) => {

  return Promise.race([
    prom,
    new Promise((_, reject) => setTimeout(() => {
      reject('Promise timeout')
    }, duration))
  ])
}

function fakeFetch(latency) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that resolves after `latency`.
    setTimeout(() => {
      resolve('Data successfully fetched!');
    }, latency);
  });
}

const response = await promiseTimeout(fakeFetch(1000), 2000)
console.log(response) // Data successfully fetched!

console.log(await promiseTimeout(fakeFetch(5000), 2000))