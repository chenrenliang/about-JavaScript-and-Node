function *$primeNumbers(){
    yield 2
    
    const pn = [2]

    for(let i = 3; i < Infinity; i++){
        for(let j = 0; j < pn.length; j++) {
            if(i % pn[j] === 0) break; //
            //1.不能整除
            //2.范围:
            if(i < pn[j] ** 2) {
                yield i 
                pn.push(i)
                break
            }
        }
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

const sum = [...$limit($primeNumbers(), 100)].reduce((a, b) => a + b)
console.log(sum)
