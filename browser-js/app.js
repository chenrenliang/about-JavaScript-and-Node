
// console.log('获取文档的body: ', document.body)

//引入的js
//1.download
//2.execute

// window.addEventListener('DOMContentLoaded', () => {

// })

function render(...list) {
    const ul = document.createElement('ul')

    list.forEach(content => {
        const li = document.createElement('li')
        li.textContent = content 
        ul.appendChild(li)
    })

    document.body.appendChild(ul)
}