var text = 'This is a text' //规范建议默认使用双引号
var html = '<p class="sth">This is a <em>paragraph</em></p>'

console.log(text) //This is a text
console.log(html) //<p class="sth">This is <em>paragraph</em></p>

var text2 = '我所做的馅饼\n是全天下\n最好吃的'

console.log(text2)
/**
 * 我所做的馅饼
 * 是全天下
 * 最好吃的
 */

 var text3 = 'if(a){\n\tconsole.log(b);\n}'
 console.log(text3)
 /**
  * if(a){
  *     console.log(b);
  * }
  */

  var text4 =  '\u5947\u821e\u56e2';

  console.log(text4) //奇舞团