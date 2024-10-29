function myNme()
{
    console.log("fashion khan")
}

// myNme()

// function addtwoNum(n1 , n2)
// {
//     return n1 + n2;
// }
// console.log(addtwoNum(4, 3))

// function loginUser(username)
// {
//     if(!username)
//     {
//         console.log("please enter user name !")
//         return;
//     }
//     return `${username} just logged in !`
// }

// console.log(loginUser())

// function CalculateCartPrice(val1, val2, ...num1)
// {
//     return num1;
// }

// console.log(CalculateCartPrice(200, 300, 400))

// const user = 
// {
//     username : "hitesh",
//     price : 300
// }

// function objectHandle(anyuser)
// {
//     return `${anyuser.username} and ${anyuser.price}`
// }

// console.log(objectHandle(user))

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));