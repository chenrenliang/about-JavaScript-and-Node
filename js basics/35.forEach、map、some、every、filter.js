const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.forEach(item => {
    console.log(item); //1-10
})

const arr2 = arr.map(item => item - 1); //[0, ..., 9]
console.log(arr2);//[0, ..., 9]

console.log(arr.some(item => item < 0)) //false 
console.log(arr.every(item => item > 0)); //true 

const arr3 = arr.filter(item => item % 2); //[1, 3, 5, 7, 9]
console.log(arr3)
