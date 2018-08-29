
function generateCards(n) {
    const ret = []
    for(let i = 0; i < n; i++) {
        ret.push(i)
    }
    return ret
}

let cards = generateCards(52)
console.log(cards) // [0~51]