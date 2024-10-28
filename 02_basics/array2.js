const india_team = ["kohli", "rohit", "sanju"]

const pak_team = ["babar", "rizwan", "shaheen"]

// const all_team = india_team.concat(pak_team)

// const all_team = [...india_team,...pak_team]

// console.log(all_team)

const anotherArray =  [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realArr = anotherArray.flat(Infinity)
// console.log(realArr)

// console.log(Array.isArray("fashion"))
// console.log(Array.from("fashion"))
// console.log(Array.from({name : "fashion"}))

const n1 = 100
const n2 = 200
const n3 = 300

console.log(Array.of(n1, n2, n3))