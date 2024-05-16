const promiseMerge = async (...args) => {
  let data, err
  try {
    data = await Promise.all(args)
  } catch (error) {
    throw error
  }

  if (err) return err

  let type = null
  const unMatched = data.some((item) => {
    let currType
    if (typeof item === 'number') currType = 'number'
    if (typeof item === 'string') currType = 'string'
    if (Array.isArray(item)) currType = 'array'
    if (Object.getPrototypeOf(item) === Object.prototype) currType = 'object'

    if (type === null) type = currType

    if (type !== currType) return true
  })

  if (unMatched) throw 'Unsupported data types'

  let init
  switch (type) {
    case 'number':
      init = 0
      break;
    case 'string':
      init = ''
      break;
    case 'array':
      init = []
      break;
    case 'object':
      init = {}
      break;
    default:
      init = false
  }

  if (init === false) throw 'Unsupported data types'

  return data.reduce((a, b) => {
    if (['number', 'string'].includes(type)) return a + b
    if (type === 'array') return [...a, ...b]
    if (type === 'object') return { ...a, ...b }
  }, init)
}

const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(new Set());
  }, 1000);
});

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Error!');
//   }, 100);
// });

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(new Set());
  }, 1300);
});

const merged = await promiseMerge(p0, p2)
console.log(merged)