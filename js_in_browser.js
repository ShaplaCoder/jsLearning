console.time("a")
let c = console
let name = "Shiahb"
console.error("this is an error");
console.assert(5>53)
// console.clear() this will clear console

c.log(name)

let fruits = {
    apple : 100,
    pineapple : 200
}

console.table(fruits)
console.warn("this is a warning");
c.info("this is info")
c.error("this is error")
c.assert("error" != false)
c.assert("error" == false)
console.table(console)
c.timeEnd("a")

c.time("forLoop")
for (let index = 0; index < 2; index++) {
    c.log(index);
}
c.timeEnd("forLoop")

c.time("whileLoop")
let i = 0

while (i < 2) {
    i++
    c.log("i is",i)
}
c.timeEnd("whileLoop")

c.log(console)
c.log(console)