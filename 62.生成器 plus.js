
function *$cards(){
    const points = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']

    yield *points.map(p => ['♠', p])
    yield *points.map(p => ['♣', p])
    yield *points.map(p => ['♥', p])
    yield *points.map(p => ['♦', p])
}

let cards = $cards() //生成器 => 迭代器

console.log([...cards]) //双重迭代 => ...解出来 可iterable