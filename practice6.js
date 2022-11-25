let runagain = true
colour = prompt("enter the color")
document.body.style.background = colour
let canDrive = (condition) =>{
    return condition >= 18 ? true : false
}

while (runagain) {
    let age = Number.parseInt(prompt("Enter your age"))
    if (age < 0) {
        console.error("this is negative age")
    }
    if (age >= 100) {
        location.href = "https://google.com"
    }
    if (canDrive(age)) {
        alert("you can drive")
        console.log("you can drive")
    }
    else{
        alert("you can't drive")
        console.log("you can't drive")
    }
    runagain = confirm("do you wan play again?")
}
