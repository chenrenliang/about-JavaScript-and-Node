
let conf = {
    adapter: 'sqlite',
    db: {
        sqlite: {
            name: 'xxx.sqlite'
        },
        mysql: {
            name: 'xxx',
            username: 'work',
            passwd: '******'
        }
    }
}

let conf2 = conf;
conf2.adapter = 'mysql'

console.log(conf.adapter) //mysql

//ES5浅拷贝
conf.adapter = 'sqlite' //复位
let copied = Object.assign({}, conf)
//第一层 有值 复制值 也复制引用
copied.adapter = 'mysql'

console.log(conf.adapter) //sqlite
console.log(copied.adapter) //mysql 

copied.db.sqlite.name = 'yyy.sqlite'
console.log(conf.db.sqlite.name) //yyy.sqlite 

//深拷贝
function deepCopy(des, src) {
    for(var key in src) {
        let obj = src[key]
        if(obj && typeof obj === 'object') {
            des[key] = des[key] || {}

            deepCopy(des[key], src[key])
        }else{
            des[key] = src[key]
        }
    }

    return des;
}

let deepCopied = deepCopy({}, conf)
deepCopied.db.sqlite.name = 'zzz.sqlite'

console.log([
    deepCopied.db.sqlite.name, //zzz.sqlite
    conf.db.sqlite.name //yyy.sqlite
])
