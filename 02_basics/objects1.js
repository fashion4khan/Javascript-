const mysym = Symbol("key1")

const JsUser = {
    name : "fashion",
    age: 22,
    [mysym] : "mykey1",
    "full name" : "fashion khan",
    loc : "jaipur",
    isLoggedIn : false,
    lastLoginDays : ["monday","tuesday"] 
} 

// console.log(JsUser.name)
// console.log(JsUser["full name"])

// console.log(JsUser[mysym])
// Object.freeze(JsUser)
// JsUser.name = "akay khan"
// console.log(JsUser["name"])

// JsUser.greeting = function()
// {
//     console.log("hello Js User !")
// }
// JsUser.greetingtwo = function()
// {
//     console.log(`hello js user ${this.name}`)
// } 
// console.log(JsUser.greeting())
// console.log(JsUser.greetingtwo())