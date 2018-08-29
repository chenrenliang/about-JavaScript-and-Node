
function iterative(fn) {
    return function(...args) {
        return args.reduce(fn.bind(this))
    };
}

const add = iterative((x, y) => x + y)
const sub = iterative((x, y) => x - y)

console.log(add(1, 2, 3, 4)) // 10
console.log(sub(1, 2, 3, 4)) //-8