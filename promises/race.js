
async function promiseRace(iterable = []) {

  return new Promise((resolve, reject) => {
    if (iterable.length === 0) return
    iterable.forEach(async (prom) => {
      try {
        const val = await prom;
        resolve(val)
      } catch (err) {
        reject(err)
      }
    })
  })

}

const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 1200);
});

const boom = await promiseRace([p0, p1])

console.log(boom)