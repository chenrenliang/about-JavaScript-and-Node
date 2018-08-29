for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i) //5个5
    }, 100)
}

for(var i = 0; i < 5; i++){
    (function(i){
        setTimeout(function(){
            console.log(i)
        }, 100)
    })(i) //0 1 2 3 4
}

for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    }, 100) //0 1 2 3 4
}