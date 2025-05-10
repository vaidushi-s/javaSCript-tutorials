let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) //12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) //122 whole conversion in string 
// but
console.log(1 + 2 + "2") // 32
//preffered conversion from ECMA script
console.log(true) //true
//but if 
console.log(+true) // 1

let num1, num2, num3
num1 = num2 = num3 = 4 // not preffered 
let gameCounter = 2
gameCounter++
console.log(gameCounter) //3
++gameCounter
console.log(gameCounter)//3