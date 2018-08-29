let a = 1
    b = a,
    c = {x: 1},
    d = c

b *= 2
c.x *= 2

console.log([a, b, c.x, d.x])
//1 2  2 2