const cl = console.log
const ca = console.assert
const cc = console.clear
const ce = console.error

let a = document.body.firstChild
cl(a)
cl(a.parentElement)//it will throw an Element but as in some cases there is no parent element of some elements it would throw null
cl(document.documentElement.parentElement)
cl(a.parentNode)//it will throw a Node and node will obviously come
cl(document.documentElement.parentNode)

cl(a.firstChild)
cl(a.firstChild.nextSibling)