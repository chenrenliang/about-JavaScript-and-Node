//假设 JS 没有 "new" 操作符，我们该如何实现创建对象？

function defineClass(initializer, proto) {
    return function f(...args) {
        let obj = Object.create(proto)

        //f.prototype = proto //just let instanceof make sense 

        obj.constructor = initializer;
        obj.constructor(...args)

        return obj; 
    };
    /**
     * obj: 1.继承proto
     * //2.构造器指向initializer
     * //3.调用initializer 初始化传入的...args
     */
}

var point = defineClass(function(x, y) {
    this.x = x;
    this.y = y;
}, {
    getLength() {
        let {x, y} = this;
        return Math.sqrt(x ** 2 + y ** 2)
    }
})

var p = point(3, 4)
console.log(p) //{x: 3, y: 4, constructo: [function]}
console.log(p.getLength()) //5