
console.log(a === undefined) //true

var a = 10

function foo(){

    console.log([a, i]) //undefined undefined
    var a = 20

    for(var i = 0; i < a; i++){
         //do sth.
    }

    console.log([a, i]) //20 20
}

foo()