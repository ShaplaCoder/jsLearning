const c = console.log

let countriesAsiaAtoB = ["Aganistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei"]

c(delete countriesAsiaAtoB[0], countriesAsiaAtoB, countriesAsiaAtoB.length)//delete doesn't change length

let nums1 = [1, 2, 3, 4, 5]
let nums2 = [11, 12, 13, 14, 15]

console.log(countriesAsiaAtoB.concat(nums1, nums2))
console.log(countriesAsiaAtoB)
console.log(nums1)
console.log(nums2)

let num = [12321, 321.3, 374982748946, 22322]
c(num)
c(num.reverse())
c(num.sort())

let compare = (a, b) => {
    return a - b
}
c(num.sort(compare))

c(num.splice(1, 2, 3, 4, 4, 55, 6))

c(typeof countriesAsiaAtoB)
c(countriesAsiaAtoB.slice(3,5))
c(countriesAsiaAtoB)