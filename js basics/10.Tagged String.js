function myTags(parts, name, gender, birth){
    if(birth.startsWith('198')){
        birth = '80后'
    }else{
        birth = '90后'
    }

    // console.log(parts) //["", "(", ")是", ""]
    //除了 模板字符串以外的

    return parts[0] + name + parts[1]
      + (gender ? '先生' : '女士')
      + parts[2] + birth
}
//张三(...)是80后

const personData = [
    {
        name: '张三',
        gender: 1,
        birth: '1987-11'
    },
    {
        name: '李四',
        gender: 0,
        birth: '1992-10'
    }
]

const msg = data => 
myTags`${data.name}(${data.gender})是${data.birth}`

console.log(msg(personData[0]))
console.log(msg(personData[1]))

