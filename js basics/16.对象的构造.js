const p1 = new Object()
p1.x = 1
p1.y = 2
p1.getLength = function(){
    return Math.sqrt(this.x ** 2 + this.y ** 2)
}

const p2 = {
    x: 3,
    y: 4,
    getLength(){
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
}

console.log([p1.getLength(), p2.getLength()])
//2.236 5