let output = (a, b) => `${a} + ${b} is ${a + b}`

console.log(output(3, 4))
//3  + 4 is 7


const data = [
    {name: 'Akira', age: 35},
    {name: 'Jane',  age: 26},
    {name: 'John',  age: 54}
]

let formatedList = data => `
<ul>
    ${data.map(item => `
    <li><span>name: ${item.name}</span> <span>age: ${item.age}</span></li>
    `).join('')}
</ul>
`

console.log(formatedList(data))