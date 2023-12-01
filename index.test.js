const {getAboutUsLink, soma, getUser, setUser, removeUser} = require("./index")

test("Returns about-us on english language", ()=>{
    expect(getAboutUsLink("en-US")).toBe("./about-us")
})

test("Returns add of two numbers", ()=>{
    expect(soma(9,4)).toBe(13)
})

test("Returns a new user", ()=>{
    expect(setUser({id: 50, name:"Sarah Souza"})).toBe(true)
})

test("Returns an user by id", ()=>{
    expect(getUser(20)).toStrictEqual([{id: 20, name:"André Prado"}])
})

test("Returns array after removing user", ()=>{
    expect(removeUser(20)).toStrictEqual([{id: 30, "name": 'Débora'},{id: 50, name:"Sarah Souza"}])
})