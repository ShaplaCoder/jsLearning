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