

function countDown(count, interval, callback) {
    if(count <= 0) return ;
    callback(count);

    var timer = setTimeout(function(){ //count => 2
        if(--count > 0){
            setTimeout(arguments.callee, interval)
        }

        callback(count); //输出1  interval后再输出0

    }, interval)

}

countDown(10, 1000, t => console.log(t))