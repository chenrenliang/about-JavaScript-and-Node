const arr = [1,3,1,2,2,4,3,4,1]
console.log(arrayUnique(arr))

function arrayUnique(arr) {
    const map = {}, ret = []
    
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i]

        if(map[item] == null) { //用值作为键
            ret.push(item)
            map[item] = i 
        }
    }

    return ret
}