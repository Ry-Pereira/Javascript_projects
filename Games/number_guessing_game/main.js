//Name: Ryan Pereira
//Project Name: Number Guessing Game
//Description: A program that asks the user to guess a number between 1 and 100.
//Module Name: main.js
//Module Purpose: Set up the main entry point of the program while getting user for input on guessing the number.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 5/20/2026
//Last Modified: 5/20/2026









function displayMenu(){
    console.log("1. Guess a number");
    console.log("2. Exit");
}

function getUserChoice(){
    return parseInt(prompt("Enter your choice: "));
}

function playGame(){
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let guess = getUserChoice();
    while(guess !== targetNumber){
        if (isNaN(guess)) {
        console.log("Please enter a valid number.");
        }
        if(guess < targetNumber){
            console.log("Too low!");
        }
        else if(guess < 0){
            console.log("Please enter a number between 1 and 100.");
        }
        else if(guess > 100){
            console.log("Please enter a number between 1 and 100.");
        }
        else {
            console.log("Too high!");
        }
        guess = getUserChoice();
    }
    console.log("Congratulations! You guessed the number!");
}

function main(){
    console.log("Welcome to the Number Guessing Game!");
    displayMenu();
    let userMenuChoice = getUserChoice();
    while(userMenuChoice !== 2){
        if(userMenuChoice === 1){
            playGame();
        } 
        else {
            console.log("Invalid choice. Please try again.");
        }
        displayMenu();
        userMenuChoice = getUserChoice();
    }
    console.log("Program has ended. \n Goodbye!");
}





main();

