let age = prompt("hey what's your age")
console.log("now age is",age)
console.log("typeof age is",typeof age)

age = Number.parseInt(age)//this line will convert string age to a Number age
console.log("now typeof age is",typeof age)

if(age >= 70){
    alert("If you want you can drive, but as you are too old it is not recommended")
}
else if(age >= 15){
    alert("This is a valid age to drive")
}
else if(age >= 13){
    alert("You are so close, if you want you can join a driving trainning institute")
}
else if(age<= 13){
    alert("You are a kid, don't even think about driving")
}
else{
    alert("Please enter your age")
}