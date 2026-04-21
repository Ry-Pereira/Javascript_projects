
//Name: Ryan Pereira
//Project Name: Vowel Remover
//Description: A program that prompts the user for a string and removes all vowels from the input, returning the modified string.
//Module Name: vowel_remover.js
//Module Purpose: Serves as the main entry point of the program by collecting user input and processing it through functions that validate characters and remove vowels from the string.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/20/2026
//Last Modified: 4/20/2026


// Array containing all vowels (uppercase and lowercase)
var vowelLetters = ["A","a","E", "e","I", "i","O", "o","U", "u"];
// Array containing all valid alphabet letters (uppercase and lowercase)
var alphabetLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// Function to check if a character is a valid alphabet letter
function isAlphabetLetter(characterValue){
    // Loop through all alphabet letters
    for(var alphabetLetterIndex; alphabetLetterIndex < alphabetLetters.length; alphabetLetterIndex++){
        // Check if input character matches a valid alphabet letter
        if(characterValue === alphabetLetters[alphabetLetterIndex]){
            return true; // Return true if it is a valid letter
        }
    }
    // Return false if no match is found
    return false;
}


// Function that removes vowels from an input string array
function removeVowels(stringInput){
    // Loop through each character in the input array
    for(var stringIndex = 0; stringIndex < stringInput.length; stringIndex++){
        // Validate that character is either a letter or a space
        if (isAlphabetLetter(stringInput[stringIndex]) == false && stringInput[stringIndex] != " ") {
            return "Please Put Valid String with alphabet character"; // Return error message if invalid
        }
        // Loop through all vowel letters
        for(var vowelLetterIndex = 0; vowelLetterIndex < vowelLetters.length; vowelLetterIndex++ ){
            // Check if current character is a vowel
            if(stringInput[stringIndex] === vowelLetters[vowelLetterIndex]){
                // Replace vowel with "*"
                stringInput[stringIndex] = "*";
                // Exit inner loop once vowel is found
                break;
            }
        }
    }

    // Convert array back into a string and return result
    return stringInput.join("");
}


// Main function that runs the program
function mainFunction(){
    // Display welcome message
    console.log("Welcome to Vowel Remover Program\n");
    // Get user input, convert string to array of characters
    userStringInput = prompt("Give me a String Input: ").split("");
    // Display original input array
    console.log(userStringInput);
    // Call function to remove vowels from input
    removedVowelResult = removeVowels(userStringInput);
    // Display final result
    console.log("Removed Vowels Result: " + removedVowelResult);
    // Display program end message
    console.log("\nProgram has ended...");
}


// Run the main function
mainFunction();