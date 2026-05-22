//Name: Ryan Pereira
//Project Name: Hex Color to RGB Converter
//Description: A program that asks the user for a hex input and converts it to rgb color, which is the output given.
//Module Name: main.js
//Module Purpose: Set up the main entry point of the program while getting user hex data and displaying the the rgb output.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 5/22/2026
//Last Modified: 5/22/2026







// Function that displays the menu options to the user
function displayMenu(){
    // Prints the menu title
    console.log("\nMenu: ");
    // Prints option 1
    console.log("1. Convert Hex Color to RGB");
    // Prints option 2
    console.log("2. Exit\n");
}






// Function that checks if the hex color entered is valid
function checkHexColor(hexColor){
    // Checks if the length is not 7 or if the first character is not '#'
    if(hexColor.length !== 7 || hexColor[0] !== '#'){
        // Returns false if the format is invalid
        return false;
    }
    // Loops through each character after the '#'
    for(let i = 1; i < hexColor.length; i++){
        // Checks if the character is NOT a valid hexadecimal character
        if(!((hexColor[i] >= '0' && hexColor[i] <= '9') || (hexColor[i] >= 'A' && hexColor[i] <= 'F') || (hexColor[i] >= 'a' && hexColor[i] <= 'f'))){
            // Returns false if an invalid character is found
            return false;
        }
    }
    // Returns true if all characters are valid
    return true;
}





// Function that converts a hex color code to RGB values
function convertHexToRGB(hexColor){
    // Converts the first two hex digits to the red value
    let rValue = parseInt(hexColor.slice(1, 3), 16);
    // Converts the next two hex digits to the green value
    let gValue = parseInt(hexColor.slice(3, 5), 16);
    // Converts the last two hex digits to the blue value
    let bValue = parseInt(hexColor.slice(5, 7), 16);
    // Returns the RGB values as an object
    return {rValue,gValue,bValue};
}





// Function that starts and controls the main program loop
function beginProgram(){
    // Displays the menu
    displayMenu();
    // Prompts the user to enter a menu choice
    let choice = prompt(" Please enter your choice (1 or 2): ");
    // Creates an infinite loop until the user exits
    while(true){
        // Checks if the user selected option 1
        if(choice === "1"){
            // Prompts the user to enter a hex color code
            let hexColor = prompt("\nPlease enter a hex color code (e.g., #FF5733): ");
            // Checks if the hex color is invalid
            if(checkHexColor(hexColor) === false){
                // Prints an error message if invalid
                console.log("\nInvalid hex color code. Please try again. \n");
            }
            // Executes if the hex color is valid
            else {
                // Converts the hex color to RGB
                let rgb = convertHexToRGB(hexColor);
                // Displays the RGB values
                console.log(`The RGB values for ${hexColor} are: R=${rgb.rValue}, G=${rgb.gValue}, B=${rgb.bValue} \n`);
            }
        }
        // Checks if the user selected option 2
        else if(choice === "2"){
            // Prints an exit message
            console.log("\nExiting the program. ");
            // Breaks out of the loop
            break;
        } 
        // Executes if the user enters an invalid menu choice
        else {
            // Prints an invalid choice message
            console.log("\nInvalid choice. Please enter 1 or 2. ");
        }
        // Prompts the user for another choice
        choice = prompt("\nPlease enter your choice (1 or 2): ");
    }
}





// Main function that starts the program
function main() {
    // Displays a welcome message
    console.log("Welcome to the Hex Color Number to RGB Converter! \n");
    // Starts the main program
    beginProgram();
    // Displays a goodbye message
    console.log("\nThank you for using the converter. Goodbye! ");
}





// Calls the main function to run the program
main();