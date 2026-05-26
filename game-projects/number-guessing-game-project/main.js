//Name: Ryan Pereira
//Project Name: Number Guessing Game
//Description: A program that asks the user to guess a number between 1 and 100.
//Module Name: main.js
//Module Purpose: Set up the main entry point of the program while getting user for input on guessing the number.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 5/20/2026
//Last Modified: 5/20/2026








// Displays the main menu options to the user
function displayMenu(){
    // Shows option 1 for starting the game
    console.log("1. Guess a number");
    // Shows option 2 for exiting the program
    console.log("2. Exit");
}



// Gets the user's menu choice or guess input
function getUserChoice(){
    // Prompts the user for input and converts it to an integer
    return parseInt(prompt("Enter your choice: "));
}



// Runs the number guessing game
function playGame(){
    // Generates a random number between 1 and 100
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    // Stores the user's first guess
    let guess = getUserChoice();
    // Continues looping until the user guesses correctly
    while(guess !== targetNumber){
        // Checks if the input is not a valid number
        if(isNaN(guess)){
            // Tells the user to enter a valid number
            console.log("Please enter a valid number.");
        }
        // Checks if the guess is outside the allowed range
        else if(guess < 0 || guess > 100){
            // Tells the user to enter a number within range
            console.log("Please enter a number between 1 and 100.");
        }
        // Checks if the guess is lower than the target number
        else if(guess < targetNumber){
            // Informs the user the guess is too low
            console.log("Too low!");
        }
        // Runs if the guess is higher than the target number
        else {
            // Informs the user the guess is too high
            console.log("Too high!");
        }
        // Prompts the user to guess again
        guess = getUserChoice();
    }
    // Displays a success message when the correct number is guessed
    console.log("Congratulations! You guessed the number!");
}



// Main function that controls the overall program
function main(){
    // Displays the welcome message
    console.log("Welcome to the Number Guessing Game!");
    // Displays the menu options
    displayMenu();
    // Stores the user's menu selection
    let userMenuChoice = getUserChoice();
    // Continues looping until the user chooses to exit
    while(userMenuChoice !== 2){
        // Checks if the user selected option 1
        if(userMenuChoice === 1){
            // Starts the guessing game
            playGame();
        } 
        // Runs if the user entered an invalid menu option
        else {
            // Displays an error message
            console.log("Invalid choice. Please try again.");
        }
        // Displays the menu again after each loop
        displayMenu();
        // Gets the next menu choice from the user
        userMenuChoice = getUserChoice();
    }
    // Displays a goodbye message when the program ends
    console.log("Program has ended. \n Goodbye!");
}




// Starts the program by calling the main function
main();

