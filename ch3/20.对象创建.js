{
    let myObj = new Object()

    myObj.name = 'akira'
    myObj.birthday = '12-29'

    console.log(myObj)
}

{
    let myObj = {
        name: 'akira',
        birthday: '12-29'
    }

    console.log(myObj)
}

{
    let myObj = Object.create({name: 'akira', birthday: '12-29'})

    console.log(myObj)
}