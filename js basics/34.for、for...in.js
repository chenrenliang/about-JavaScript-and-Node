const arr = [1,2, 3, , , 6, 7]

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    //1 2 3 undefined undefined 6 7
}

for(const i in arr){
    console.log(i, arr[i]) //0 1 2 5 6
    //1 2 3 6 7
}