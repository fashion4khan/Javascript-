const tinderUser = {}

tinderUser.id = "30101"
tinderUser.name = "fashion"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id : 121,
        email : "ha@gmail.com"
    },
    {
        id : 122,
        email : "kh@gmail.com"
    },
    {
        id : 123,
        email : "ha@gmail.com"
    },
    {
        id : 124,
        email : "ha@gmail.com"
    }
]
// users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))