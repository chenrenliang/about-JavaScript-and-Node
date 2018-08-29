
function Foo(msg){
    this.msg = msg;
}

Foo.prototype.log = function(){
    console.log(this.msg)
}

var msg = 'bar'

const foo = new Foo('foo')
foo.log(); // foo

setTimeout(foo.log, 1000)
//window.setTimeout(那个匿名函数, 1000)
//bar