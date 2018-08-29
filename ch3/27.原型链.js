//__proto__ 暴力构建原型链

var a = {x: 1}, b = {y: 2}, c = {z: 3}

b.__proto__ = a;
c.__proto__ = b;

console.log(c) //{z: 3, y: 2, x: 1}

//使用 Object.create 构建原型链
{
    var  a = {x: 1}
    var b = Object.create(a)
    b.y = 2;
    var c = Object.create(b)
    c.z = 3;

    console.log(c) //{z: 3, y: 2, x: 1}
}

{
    function A() {
        this.x = 1;
    }
    function B(){
        this.y = 2;
    }
    B.prototype = new A()

    function C(){
        this.z = 3;
    }

    C.prototype = new B()

    var c = new C()

    console.log(c) //{z: 3, y: 2, x: 1}

}
