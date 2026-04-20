//Name: Ryan Pereira
//Project Name: Password Generator
//Description: A program that asks the user for the amount of value from upper case letters, lower case letters, numbers, and symbols list. Gets random value and and make a password from it.
//Module Name: password_generator.js
//Module Purpose: Set up the main entry point of the program while getting user for input on amount of random values from upper case letters, lower case letters, numbers, and symbols list. 
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/19/2026
//Last Modified: 4/19/2026



//A variable called upperCaseLettersList set to a list of uppercase letters.
var upperCaseLettersList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//A variable called lowererCaseLettersList set to a list of lowercase letters.
var lowerCaseLettersList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//A variable called numbersList set to a list of numbers.
var numbersList = ["0","1","2","3","4","5","6","7","8","9"];
//A variable called symbolsList set to a list of symbols.
var symbolsList = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}",";",";",":","'","\"","\\","|",",",".","<",">","/","?"];




// Defining a function generatePassword that takes specList as input to control password structure
function generatePassword(specList){

    // Getting the length of the uppercase letters array for random index generation
    var upperCaseLettersListLength = upperCaseLettersList.length;
    // Getting the length of the lowercase letters array for random index generation
    var lowerCaseLettersListLength = lowerCaseLettersList.length;
    // Getting the length of the numbers array for random index generation
    var numbersListLength = numbersList.length;
    // Getting the length of the symbols array for random index generation
    var symbolListLength = symbolsList.length;
    // Initializing an empty string that will store the final password
    var generatedPassword = "";



    // Loop to add uppercase characters based on specList[0]
    for(var number = 0; number < specList[0]; number++){
        // Generate a random index within uppercase letters array
        var upperCaseValue = upperCaseLettersList[Math.floor(Math.random() * upperCaseLettersListLength)]; 
        // Append the generated value to the password string
        generatedPassword += upperCaseValue;
    }
    // Loop to add lowercase characters based on specList[1]
    for(var number = 0; number < specList[1]; number++){
        // Generate a random index within lowercase letters array
        var lowerCaseValue = lowerCaseLettersList[Math.floor(Math.random() * lowerCaseLettersListLength)]; 
        // Append the generated value to the password string
        generatedPassword += lowerCaseValue;
    }
    // Loop to add numeric characters based on specList[2]
    for(var number = 0; number < specList[2]; number++){
        // Generate a random index within numbers array
        var numberValue = numbersList[Math.floor(Math.random() * numbersListLength)]; 
        // Append the generated value to the password string
        generatedPassword += numberValue;
    }
    // Loop to add symbol characters based on specList[3]
    for(var number = 0; number < specList[3]; number++){
        // Generate a random index within symbols array
        var symbolValue = symbolsList[Math.floor(Math.random() * symbolListLength)]; 
        // Append the generated value to the password string
        generatedPassword += symbolValue;
    }
    // Return the final generated password string
    return generatedPassword;
}

// Function to ask the user for password specifications and return them as an array
function askUserForPasswrodSpecs(){
    // Prompt user for number of uppercase letters and convert input to integer
    let upperCaseLettersAmount = parseInt(prompt("How many Upper Case Letters in the Password: "));
    // Prompt user for number of lowercase letters and convert input to integer
    let lowerCaseLettersAmount = parseInt(prompt("How many Lower Case Letters in the Password: "));
    // Prompt user for number of numeric characters and convert input to integer
    let numbersAmount = parseInt(prompt("How many Numbers in the Password: "));
    // Prompt user for number of symbols and convert input to integer
    let symbolsAmount = parseInt(prompt("How many Symbols in the Password: "));
    // Validate uppercase input: must be a positive integer
    if(upperCaseLettersAmount <= 0 || Number.isInteger(upperCaseLettersAmount) == false){
        // Log error message for invalid uppercase input
        console.log("Please input a valid amount of uppercase letters");
        // Restart the function to re-ask all inputs
        askUserForPasswrodSpecs();
    }

    // Validate lowercase input: must be a positive integer
    else if(lowerCaseLettersAmount <= 0 || Number.isInteger(lowererCaseLettersAmount) == false){
        // Log error message for invalid lowercase input
        console.log("Please input a valid amount of lowercase letters");
        // Restart the function to re-ask all inputs
        askUserForPasswrodSpecs();
    }
    // Validate numbers input: must be a positive integer
    else if(numbersAmount <= 0 || Number.isInteger(numbersAmount) == false){
        // Log error message for invalid numbers input
        console.log("Please input a valid amount of numbers");
        // Restart the function to re-ask all inputs
        askUserForPasswrodSpecs();
    }
    // Validate symbols input: must be a positive integer
    else if(symbolsAmount <= 0 || Number.isInteger(symbolsAmount) == false){
        // Log error message for invalid symbols input
        console.log("Please input a valid amount of symbols");
        // Restart the function to re-ask all inputs
        askUserForPasswrodSpecs();
    }
    // If all inputs are valid, return them as an array
    else{
        return [upperCaseLettersAmount, lowerCaseLettersAmount, numbersAmount, symbolsAmount];
    }
}



// Main function that controls the overall password generation flow
function mainFunction(){
    // Display welcome message to the user in the console
    console.log("Welcome to the Password Generator\n");
    // Call function to ask user for password specifications and store the returned array
    userSpecsList = askUserForPasswrodSpecs();
    // Generate password using the user specifications and store the result
    userGeneratedPassword = generatePassword(userSpecsList);
    // Output the generated password to the console
    console.log("Generated Password: " + userGeneratedPassword);
    // Indicate that the program has finished running
    console.log("Program has ended...");
}



// Execute the main function to start the program
mainFunction();