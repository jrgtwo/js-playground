const weakset = new WeakSet()
const a = Symbol('a')
weakset.add(a)
weakset.has(a)