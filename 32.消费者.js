function consumer(fn, time) {
    let tasks = [],
        timer 

     return function(...args){
        tasks.push(fn.bind(this, ...args)) //

        if(timer == null) {
            timer = setInterval(() => {
                tasks.shift().call(this) //头部出栈  相当于队列

                if(tasks.length <= 0) {
                    clearInterval(timer)
                    timer = null
                }

            }, timer) //每个timer出队一个函数然后调用
        }
     };   
}

function add(x, y){
    let sum = x + y
    console.log(sum)
    return sum
}

let consumerAdd = consumer(add, 1000) //新函数 function(...args){....}

let sum = 0 
for(let i = 0; i <10; i++){
    consumerAdd(sum, i)
}


//调用10次
//0 - 9