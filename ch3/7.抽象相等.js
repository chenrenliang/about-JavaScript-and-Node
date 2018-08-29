
console.log([null !== undefined, null == undefined])
//true  true  => Boolean(null)  Boolean(undefined)

console.log(['1' == 1, [] == 0, '' == 0, 0 == false, 1 == true])
//true [].toString() => '' == 0  true true true
console.log(NaN != NaN)
//true