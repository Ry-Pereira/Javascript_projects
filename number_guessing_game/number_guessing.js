
//Lets a userNumberGuess be set to 0 for default
let userNumberGuess = 0;
//Lets a isNumberCorrect variable be set to false as default
let isNumberCorrect = false;
//Lets a constnat varaible randomNumber be a random number bewtween 0 and 99
const randomNumber = Math.floor(Math.random() * 100);


//Console Logs into the terminal a simple welcoming message
console.log("Welcome to the Number Guessing Game");


//While the isNumberCorrect is set to false, the system will constantly ask the user for a number guess, until the guess is correct, making the condition false
while(isNumberCorrect == false){
    //UserNumberGuess is set to the parsing of the string input from the user to integer
    userNumberGuess = parseInt(prompt("Guess a Number: "));
    //If the userNumber guess is equal to the randomNumber, the guess is correct
    if(userNumberGuess === randomNumber){
        //Logs into the console to the user they ahve geuss right
        console.log("Congratulation you have guessed the correct number")
        //The isNumberCorrect is set to true, which should return out of the while loop
        isNumberCorrect = true;
    }
    //Else if the guess is larger than the randoNumber, than the guess is too larger
    else if(userNumberGuess > randomNumber){
        //Logs into the console that the number is too large
        console.log("Sorry, your guess number is larger")
    }
    //Else if the guess is larger than the randoNumber, than the guess is too lesser
    else if(userNumberGuess < randomNumber){
        //Logs into the console that the number is too less
        console.log("Sorry, your guess number is lesser")
    }
}

//Logs into the conole a simple goodbye message
console.log("Thanks for playing");
console.log("Goodbye");