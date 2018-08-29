const arr = [1,3,1,2,2,4,3,4,1]
console.log(arrayUnique(arr))

function arrayUnique(arr) {
    return [...new Set(arr)]
}