
function countDown(count, interval, callback) {
    if(count <= 0) return ;
    callback(count);


    setTimeout(function update(){
        if(--count > 0){
            setTimeout(update, interval)
        }
        callback(count)
    }, interval)


}

countDown(10, 1000, t => console.log(t))