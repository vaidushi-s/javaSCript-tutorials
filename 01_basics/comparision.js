// console.log(2>1) //true 
// console.log(2>=1) // true 

console.log("2" > 1) //true
console.log("02">1) //true

//data type should be same for comparison
console.log(null>0) //false
console.log(null == 0) //false
console.log(null >= 0) //true 
// comparision operator converts null to a number, treating it as zero 
// in == it is not converted to zero that is why false 

console.log(undefined == 0) // false with even >=/>/<

// strict check === checks the data type as well 
console.log("2" === 2) // false
