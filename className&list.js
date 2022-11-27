let name = document.getElementById("name")
console.log(name.classList.contains("dark-mode"))

name.className = "dark-mode"

name.classList.remove("headh1divs")
console.log(name.classList.contains("headh1divs"))

name.classList.add("headh1divs")
console.log(name.classList.contains("headh1divs"))

name.classList.toggle("dark-mode")
console.log(name.classList.contains("dark-mode"))

name.classList.toggle("dark-mode")
console.log(name.classList.contains("dark-mode"))

console.log(name.classList)