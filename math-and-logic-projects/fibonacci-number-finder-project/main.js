//Name: Ryan Pereira
//Project Name: Fibonacci Sequence Generator
//Description: A program that generates the Fibonacci sequence.
//Module Name: main.js
//Module Purpose: Set up the main entry point of the program while getting user for input on generating the Fibonacci sequence.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 5/21/2026
//Last Modified: 5/21/2026





// Displays the welcome message to the user
function welcomeMessage(){
    // Prints the program title
    console.log("Welcome to the Fibonacci Sequence Generator");
    // Prints a short description of the program
    console.log("This program generates the Fibonacci sequence.\n");
}

// Displays the goodbye message
function goodbyeMessage(){
    // Prints a thank-you message
    console.log("\nThank you for using the Fibonacci Sequence Generator.");
    // Prints a goodbye message
    console.log("Goodbye!");
}


// Displays the program menu
function displayMenu(){
    // Prints the menu title
    console.log("\nPlease select an option:");
    // Prints option 1
    console.log("1. Generate Fibonacci sequence");
    // Prints option 2
    console.log("2. Exit\n");
}



// Calculates the Fibonacci number recursively
function fibonacciSequence(numberInput){
    // Checks if the input is not a number
    if(isNaN(numberInput)){
        // Prints an error message
        console.log("Please enter a valid number.");
    }
    // Checks if the number is negative
    if(numberInput < 0){
        // Returns an error message
        return "Input must be a positive integer.";
    }
    // Base case for 0
    else if(numberInput === 0){
        // Returns 0
        return 0;
    }
    // Base case for 1
    else if(numberInput === 1){
        // Returns 1
        return 1;
    }
    // Recursive case
    else{
        // Returns the sum of the two previous Fibonacci numbers
        return fibonacciSequence(numberInput - 1) + fibonacciSequence(numberInput - 2);
    }
}



// Controls the main program flow
function startProgram(){
    // Prints a startup message
    console.log("Starting the Fibonacci Sequence Generator...");
    // Prompts the user for positive integers
    console.log("Please put a positive integer.");
    // Displays the menu
    displayMenu();
    // Gets the user's menu choice
    var userChoice = parseInt(prompt("Enter your choice: "));
    // Continues until the user selects Exit
    while(userChoice !== 2){
        // Checks if the user selected option 1
        if(userChoice === 1){
            // Gets the user's number input
            let numberInput = parseInt(prompt("Enter a positive integer: "));
            // Displays the Fibonacci result
            console.log("The Fibonacci sequence for " + numberInput + " is: " + fibonacciSequence(numberInput));
        }
        // Runs if the user enters an invalid menu option
        else{
            // Prints an error message
            console.log("Invalid choice. Please try again.");
        }
        // Displays the menu again
        displayMenu();
        // Gets another menu choice
        userChoice = parseInt(prompt("Enter your choice: "));
    }
}



// Main function
function main(){
    // Displays the welcome message
    welcomeMessage();
    // Starts the program
    startProgram();
    // Displays the goodbye message
    goodbyeMessage();
}



// Starts the program
main();