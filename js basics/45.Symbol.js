
const _start = Symbol('start'),
      _end = Symbol('end')

class Range {
    constructor( start = 0, end = 5){
        this[_start] = start;
        this[_end] = end;
    }

    [Symbol.iterator](){
        const start = this[_start], // 0 
              end = this[_end]  //10
        
              let idx = this[_start]; //0

        return {
            next(){
                const done = idx >= end;

                return {
                    done,
                    value: !done ? idx++ : undefined
                }
            }
        }      
    }
}   

const list = new Range(0, 10)
//{Symbol(start): 0, Symbol(end): 10}

console.log([...list])
//[{done: false, value: 0}, ... {done: false, value: 9}, {done: true, value: undefined}]
//[0,1,2,3,4,5,6,7,8,9]