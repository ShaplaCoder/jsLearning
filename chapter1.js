// Q1:  craete a variable of tuype string and try to add a number to it

let owner = "Shiahab";
let age = 16

console.log(owner + age)

// Q2:  usee typwof operator to find the datatype of the string in the last question

console.log(typeof owner)

const religon = "Islam" // and you can't cahnge it

//but if you make a constant object then you can change the values of the elements of the object

const identity = {
    name: "Shiahab",
    sister: "Radia",
    age: 16,
    calss: 10,
    wife: null,
    father_in_law: undefined
}
console.log(identity)

identity["class"] = "SSC passed"
console.log(identity)