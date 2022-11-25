const cl = console.log

let max = 3
let min = 1
let input
let  score = 0

let run_loop = (val)=>{
    return val
}

let i = 0

while (i < 10) {
    input  = prompt(`Enter Number 1 for Rock, 2 for Paper and 3 for Scissor.
    Don't give a number which is more than 3 and less than 0
    `)
    
    var max_min_func = (val1,val2)=>{
        return Math.floor(Math.random() * (val1 - val2) + val2)
    }

    max_min_func(max, min)
    let output = max_min_func(max, min)

if (output == input) {
    cl("draw")
}
if (output == 1 && input == 3) {
    cl("rock-----------knife, so you lose")
    score = score - 1
}
if (output == 1 && input == 2) {
    cl("rock-----------paper, so you won")
    score = score + 1
}
if (output == 2 && input == 1) {
    cl("paper-----------rock, so you lose")
    score = score - 1
}
if (output == 2 && input == 3) {
    cl("paper-----------knife, so you won")
    score = score + 1
}
if (output == 3 && input == 2) {
    cl("knife-----------paper, so you lose")
    score = score - 1
}
if (output ==  3 && input == 1) {
    cl("knife-----------rock, so you won")
    score = score + 1
}
if (input > 3 || input < 1) {
    console.error("invalid");
    score = score - 1
}
i++
}

console.log(`your score is, ${score}.`)

let overall

if (score == 0) {
    overall = "draw"
}else if(score > 0){
    overall = "you won"
}else{
    overall = "you loosed"
}

cl(`So overall result, is ${overall}`)