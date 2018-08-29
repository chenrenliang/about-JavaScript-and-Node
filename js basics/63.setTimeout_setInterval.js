
let i  = 0

const timer = setInterval(() => {
    console.log(i++) // 0 1 2 3 4 5 6 7 ... 18 ***
}, 100)

setTimeout(() => {
    console.log('timeout')
    clearInterval(timer)
}, 2000)

//0----19 timeout