let c = console

confirm("do you want to edit the page")
alert("Enter the value of a")
let a = prompt("Enter a here!")
document.write(`${a}\n
the type of ${a} is ${typeof a}
\n`)

a = Number.parseInt(a)
document.write(`now the value of a is ${a} as a ${typeof a}`)