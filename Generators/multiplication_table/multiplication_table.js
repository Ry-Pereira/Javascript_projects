//Name: Ryan Pereira
//Project Name: Multiplication Table
//Description: A program that generates a multiplication table based on a user-provided number input, displaying values from 0 up to the selected limit.
//Module Name: multiplication_table.js
//Module Purpose: Set up the main entry point of the program while getting user input for a number and generating a multiplication table up to that value.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/24/2026
//Last Modified: 4/24/2026







// Function definition (note: parameter name is misspelled and inconsistent with later usage)
function generateMultiplicationTable(numberLimt){
// Checks if input is an integer (BUG: numberLimit is not defined)
    if(Number.isInteger(numberLimit)){
// Prints header (BUG: numberLimit is undefined here too)
        console.log("Multiplication Table for:" + numberLimit + "\n")
// Creates an array to hold column headers
        let headers = [" "];
// Loop to build header row (BUG: numberLimit undefined)
        for(let headerNumber = 0; headerNumber<= numberLimit;headerNumber++){
// Adds a value to headers (BUG: 't' is not defined)
            headers.push(t);
        }
// Prints header row
        console.log(headers.join(" "));
// Outer loop for each multiplication row
        for(let numberToMultiply = 0; numberToMultiply <= numberLimit; numberToMultiply++){
// Starts a row array (BUG: 'number' is not defined)
            let rowNumbers = [number];
// Inner loop for column values
            for(let columnNumber = 0; columnNumber <= numberLimit; columnNumber++){
// Push multiplication result into row
                rowNumbers.push(columnNumber * numberToMultiply);
            }
// Prints completed row
            console.log(rowNumbers.join(" "))
        }
    }
// Runs if input is not an integer
    else{
// Error message for invalid input
        console.log("Please Input A Whole Integer Number!")
    }
}


// Main function that runs the program
function mainFunction(){
// Welcome message
    console.log("Welcome to the Multiplication Table Program");
// Gets user input and converts it to an integer
    let userNumber = parseInt(prompt("Please Input a Number for the multiplication table to begin: "));
// Calls multiplication table generator
    generateMultiplicationTable(userNumber);
// End message
    console.log("\nProgram has ended...");
}


// Runs the main function
mainFunction();