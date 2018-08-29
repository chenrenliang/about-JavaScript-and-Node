

function *range(start = 0, end = 5){
    for(let i = start; i < end; i++){
        yield i;
    }
}

const list = range(0, 10)

console.log([...list]) //[0, ...,9]

const _start = Symbol('start'),
      _end = Symbol('end')

class Range {
    constructor(start, end){
        this[_start] = start;
        this[_end] = end;
    }

    *[Symbol.iterator](){
        const start = this[_start],
              end = this[_end];

        for(let i = start; i < end; i++){
            yield i;
        }      
    }
}    
      
const list2 = new Range(0, 10) //{..:0, ...: 10}

console.log([...list2]) // [0, ...9]