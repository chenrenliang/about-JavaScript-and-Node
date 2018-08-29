const value = 'outer'

{
    const value = 'inner'
    console.log(value) //inner
}
console.log(value) //outer 

let i = 0;
for(let i = 0; i < 5; i++){
    console.log(`inner: ${i}`)
    //0-4
}
console.log(`outer: ${i}`) //0