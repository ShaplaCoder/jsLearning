let realNum = Math.floor(Math.random() * 100)
console.log(realNum)

let guessNum
do {
  guessNum = Number.parseInt(prompt("Enter a number between 0 - 100"))
  if (guessNum > realNum) {
    console.log("Number is smaller\n")
  }
  if (guessNum < realNum) {
    console.log("Number is bigger\n")
  }
} while (guessNum > realNum || guessNum < realNum);

console.log(`you got the actual number, which is ${realNum}`)