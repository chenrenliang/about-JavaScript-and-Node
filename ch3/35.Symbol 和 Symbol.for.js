
const mySymbol = Symbol('sth')
const mySymbol2 = Symbol('sth')

console.log(mySymbol === mySymbol2) //false 

console.log([
    mySymbol.toString(),  //Symbol(sth)
    typeof mySymbol //'symbol'
])

const globalSymbol = Symbol.for('sth')

console.log(Symbol.for('sth') === globalSymbol) //true

let myObj = {
    [mySymbol] : 0, 
    [mySymbol2]: 1
}

console.log([
    myObj[mySymbol], //0
    myObj[mySymbol2] //1
])