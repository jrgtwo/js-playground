
function funFunc(...args) {
  console.log(args.length)
}

function funnerFunc() {
  console.log(Object.keys(arguments).length)
}
let i = 0
while (i < 10) {
  console.time('...args')

  funFunc()
  funFunc(1)
  funFunc('a', [1, 2])
  funFunc('a', 2, { 3: 4 }, [5, 6])
  console.timeEnd('...args')

  i++;
}

i = 0;
while (i < 10) {

  console.time('arguments')
  funnerFunc(
    'a', 2, { 3: 4 }, [5, 6],
    'a', 2, { 3: 4 }, [5, 6],
    'a', 2, { 3: 4 }, [5, 6],
    'a', 2, { 3: 4 }, [5, 6],
    'a', 2, { 3: 4 }, [5, 6],
  )
  console.timeEnd('arguments')
  i++;
}


// arguments is 10x faster!