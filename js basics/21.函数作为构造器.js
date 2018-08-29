function Foo(arg){
    return arg
}

const bar = {}

console.log([new Foo(bar) === bar])
//true