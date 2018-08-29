let cards = generateCards(52)
console.log(cards);

function generateCards(n) {
    return Array.from({length: n}).map((_, i) => i)
}