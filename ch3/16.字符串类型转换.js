console.log([1 + 2, '1' + 2, '1' - 2])
//3 '12' -1

console.log([
    parseInt('100abc', 2), //'100' => 4
    Number('0b100') //4
]) //先转换数字

console.log(parseFloat('12.3e10xx')) //12.3e10

var foo = {
    toString() {
        return 'foo'
    }
}

console.log(foo + ' bar')
//foo bar