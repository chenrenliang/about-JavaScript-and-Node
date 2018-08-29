
console.log([typeof add, typeof sub]) //function undefined
function add(x, y){
    return x + y;
}

var sub = function(x, y) {
    return x - y;
};

console.log([add(1, 2), sub(1, 2)])
//3 -1