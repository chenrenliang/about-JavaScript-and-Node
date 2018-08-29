
const foo = function bar(){
    console.log([
        typeof foo, //'function'
        typeof bar //'function'
    ])
}

foo()

console.log([
    typeof foo, //'function'
    typeof bar //'undefined'
])

const fac = function f(n){
    if( n <= 0) return 1;
    return n * f(n - 1)
}

console.log(fac(6)); //6*f(5) === 6*5*4*3*2*1 * 1 === 720