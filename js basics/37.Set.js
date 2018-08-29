function unique(arr){
    return [...new Set(arr)]
}

const arr = [1,2,2,3,4,1,3,2]

console.log(unique(arr)) //[1,2,3,4]