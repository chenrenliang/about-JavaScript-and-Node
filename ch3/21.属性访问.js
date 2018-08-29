{
    let myObj = {
        name: 'akira',
        birthday: '12-29'
    }

    console.log([
        myObj.name, //akira
        myObj['birthday'] //12-29
    ])
}

{
    // []属性访问的好处是可以计算
    const conf = {
        adapter: 'sqlite',
        db: {
            sqlite: {
                //...
            },
            mysql: {
                //...
            }
        }
    };

    let dbSetting = conf.db[conf.adapter]
    console.log(dbSetting)
    //conf.db['sqlite'] => {}
}


{
    //在 ES6 中字面量的 key 也支持属性计算
    let process = {env: {}}

    const ENV = process.env.JSBIN_ENV || 'development'
    const conf = {
        [ENV]: true
    }

    console.log([
        conf.development, //true
        conf.production //undefined
    ])
}
