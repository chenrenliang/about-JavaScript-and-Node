
const arrayUnique = arr => {
    let s = new Set()

    return arr.filter(item => {
        if(s.has(item)) {
            return false
        } else {
            s.add(item)
            return true
        }
    });

}

const arr = [1,3,1,2,2,4,3,4,1]
console.log(arrayUnique(arr))

