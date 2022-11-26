console.log(document.getElementsByTagName("h1")[0])

console.dir(document.getElementsByTagName("h1")[0])
console.dirxml(document.getElementsByTagName("h1")[0])

console.log(document.getElementsByTagName("h1")[0].nodeName)
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

let ext = document.getElementById("ext");
let classs_headh1divs = document.getElementsByClassName("headh1divs")

classs_headh1divs[3].innerHTML = "<sub>this is a extra</sub>"
ext.innerHTML = `<sup>this is ext</sup>`

console.log(document.getElementById("name").firstChild)
console.log(document.getElementById("name").firstChild.data)

console.log(document.getElementById("name").firstChild.nodeType)
console.log(document.getElementById("name").firstChild.nodeValue)

console.log(document.getElementsByTagName("h1")[0].textContent)
console.log(document.getElementsByTagName("h1")[0].TEXT_NODE)
classs_headh1divs[4].hidden = false