
class Dice {
    constructor(throws = 1, sides = 6){
        this.throws = throws;
        this.sides = sides;
    }

    [Symbol.iterator](){
        const {throws, sides} =  this;
        let thrown = 0;
        return {
            next(){
                const done = ++thrown > throws;
                return {
                    value: Math.ceil(Math.random() * sides),
                    done
                }
            }
        }
    }
}

const fireballDamageThrows = new Dice(10)
//throws: 10 sides: 6 
//

for(let thrown of fireballDamageThrows){
    console.log(thrown)
    //1 value: 随机一个
    //2value: 
    //3
    //4
    //5
    //6: 6 
    //随机输出5个
}

console.log([...new Dice(10)].reduce((a, b) => a + b))
//随机5个的和