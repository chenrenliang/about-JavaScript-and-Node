
function *$factorials(){
    let  n = 1
    for(let i = 1; i < Infinity; i++){
        yield n *= i
        //1
        //1*2
        //1*2*3
        //...
    }
}

function *$limit(iterator, max = 1) {
    for(let  i = 0; i < max; i++) {
        let result = iterator.next() // {value, done}

        if(!result.done) {
            yield result.value 
        }
    }
}

const numbers = $limit($factorials(), 10)

console.log([...numbers])
//1
//1*2
//1*2*3
//1*2*3*4
//...