const values = ['', 0, undefined, null, 1, 'abc', NaN, [], {}]

console.log(values.map(v => Boolean(v)))
//false false false false true true false true true