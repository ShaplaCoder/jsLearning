const cl = console.log
const ca = console.assert
const cc = console.clear
const ce = console.error

cl(`this will trow first child of body ${document.body.firstChild}`)
cl(`this will trow first element child of body ${document.body.firstElementChild}`)

let bg = ()=>{
document.body.firstElementChild.style.background = "red"
}

bg()

cl(document.body.firstElementChild,document.body.firstElementChild.children,Array.from(document.body.firstElementChild))