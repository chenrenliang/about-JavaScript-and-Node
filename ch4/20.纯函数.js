
function add(x, y){ //纯
    return x + y;
}

function random(min, max) { //不纯
 return min + Math.floor(Math.random() * (max - min)) //
 //min~min+max-min-1 => min~max-1   
}

let count = 0; //不纯
function addCount(){
    count++;
}

function setBgColor(color) { //不纯
    document.body.style.backgroundColor = color;
}

function __reduce__(fn){ //纯
    return function(...args){
        return args.reduce((a, b) => fn(a, b))
    };
}