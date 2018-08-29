const a = new Array(10),
      b = new Array(10, 9),
      c = new Array(10, 9, 8)

console.log(a, b, c)
//10 * empty slot      

const d = Array.of(10),
      e = Array.of(10, 9),
      f = Array.of(10, 9, 8)

console.log(d, e, f)
//[10] [10, 9] [10,9,8]      