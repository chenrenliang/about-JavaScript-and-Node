
const a = Symbol('foo'),
      b = Symbol('foo')

 console.log([ 
     a.toString(), //Symbol(foo)
     b.toString(), //Symbol(foo)
     a === b //false
 ])   

 const c = Symbol.for('bar'), //没有 就创建一个
       d = Symbol.for('bar')  //因此 d 为同一个

console.log([
    c.toString(), //Symbol(bar)
    d.toString(), //Symbol(bar)
    c === d //true
])       