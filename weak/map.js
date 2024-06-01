const weakmap = new WeakMap()
let a = Symbol('a')
weakmap.set(a, 1)
weakmap.set(Symbol('b'), 2)
weakmap.set(Symbol('c'), 3)

console.log(weakmap.has(a))
