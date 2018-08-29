function once(fn){
    return function(...args) {
        if(fn) {
            let ret = fn.apply(this, args)
            fn = null
            return ret 
        }
    }
}

function foo(idx) {
    console.log(`I'm called: ${idx}`)
}

foo(0)
foo(1)
foo(2)

foo = once(foo)

foo(3)
foo(4)
foo(5)