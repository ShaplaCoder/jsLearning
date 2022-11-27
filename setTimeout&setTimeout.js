alert("hello")

let timedInsideFunc = () => {
    alert("this is inside settimeout")
}
let insideTimed = setTimeout(timedInsideFunc, 5000)

let y_n = prompt("Do you want to run settimeout? y/n")

if ("n" === y_n) {
    clearTimeout(insideTimed)
}

let timedSum = (a,b,c) => {
    console.log("Yes the sum is", a+b+c)
    a+b+c
}

setTimeout(timedSum(1,2,5), 6000)