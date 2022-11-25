// the lottery game

const c = console.log

let minnimum = parseInt(prompt("Give minnimum Number"))
let maximum = parseInt(prompt("Give maximum Number"))
let lottery = parseInt(prompt("Eneter your lucky Number"))
let  randomNumGenarator = (min, max) => {
    return Math.floor(Math.random()*(max - min) + min)
}

let first = randomNumGenarator(minnimum,maximum)
let second = randomNumGenarator(minnimum,maximum)
let third = randomNumGenarator(minnimum,maximum)


c(`first price ${first}
second price ${second}
third price ${third}
`)

if (lottery < minnimum  || lottery > maximum) {
    c("Retype number as it is not valid")
}else if(lottery == first){
    c("Con ratulations you got the first price")    
}else if(lottery == second){
    c("Con ratulations you got the second price")    
}else if(lottery == third){
    c("Con ratulations you got the third price")    
}else{
    c("you failed")
}