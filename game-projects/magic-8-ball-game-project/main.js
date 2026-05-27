// Name: Ryan Pereira
// Project Name: Magic 8 Ball Program
// Description: A simple interactive Magic 8 Ball simulation that allows the user to input a question and receive a random response.
// Module Name: main.js
// Module Purpose: Serves as the main entry point of the program by displaying a menu, collecting user input, and returning randomized Magic 8 Ball responses.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 4/30/2026
// Last Modified: 4/30/2026



// Imports the Magic8Ball class from another file
import { Magic8Ball } from "./magic-8-ball-class";
// Creates a reference to the Magic8Ball class (note: should normally be an instance)
const magic8Ball = new Magic8Ball();


// Displays the menu options to the user
function printMenu() {
    console.log("\n1. To Shake");
    console.log("2. Exit\n");
}


// Main loop that runs the program and handles user input
function runProgram() {
    // Show menu initially
    printMenu();
    // Get the user's initial choice and convert it to a number
    var userChoice = parseInt(prompt("Choice: "));
    // Keep running until the user chooses to exit (option 2)
    while (userChoice != 2) {
        // If user chooses to shake the Magic 8-Ball
        if (userChoice == 1) {
            // Ask user for their question (not actually used in logic)
            let userRequest = prompt("Request: ");
            // Print a random response from the Magic 8-Ball
            console.log(magic8Ball.shake());
        }
        // Handle invalid menu input
        else {
            console.log("Invalid Request");
        }
        // Show menu again after each action
        printMenu();
        // Ask for next user input
        userChoice = parseInt(prompt("Choice: "));
    }
}


// Entry point function for the program
function mainFunction() {
    // Welcome message shown when program starts
    console.log("Welcome to the Magic 8 Ball Program");
    // End message (note: this runs immediately here, not after loop)
    console.log("Program has ended");
}


// Checks if this file is being run directly, not imported as a module
if (require.main === module) {
    // Starts the program
    mainFunction();
}