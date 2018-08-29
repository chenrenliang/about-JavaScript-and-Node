
var str = 'my string'
console.log(str.charAt(5)) //r

var charArray = str.split('') //Array.from(str)
console.log(charArray)
//['m', 'y', ' ','s', 't', 'r', 'i', 'n', 'g']

console.log(str.charCodeAt(5), str.charCodeAt(6))
//114 105

console.log(String.fromCharCode(114, 105)) //'ri'

console.log(String.fromCharCode(  ...charArray.map(c => c.charCodeAt(0))))

//'my string'