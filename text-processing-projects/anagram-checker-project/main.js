//Name: Ryan Pereira
//Project Name: Anagram Checker
//Description: A program that prompts the user for two strings and determines whether they are anagrams of each other.
//Module Name: anagram_checker.js
//Module Purpose: Serves as the main entry point of the program by collecting user input and using a function to determine whether the two provided strings are anagrams.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/20/2026
//Last Modified: 4/20/2026








// Function that checks whether two input strings are anagrams
function checkForAnagram(stringFirstInput,stringSecondInput){
    // Object to store character counts for the first string
    var stringFirstInputLetterValueCount = {};
    // Object to store character counts for the second string
    var stringSecondInputLetterValueCount = {};
    // Check if both strings have different lengths (cannot be anagrams)
    if(stringFirstInput.length !== stringSecondInput.length){
        // Return message if lengths are not equal
        return "Not a Anagram: Not the same count of letters";
    }
    // If lengths are equal, continue processing
    else{
        // Loop through each character in the strings
        for(var index = 0; index < stringFirstInput.length; index++){
            // Initialize current character count for first string to 0
            stringFirstInputLetterValueCount[stringFirstInput[index]] = 0;
            // Increment count for current character in first string
            stringFirstInputLetterValueCount[stringFirstInput[index]] ++;
            // Initialize current character count for second string to 0
            stringSecondInputLetterValueCount[stringSecondInput[index]] = 0;
            // Increment count for current character in second string
            stringSecondInputLetterValueCount[stringSecondInput[index]] ++;
        }
        // Loop through each letter in the first string's character map
        for(let letterValue in stringFirstInputLetterValueCount){
            // Check if second string contains the same letter
            if(!stringSecondInputLetterValueCount.hasOwnProperty(letterValue)){
                // Return message if a letter is missing
                return "Not Valid: Strings don't have same letters";
            }
            // Check if both strings have the same frequency of the letter
            if(stringFirstInputLetterValueCount[letterValue] != stringSecondInputLetterValueCount[letterValue]){
                // Return message if letter counts do not match
                return "Not Valid: String don't have same letter count";
            }
        }
        // If all checks pass, the strings are anagrams
        return "Is a Anagram";
    }
}





// Main function that runs the Anagram Checker program
function mainFUnction(){
    // Display welcome message to the user
    console.log("Welcome to the Anagram Checker Program");
    // Prompt user to enter the first string
    var userFistString = prompt("User First String: ");
    // Prompt user to enter the second string
    var userSecondString = prompt("User Second String: ");
    // Call function to check if the two strings are anagrams
    var anagramResult = checkForAnagram(userFistString,userSecondString);
    // Output the result of the anagram check
    console.log("Anagram Result: " + anagramResult);
    // Display program completion message
    console.log("Program Has Ended...");
}

//Calling the mainFunction, to enter the program
mainFUnction();