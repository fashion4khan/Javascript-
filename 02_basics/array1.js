const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr)

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2)

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(4))

// const newArr = myArr.join()
// console.log(newArr)

// slice and splice

console.log("A  " , myArr)

const Arrn1 = myArr.slice(1, 3)

console.log(Arrn1)

console.log("B  ", myArr)

const Arrn2 = myArr.splice(1, 3)

console.log(Arrn2)
console.log("C  " , myArr)