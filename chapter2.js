//practice est
// problem1: find out that is the age between 10-20

let age = prompt("What's your age?")

if (age >= 10 && age <= 20) {
    console.log("You are OK")
} else {
    console.log("You are not OK")
}

let fruit = prompt("Give the fruit name. Banana/Apple/Mango");
let line = `The price of ${fruit} is `
let currency = prompt("Enter the currency. BDT/INR/PKR");

switch (fruit) {
    case "Banana":
        console.log(line + 10 + " " + currency)
        break
    case "Apple":
        console.log(line + 20 + " " + currency)
        break
    case "Mango":
        console.log(line + 50 + " " + currency)
        break
    default:
        console.log("Please retype the fruit and currency")
}

let number = parseInt(prompt("Enter a number to see Is the number divisible by 2 and 3"))

if(number % 2 == 0 && number % 3 == 0){
    console.log("number is divisible by both 2 and 3")
}
else if (number % 2 == 0) {
    console.log("number is divisible by 2")
}else if (number % 3 == 0){
    console.log("number is divisible by 3")
}else{
    console.log("number is not divisible by neither 2 nor 3")
}

if(number % 5 == 0 || number % 4 == 0){
    console.log("The number is devisible by 5 or 4")
}else{
console.log("number is not divisible by neither 4 nor 5")}

if(age >= 18){
    console.log("you are eligible to  drive")
}else{
    console.log("you are not eligible to  drive")
}