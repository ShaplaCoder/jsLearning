// problem 1 : use loop(in this case for) to print marks from a object
let marksObj = {
    shihab: 80,
    radia: 90,
    ali: 70,
    masum: 85,
    shuvam: 9,
    monika: 4
}

const c = console.log

c(marksObj)

c(Object.keys(marksObj)) // this will print the value of keys in that object
c(Object.keys(marksObj).length) // this will print the value of lenth of lines in that object
c(Object.keys(marksObj)[1]) // this will print the index-key-value according to index in that object

for (let index = 0; index < Object.keys(marksObj).length; index++) {
    console.log(`The marks of ${Object.keys(marksObj)[index]} are ${Object.keys(marksObj)[index]}`)//this is not a write way
}

for (const key in marksObj) {
    console.log(key)
    console.log(`The marks of ${key} are ${marksObj[key]}`)
}

let cn = 4 //cn = correct number
let gn // gn = general numbers

while (gn != cn) {
    gn = prompt("Enter the correct number")
    c("try again")
}
c("you entered correct number")

const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}

console.log(mean(1, 2, 3, 4))