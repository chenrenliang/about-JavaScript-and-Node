
let x = 10

function foo(){
    console.log(x)
                //报错ReferenceError: x is not defined
    let x = 20 //  如果这一句改成 var 会怎样？ x => undefined  400
 
    return x * x
}

foo()