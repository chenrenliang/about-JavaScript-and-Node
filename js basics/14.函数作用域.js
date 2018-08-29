
var value = 'outer'

function foo(){
    var value = 'inner'
    console.log(value) //inner
}

foo()

console.log(value) //outer 

//IIFE
;(function(){
    var local = 'local'

    console.log(local) //local
}())

console.log(typeof local) //undefined