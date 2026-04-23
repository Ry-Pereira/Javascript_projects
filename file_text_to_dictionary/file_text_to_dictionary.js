// Name: Ryan Pereira
// Project Name: File_Text_To_Count_Dictionary
// Description: A program that reads a text file, processes its contents into words,and counts the frequency of each word in the file.
// Module Name: file_text_to_count_dictionary.js
// Module Purpose: Serves as the main entry point of the program by collecting a file name from the user, reading the file contents, and generating a word count dictionary.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, Node.js documentation
// Date: 4/22/2026
// Last Modified: 4/22/2026






// Import the built-in file system module
const fs = require('fs');

// Function to read a text file and process its contents
function getFileData(textFileName, callback) {
    // Read the file asynchronously, assuming UTF-8 encoding
    fs.readFile(textFileName + '.txt', 'utf8', (err, data) => {
        // If there is an error reading the file
        if (err) {
            // Print the error to the console
            console.error(err);
            // Exit the function early
            return;
        }

        // Store the file data into a variable
        var words = data

        // Replace all line breaks (carriage return/newline) with a space
        .replace(/[\r\n]+/g, " ")  
        // Remove whitespace from the beginning and end of the text
        .trim()                    
        // Replace multiple spaces with a single space
        .replace(/\s+/g, " ")     
        // Split the string into an array of words using space as separator
        .split(" ");  
        
        // Call the callback function and pass the processed words array
        callback(words); 
    });
}

// Function to count occurrences of each word in the list
function getCountOfWords(wordsList) {
    // Create an empty object to store word counts
    const countDictionary = {};

    // Loop through each word in the array
    for (let i = 0; i < wordsList.length; i++) {
        // Get the current word
        const word = wordsList[i];

        // If the word already exists in the dictionary
        if (countDictionary[word]) {
            // Increment its count
            countDictionary[word]++;
        } else {
            // Otherwise, initialize its count to 1
            countDictionary[word] = 1;
        }
    }

    // Print a header message
    console.log("Count of Words:\n");

    // Loop through each word in the dictionary
    for (const wordCount in countDictionary) {
        // Print the word and its count
        console.log(wordCount, countDictionary[wordCount]);
    }
}

// Main function to run the program
function mainFunction() {
    // Display a welcome message
    console.log("Welcome to the Text To Count Dictionary Program");

    // Ask the user for the file name (without .txt extension)
    var textFile = prompt("Name of text file: ");

    // Call function to read file and process words
    getFileData(textFile, function(wordsExtracted) {
        // Pass the extracted words to counting function
        getCountOfWords(wordsExtracted);
    });
}

// Execute the main function
mainFunction();