var msg = 'bar'

function Foo(msg){
    this.msg = msg;
}

Foo.prototype.log = function(){
    setTimeout(function(){
        console.log(this.msg)
    }, 500)

    const that = this;

    setTimeout(function(){
        console.log(that.msg)
    }, 1000)

    setTimeout(() => {
        console.log(this.msg)
    }, 1500)
}

const foo =  new Foo('foo')
foo.log();
//bar 
//foo
//foo