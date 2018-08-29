
const point = {
    x: 100,
    y: 100,
    getLength(){
        let {x, y} = this;
        return Math.sqrt(x ** 2 + y ** 2)
    }
}

console.log(point.getLength()) //141.4

for(let key in point) {
    console.log([key, point[key]])
    //'x' 100
    //'y' 100
    //getLength: func
}

Object.keys(point).forEach(key => console.log([key, point[key]]))
//'x' 100 'y' 100 'getLength' func