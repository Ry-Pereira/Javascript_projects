//Name: Ryan Pereira
//Project Name: Zodiac Sign Finder
//Description: A program that asks the user for a birth date and determines their zodiac sign.
//Module Name: main.js
//Module Purpose: Set up the main entry point of the program which will handle user input, call the necessary functions to determine the user's zodiac sign, and display the results.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 5/23/2026
//Last Modified: 5/24/2026


// Importing the ZodiacSign class from the zodiac_sign_class.js file
import zodiaSignsListClass from "./zodiac_signs_list_class.js";




//Function to display a welcome message to the user
function welcomeMessage() {
    // Displays a welcome message to the user
    console.log("Welcome to the Zodiac Sign Finder!");
    // Explains the purpose of the program to the user
    console.log("This program will help you find your zodiac sign based on your birth date.");
}

// Function to check if the entered month and day are valid
function checkValidDate(month, day) {
    // Checks if the month or day is not a number or if they are out of valid ranges
    if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
        // Displays an error message
        console.log("Invalid date entered.");
        // Stops the program
        return false;
    }
    //Return true if the date is valid
    return true;
}



// Main function that runs the Zodiac Sign Finder program
function main(){
    // Calls the welcome message function to greet the user
    welcomeMessage();
    // Creates a new zodiac signs list object
    let zodiacSignsList = new zodiaSignsListClass();
    // Prompts the user to enter their birth month and converts it to a number
    let userBirthMonth = Number(prompt("Please enter your birth Month (1-12): "));
    // Prompts the user to enter their birth day and converts it to a number
    let userBirthDay = Number(prompt("Please enter your birth Day (1-31): "));
    // Creates a variable to store the user's zodiac sign
    let userZodiacSign = null;

    // Checks if the month or day entered is invalid
    if (checkValidDate(userBirthMonth, userBirthDay) == true) {
        // Loops through all zodiac signs in the zodiac signs list
        for (let i = 0; i < zodiacSignsList.zodiacSigns.length; i++) {
            // Stores the current zodiac sign object
            let zodiacSign = zodiacSignsList.zodiacSigns[i];
            // Checks if the user's birth date matches the zodiac sign range
            if ((userBirthMonth == zodiacSign.dateMonthStart && userBirthDay >= zodiacSign.dateDayStart) || (userBirthMonth == zodiacSign.dateMonthEnd && userBirthDay <= zodiacSign.dateDayEnd)) {
                // Stores the matching zodiac sign
                userZodiacSign = zodiacSign;
                // Stops the loop once a match is found
                break;
            }
        }
    }
    // Checks if a zodiac sign was found
    if (userZodiacSign) {
        // Displays the zodiac sign name
        console.log(`Your zodiac sign is ${userZodiacSign.name}.`);
        // Displays the zodiac sign element
        console.log(`Element: ${userZodiacSign.element}`);
        // Displays the zodiac sign personality traits
        console.log(`Traits: ${userZodiacSign.traitsDescription}`);
    } 
    // Executes if no zodiac sign was found
    else {
        // Displays an error message
        console.log("Sorry, we couldn't determine your zodiac sign.");
    }
    // Displays a goodbye message
    console.log("Program has finished.... Thankyou!");
}



// Calls the main function to start the program
main();