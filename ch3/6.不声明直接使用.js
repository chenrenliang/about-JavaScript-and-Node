
(function(){
    "use strict"    
            //ReferenceError: y is not defined
    var x = y = 6 //严格模式下 y没被定义 : 变量得先定义， 再使用


})();

console.log([typeof x, typeof y]) //undefined number

