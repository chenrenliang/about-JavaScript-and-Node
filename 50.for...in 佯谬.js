const scores = [10, 11, 12]
let total = 0

for(let score in scores) {
    total += score  // 0 + '0' + '1' + '2' => '0012'
}

const mean = total / scores.length  //'0012' / 3 === 4

console.log(mean) //4