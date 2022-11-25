const cl = console.log
const ca = console.assert
const cc = console.clear
const ce = console.error

cl(document.body.firstChild)
cl(document.body.childNodes[0])// this is simmilar to firstChild
cl(document.body.lastChild)
cl(document.body.childNodes[document.body.childNodes.length - 1])// this is simmilar to lastChild
cl(document.body.children)
cl(document.body.className = "shihab")
cl(document.body)

let nodeArray = Array.from(document.body.childNodes)
cl(document.body.childNodes)
cl(nodeArray)
cl(typeof document.body.childNodes)
cl(typeof nodeArray)

//in web pages you would see $0 and writing $0 you can acces a selected element and $1 is that element which was selected and accesed using $0 Before the current element