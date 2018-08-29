
function Foo(msg){
    this.msg = msg;
}

Foo.prototype.log = function(){
    console.log(this.msg)
}

var msg = 'bar'

const foo = new Foo('foo')

foo.log(); //foo

setTimeout(foo.log.bind(foo), 1000)
//foo