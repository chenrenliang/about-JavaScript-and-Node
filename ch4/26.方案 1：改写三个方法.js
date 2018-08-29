
function add(...args){
    return args.reduce((a, b) => a + b)
}

function mul(...args){
    return args.reduce((a, b) => a * b)
}

function concat(...args){
    return args.reduce((a, b) => a.concat(b))
}

console.log([
    add(1, 2, 3), //6
    mul(1, 2, 3, 4), //24
    concat([1, 2], [3, 4], [5, 6]) //[1,2,3,4,5,6]
])