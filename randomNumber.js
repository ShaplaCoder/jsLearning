const c = console.log

c(`Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
which means 0 < Math.ramdom() < 1
Math.random() always returns a number lower than 1.
Math.random() used with Math.floor() can be used to return random integers.

There is no such thing as JavaScript integers.
We are talking about numbers with no decimals here.

random numbers are : ${Math.random()}
random integer from 0 to 9: ${Math.floor(Math.random() * 10)}
integer from 0 to 10: ${Math.floor(Math.random() * 11)};
integer from 0 to 10: ${Math.floor(Math.random() * 10)+1};
integer from 0 to 100: ${Math.floor(Math.random() * 101)};
integer from 0 to 1000: ${Math.floor(Math.random() * 1001)};
`)

let minnimum = parseInt(prompt("Giver minnimum Number"))
let maximum = parseInt(prompt("Giver maximum Number"))

let  randomNumGenarator = (min, max) => {
    return Math.floor(Math.random()*(max - min) + min)
}

c(randomNumGenarator(minnimum,maximum))