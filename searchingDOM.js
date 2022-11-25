let thirdCardTitle = document.getElementById("thirdCardTitle")
thirdCardTitle.style.color = "red"

let cTitle = document.querySelectorAll(".card-title")
cTitle[0].style.color = "blue"
cTitle[1].style.color = "green"

let cBtns = document.getElementsByClassName("btn-primary")
console.log(cBtns)
cBtns[0].style.background = "black"
cBtns[1].style.background = "black"
cBtns[2].style.background = "black"
cBtns[3].style.background = "black"

let a = document.body.getElementsByTagName("a")
console.log(a)

console.log(document.getElementsByName("Search"))