let a = document.getElementsByTagName("h1")[0]
console.log(a)

document.getElementsByTagName("h1")[0].innerHTML = document.getElementsByTagName("h1")[0].innerHTML+"<div class = customdivs>this is a custom div<div>"
let b = document.createTextNode("this is a custom div")

a.appendChild(b)
a.prepend(b)
a.before(b)
a.after(b)
a.replaceWith(b)