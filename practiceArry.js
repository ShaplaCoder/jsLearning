// problem 1: take array from numbers and  then take input from user to add them in array
const c = console.log

let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let inputNumber = parseInt(prompt("Give a number"))

c(`you have entered ${nums1.push(inputNumber)} and now the nums1 array is ${nums1}`)

// problem2: keep entering numbers until 0 comes
let inputNumber2

do {
    inputNumber2 = parseInt(prompt("Give a number"))
    nums1.push(inputNumber2)
} while (inputNumber2 != 1);

c(nums1)

// problem3: use filter in the array of problem2

let divisibleby10filterer = nums1.filter((values)=>{
    return values%10 == 0
})

c(divisibleby10filterer)

let squarer = nums1.map((values)=>{
    return values*values
})

c(squarer)

let multiplier = nums1.reduce((values1,values2)=>{
    return values1*values2
})

c(multiplier)