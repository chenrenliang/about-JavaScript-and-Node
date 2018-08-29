
const tpl1 = `我所做的馅饼
  是全天下
  最好吃的`

  
  console.log([typeof tpl1, tpl1])
  //'string'  ...

  {
      let who = '月影', what = '月饼'

      const tpl2 = `${who}所做的${what}
        是全天下
        最好吃的
      `

      console.log(tpl2) //...
  }