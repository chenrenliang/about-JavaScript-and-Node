
function __matchArgs__(fn){
    return function(...args){
        if(args.length !== fn.length){
            throw RangeError('Arguments not match!')
        }else {
          return  fn.apply(this, args)
        }
    };
}

var add = __matchArgs__((a, b, c) => a + b + c)

console.log(add(1, 2, 3)) //6

console.log(add(4, 5)) //Arguments not match!