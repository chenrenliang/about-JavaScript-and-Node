
const a = new Array(10)
let numbers = a.map((item, i) => i) //跳过空slot 
console.log(numbers) //10 * empty slot

a.fill() //这样可以遍历了
numbers = a.map((item, i ) => i)
console.log(numbers) // [0~9]

const b = Array.from({length: 10})

numbers =  b.map((item, i) => i * 2)

console.log(numbers) //[0, 2, 4, ...]
