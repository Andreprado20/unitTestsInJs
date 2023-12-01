const englishCode = "en-US";
const spanishCode = "es-ES";

 function getAboutUsLink(language){
    switch (language.toLowerCase()){
        case englishCode.toLowerCase():
            return './about-us';
        case spanishCode.toLowerCase():
            return './acerca-de'
    }
    return ''
}

 function soma(x,y){
    return x+y;
}

const usersArray = [
    {
        "id":20,
        "name": "André Prado"
    }, 
    { 
        "id": 30, 
        "name": 'Débora'
    }
]

function getUser(id){
    const filter = usersArray.filter(object => object.id == id)
    return filter
}

function setUser({id,name}){
    const before = usersArray.length
    usersArray.push({id,name})
    const after = usersArray.length
    const check = ()=>{
        let added
        if(before >= after){
            added = false
            return added
        } else {
            added = true
            return added
        }
    }

    if(check){
        return true
    } else {
        return false
    }
    
}

function removeUser(id){
    const findIndex = usersArray.findIndex(object => object.id == id)
    const remove = usersArray.splice(findIndex, 1)
    let list = usersArray.slice(0,usersArray.length)
    console.log(`Você removeu o usuário ${JSON.stringify(remove)} e o restante do array foi ${JSON.stringify(list)}`)
    return usersArray;
}

module.exports = {
    getAboutUsLink,
    soma,
    usersArray,
    getUser,
    setUser,
    removeUser
}

// id = 20
// const findIndex = usersArray.findIndex(object => object.id == id)
// const remove = usersArray.splice(findIndex, 1)
// console.log(remove[0])
