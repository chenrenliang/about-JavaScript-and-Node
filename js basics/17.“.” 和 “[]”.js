const obj = {
    x: 1,
    y: 2,
    ab: 3
}

console.log([
    obj.x,  //1
    obj['y'], //2
    obj['a' + 'b'] //3
])

const key = 'foo'.toUpperCase()

const obj2 = {
    [key]: 'bar'
}//解析成FOO: 'bar'

console.log(obj2[key], obj2.FOO) //bar bar 