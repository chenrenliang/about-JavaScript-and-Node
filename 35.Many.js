function add(x, y) {
    return x + y
}

function sub(x, y) {
    return x - y
}

function addMany(...args) {
    return args.reduce(add)
}

function subMany(...args) {
    return args.reduce(sub)
}

console.log(addMany(1, 2, 3, 4)) // 10

console.log(subMany(1, 2, 3, 4)) //-8