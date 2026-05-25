//Name: Ryan Pereira
//Project Name: Prime Number Checker
//Description: A program that asks the user for a number and determines whether the number is prime or composite.
//Module Name: main.js
//Module Purpose: Set up the main entry point of the program while getting user number input and displaying whether the number is prime or composite.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
//Date: 5/25/2026
//Last Modified: 5/25/2026






// Function that displays the welcome message
function welcomeMessage(){
    // Displays the program title
    console.log("Welcome to the JavaScript Prime Number Checker!");
    // Explains what the program does
    console.log("Please enter a number from 1 to 100 to check if it's a prime number.\n");
}

// Function that displays the goodbye message
function goodbyeMessage(){
    // Displays a thank you and goodbye message
    console.log("\nThank you for using the Prime Number Checker. Goodbye!");
}

// Function that displays the menu options
function displayMenu(){
    // Displays the menu title
    console.log("Menu:");
    // Displays option 1
    console.log("1. Check if a number is prime");
    // Displays option 2
    console.log("2. Exit\n");
}

// Function that checks if a number is prime or composite
function isPrimeOrComposite(num) {
    // Checks if the number is less than or equal to 1
    if(num <= 1){
        // Returns false because numbers less than or equal to 1 are not prime
        return false;
    }
    // Loops through possible factors starting from 2
    for(let i = 2; i < num; i++){
        // Checks if the number is divisible by the current value
        if(num % i == 0){
            // Returns false if a factor is found
            return false;
        }
    }
    // Returns true if no factors are found
    return true;
}

// Function that controls the main program loop
function programStart(){
    // Displays the menu
    displayMenu();
    // Prompts the user to enter a menu choice
    let choice = prompt("Enter your choice (1 or 2): ");
    // Continues looping until the user enters 2
    while(choice != "2"){
        // Checks if the user selected option 1
        if(choice == "1"){
            // Prompts the user to enter a number and converts it to a number type
            let number = Number(prompt("\nEnter a number from 1 to 100: "));
            // Checks if the number is invalid
            if(isNaN(number) || number < 1 || number > 100){
                // Displays an error message
                console.log("Invalid number. Please enter a number from 1 to 100.");
            }
            // Executes if the number is valid
            else {
                // Checks if the number is prime
                if(isPrimeOrComposite(number)){
                    // Displays a prime number message
                    console.log(number + " is a prime number.");
                } 
                // Executes if the number is composite
                else {
                    // Displays a composite number message
                    console.log(number + " is not a prime number, it is a composite number.");
                }
            }
        } 
        // Executes if the user enters an invalid menu choice
        else {
            // Displays an error message
            console.log("\nInvalid choice. Please try again.");
        }
        // Prompts the user again for another menu choice
        choice = prompt("\nEnter your choice (1 or 2): ");
    }
}



// Main function that starts the program
function main(){
    // Calls the welcome message function
    welcomeMessage();
    // Calls the program start function
    programStart();
    // Calls the goodbye message function
    goodbyeMessage();
}



// Calls the main function to start the program
main();