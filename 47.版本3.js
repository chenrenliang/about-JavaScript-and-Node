const arr = [1,3,1,2,2,4,3,4,1]
console.log(arrayUnique(arr))

function arrayUnique(arr) {
    return arr.filter((item, idx) => arr.indexOf(item) === idx)
    //第一次出现的必然相同 第二次出现的下标必然不同
}