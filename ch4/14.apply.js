
function __reverseArgs__(fn) {
    return function(){
        var args = [].slice.call(arguments)

        return fn.apply(this, args.reverse()) // [4,3,2,1]
    };
}

function foo(){
    console.log(Array.from(arguments)) //纯数组  
}

var foo2 = __reverseArgs__(foo)

foo2(1, 2, 3, 4) //4,3,2,1