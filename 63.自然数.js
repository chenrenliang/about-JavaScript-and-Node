function *$numbers(){
    for(let i = 0; i < Infinity; i++) {
        yield i
    }
}

function *$limit(iterator, max = 1) {
    for(let i = 0; i < max; i++) {
        const result = iterator.next() //{value:..., done: ...}

        if(!result.done) {
            yield result.value 
        }
    }
}

const cards = $limit($numbers(), 52)

console.log([...cards])