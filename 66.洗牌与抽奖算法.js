
function *$numbers() {
    for(let i = 0; i < Infinity; i++) {
        yield i
    }
}

function *$limit(iterator, max = 1) {
    for(let i = 0; i < max; i++) {
        const result = iterator.next()

        if(!result.done) {
            yield result.value 
        }
    }
}

function *$pickCard(...cards) {
    for(let i = cards.length - 1; i >= 0; i--) {
        const pickedIndex = Math.floor(Math.random() * i)
        const tmp = cards[pickedIndex]
        cards[pickedIndex] = cards[i]

        cards[i] = tmp 

        yield cards[i]
    }
}

const cards = $limit($numbers(), 52) //生成器 => 迭代器

const pickCard = $pickCard(...cards) //迭代器

// console.log([...pickCard]) //52个

const pickTen = $limit(pickCard, 10)

console.log([...pickTen])

