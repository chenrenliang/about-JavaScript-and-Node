
// for(var i = 0; i < 10; i++) {
//     (function(i){
//         setTimeout(function(){
//             console.log(i)
//         }, i * 100)
//     })(i); //立即把i的值传进去
// }

for(var i = 0; i < 10; i++){
    setTimeout((function(i){
        console.log(i)
    }).bind(null, i), i * 100)
}