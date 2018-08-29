let x = 20, y = 30

function foo(a, b) {
    a++;
    b++;
    console.log([a, b])
}

foo(x, y) //[21, 31]

console.log([x, y]) // 20 30

const obj = {
    x: 20, 
    y: 30
};

function foo2(obj) {
    obj.x++;
    obj.y++;

    console.log(obj)
}

foo2(obj) //{x: 21, y: 31}

console.log(obj) //{x:21, y: 31}