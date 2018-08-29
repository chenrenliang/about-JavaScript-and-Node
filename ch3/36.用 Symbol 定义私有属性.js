
let Collection = (function(){
    'use strict'

    var size = Symbol('size')

    class Collection {
        constructor() {
            this[size] = 0;
        }
        add(item) {
            this[this[size]] = item; //{'0': item}
            this[size]++; //1
        }

        static sizeOf(instance) {
            return instance[size]
        }
        
    }

    return Collection;

})();

var x = new Collection();