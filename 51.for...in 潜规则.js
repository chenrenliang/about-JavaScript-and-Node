Array.prototype.contains = function(item){
    return this.indexOf(item) >= 0
}

for(let key in [1, 2, 3, 4]) {
    console.log(key) // '0' '1' '2' '3' 'contains'
}