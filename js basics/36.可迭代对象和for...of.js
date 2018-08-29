
const arr = [1,2 , 3, , , 6, 7]

for(const value of arr){
    console.log(value) //1,2,3, undefined, undefined, 6, 7
}

for(const key of arr.keys()){
    console.log(key) //0 1 2 3 ..6
}

console.log([...arr.keys()]); // [0,...,6]

for(const [key, value] of arr.entries()){
    console.log(`${key}, ${value}`)
    //0 1
    //1 2
    //3 undefined
}

console.log([...arr.entries()])
//[[0, 1], [1, 2], ... [3, undefined], ..]