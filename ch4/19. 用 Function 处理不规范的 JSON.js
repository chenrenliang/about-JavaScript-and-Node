
var brokenJSON = `{
    a: 1,
    b: 2,
    c: 'message',   
}`

function parseData(data) {
    return new Function('return ' + data)();
}

try{
    console.log(JSON.parse(brokenJSON))
}catch(e){
    console.log(e.message)
    console.log(parseData(brokenJSON))
}