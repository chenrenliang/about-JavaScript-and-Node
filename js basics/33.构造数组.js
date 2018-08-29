const list1 = new Array(5)
console.log([
    list1.length,  //5
    list1 //[empty slot * 5]
])

const list2 = new Array(2, 3)
console.log([list2.length, list2]) //2 [2, 3]

const list3 = Array.of(5)
console.log([list3.length, list3]) //1 [5]

const list4 = Array.from({length: 5})
console.log([list4.length, list4])
//4  empty slot * 4

console.log([...list1.keys()]) //0 1 2 3 4  ?
console.log([...list4.keys()])//0 1 2 3 4  ?

console.log(Object.keys(list1))//? []
console.log(Object.keys(list4))//? '0' '1' '2' '3' '4'


