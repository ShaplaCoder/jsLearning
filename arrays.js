let countriesAsiaAtoB = ["Aganistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei"]
console.log(typeof(countriesAsiaAtoB))

console.log(countriesAsiaAtoB)
console.log(countriesAsiaAtoB.length)
console.log(countriesAsiaAtoB.lastIndexOf("Bangladesh"))
console.log(countriesAsiaAtoB[countriesAsiaAtoB.lastIndexOf("Bangladesh")])
console.log(countriesAsiaAtoB[0])
console.log(countriesAsiaAtoB[1])
console.log(countriesAsiaAtoB[2])
console.log(countriesAsiaAtoB[3])
console.log(countriesAsiaAtoB[4])
console.log(countriesAsiaAtoB[5])
console.log(countriesAsiaAtoB[6])
console.log(countriesAsiaAtoB[7])//trow undefined
console.log(countriesAsiaAtoB[-1])//trow undefined
console.log(countriesAsiaAtoB[-2])//trow undefined

countriesAsiaAtoB[7] = "China"
console.log(countriesAsiaAtoB)
console.log(countriesAsiaAtoB.concat("Chek Republic"))
console.log(countriesAsiaAtoB)
console.log(typeof(countriesAsiaAtoB))

//practice

for (let index = 0; index < countriesAsiaAtoB.length; index++) {
    console.log(countriesAsiaAtoB[index])
}