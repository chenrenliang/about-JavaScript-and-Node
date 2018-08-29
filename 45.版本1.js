const arr = [1,3,1,2,2,4,3,4,1]
console.log(arrayUnique(arr))

function arrayUnique(arr) {
    const ret = []

    for(let i = 0; i < arr.length; i++) {
        const item = arr[i],
              idx = ret.indexOf(item)
         
        if(idx < 0) {
            ret.push(item)
        }      
    }

    return ret
}