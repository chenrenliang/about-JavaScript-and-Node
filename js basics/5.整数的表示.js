const numbers = [
    0b100, //4
    0o100, //64
    100, //100
    0x100, //256
    1e2, //100
    -100, //-100
    -1e2 //-100
]

console.log(numbers)

console.log([
    Number.MAX_SAFE_INTEGER, // Math.pow(2, 53) -1  
    2 ** 53 - 1,
  (2 ** 53 - 1) == Number.MAX_SAFE_INTEGER  //true
])

const a = Number.MAX_SAFE_INTEGER, //2^53-1
      b = a + 1, //2^53
      c = a + 2,// 2^53   √√√√
      d = a + 3//2^53 + 2

console.log([a, b, c, d ])      