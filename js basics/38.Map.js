
const foo = {x: 1},
      bar = {x: 2}

const map = new Map()

map.set(foo, {y: 2})
map.set(bar, {y: 1})

console.log([
    map.get(foo), //{y: 2}
    map.get(bar) //{y: 1}
])