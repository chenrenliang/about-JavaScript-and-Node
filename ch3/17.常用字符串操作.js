const a = 'hello'
const b = 'WORLD'
const c = '!'

console.log(a + ' ' + b + c) //hello WORLD!

console.log(a.toUpperCase() + ' ' + b.toLowerCase() + c)
//HELLO world!

console.log(a.split('').reverse().join('')) //olleh

console.log([a.slice(2, 3), a.substr(2, 3)])
//l llo

const d = a + ' ' + b + c

console.log(d.indexOf(b)) //6

console.log(d.replace(a, a.toUpperCase()))
//HELLO WORLD!