
var MyClass = (function(){
    var privateData = 'privateData'

    function Class(){
        this.publicData = 'publicData'
    }

    Class.prototype.getData = function(){
        return privateData;
    };

    return Class;

})();

var myObj = new MyClass();
console.log([
    myObj.publicData, //publicData
    myObj.privateData, //undefined
    myObj.getData() //privateData
])