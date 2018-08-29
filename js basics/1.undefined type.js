// 被声明且未赋值的变量
// 函数签名且未传入值的参数
// 未创建的对象属性
// 未指定返回值的函数

let foo;
console.log(foo)

function bar(a, b){
    return [a, b]
}

console.log(bar(1)) //[1, undefined]

let p = {
    x: 1,
    y: 2
}

console.log(p.z) //undefined