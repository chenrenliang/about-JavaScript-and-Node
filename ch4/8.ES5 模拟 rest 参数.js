

function __rest__(fn) {
    var len = fn.length;
    return function(){
        var args = [].slice.call(arguments, 0, len - 1) //0~len-2  
        var rest = [].slice.call(arguments, len - 1); //len-1 ~最后 0~1

        return fn.apply(this, args.concat([rest]))
    };
}

var add = __rest__(function(args) { //fn.length === 1  rest 为从args后面的参数开始
    return args.reduce(function(a, b) {
        return a + b;
    })
}); //args 与 return function 的args重名

console.log(add(1, 2, 3, 4))
//10