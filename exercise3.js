let jokes = [
    `Knock! Knock!
    Who’s there?
    Control Freak.
    Con…
    OK, now you say, “Control Freak who?” `,
    `Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?”
    Once my dog ate all the Scrabble tiles. For days he kept leaving little messages around the house. Don’t miss these hilarious egg puns that will absolutely crack you up`,
    `Helvetica and Times New Roman walk into a bar.
    “Get out of here!” shouts the bartender. “We don’t serve your type.”`,
    `Why do we tell actors to “break a leg?”
    Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor.`,
    `Did you hear about the mathematician who’s afraid of negative numbers?
    He’ll stop at nothing to avoid them.`,
    `I invented a new word!
    Plagiarism!`,
    `What’s the best thing about Switzerland?
    I don’t know, but the flag is a big plus.`
]

let jokesfunc = (max, min) =>{
    return Math.floor(Math.random() * max - min + min)
}

console.log(jokes[jokesfunc(jokes.length, 0)])