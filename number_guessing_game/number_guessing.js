let userNumberGuess = 0;
let isNumberCorrect = false;
const randomNumber = Math.random();



console.log("Welcome to the Number Guessing Game");
while(isNumberCorrect){
    userNumberGuess = parseInt(prompt("Guess a Number: "));
    if(userNumberGuess === randomNumber){
        console.log()
        isNumberCorrect = true;

    }
}