function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, data) => {
        err
          ? reject(err)
          : resolve(data)
      })
    })
  }
}

function foo(url, opts, cb) {

  setTimeout(() => cb(321, 123), 2000)
}


const promisifiedFoo = promisify(foo)
console.log(await promisifiedFoo('abc', { 'a': 'b' }))
