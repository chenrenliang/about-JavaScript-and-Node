Array.prototype.contains = function(item) {
    return this.indexOf(item) >= 0
}

const arr = [1, 2, 3, 4]
for(let key in arr) {
    if(arr.hasOwnProperty(key)) {
        console.log(key) // '0' '1' '2' '3'
    }
}

for(let [ key, value ] of Object.entries(arr)){
    console.log(key, typeof key)  // '0' '1' '2' '3'  string
}