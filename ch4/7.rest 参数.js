
let add = (...args) => args.reduce((a, b) => a + b)

console.log(add(1, 2, 3, 4)) //10
console.log(add.length)  //0

function deepCopy(des, src){
    if(!src || typeof src !== 'object') {
        return des;
    }

    for(let key in src){
        let obj = src[key]

        if(obj && typeof obj === 'object') {
            des[key] = des[key] = {}
            
            deepCopy(des[key], obj)
        } else {
            des[key] = obj;
        }
    }

    return des;
}

function merge(des, ...objs) {
    return [des, ...objs].reduce((a, b) => deepCopy(a, b))
}

console.log(merge({x: 1}, {y: 2, a: [1, 2, 3, {d:function(){console.log('d')}}]}, {z: 3}))
//