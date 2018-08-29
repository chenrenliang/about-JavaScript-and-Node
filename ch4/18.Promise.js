
setTimeout(function(){
    console.log('step 1')
    setTimeout(function(){
        console.log('step 2')
        setTimeout(function(){
            console.log('step 3')
            start = Date.now()
        }, 1500)
    }, 1000)
}, 500) //3000ms

function wait(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    });
}

wait(5000).then(function(){
    console.log(Date.now() - start) //2000ms
    console.log('step 4')

    return wait(1000)
}).then(function(){
    console.log('step 5')
    return wait(1500)
}).then(function(){
    console.log('step 6')
})

