let name = document.getElementById("name")
let class_headh1divs = document.getElementsByClassName("headh1divs")
console.log(name.getAttribute("class"))
console.log(name.hasAttribute("class"))
console.log(name.hasAttribute("style"))

class_headh1divs[4].setAttribute("hidden", "true")
class_headh1divs[4].setAttribute("class", "speacial headh1divs")

class_headh1divs[3].removeAttribute("hidden")

console.log(name.attributes)
console.log(name.attributes[1])
console.log(name.attributes[1].nodeValue)

console.log(name.dataset)
console.log(name.attributes[2].nodeValue)
console.log(name.attributes[3].nodeValue)