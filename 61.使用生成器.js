
function *$cards(n = 52) {
    for(let i = 0; i < n; i++) {
        yield i //yield
    }
}

let cards = [...$cards()] //...逐个解构出来yield出来的值
console.log(cards)

//生成器=>迭代器  然后用...逐个解出来