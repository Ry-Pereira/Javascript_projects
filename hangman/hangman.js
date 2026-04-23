// Array of possible words for the Hangman game
var words = ["apple", "tiger", "chair", "robot", "green", "house", "water"];


// Function that selects a random word and converts it into an array of letters
function getHangmanWord(){
    // Create an empty array to store letters of the chosen word
    let wordList = [];
    // Randomly select one word from the words array
    let wordSelected = words[Math.floor(Math.random() * words.length)];
    // Loop through each character in the selected word
    for(var index = 0; index < wordSelected.length; index++){
        // Add each letter into the wordList array
        wordList.push(wordSelected[index]);
    }
    // Return the word as an array of letters
    return wordList;
}


// Function that creates a blank version of the word using underscores
function getHangmanBlankedWord(hangmanWordToCross){
    // Create an empty array for blank letters
    let blankedHangmanWordList = [];
    // Loop through each letter in the original word
    for(var index = 0; index < hangmanWordToCross.length; index++){
        // Add underscore for each letter in the word
        blankedHangmanWordList.push("_");
    }
    // Return the blank word array
    return blankedHangmanWordList;
}


// Function that runs the main Hangman game logic
function beginGame(word, blankWord){

    // Variable to store player's guess
    let userGuess;
    // Number of lives the player starts with
    let livesAmount = 6;
    // Tracks whether the guess had any correct letters
    let correctGuessLetter;

    // Loop continues until word is guessed or lives reach 0
    while(blankWord.join("") !== word.join("") && livesAmount > 0){
        // Display current progress of the word
        console.log("Word: " + blankWord.join(" "));
        // Ask user for a guess
        userGuess = prompt("Guess: ");
        // Reset correctness tracker for each round
        correctGuessLetter = false;
        // Check if user entered more than one letter
        if(userGuess.length > 1){
            // Warn user they should only enter one letter
            console.log("Only put one letter for guess");
            // Mark guess as invalid (prevents correct handling)
            correctGuessLetter = true;
        }

        // Loop through each letter in the word
        for(var index = 0; index < word.length; index++){
            // Check if guessed letter matches current letter in word
            if(userGuess[index] === word[index]){
                // Reveal correct letter in blank word
                blankWord[index] = userGuess[index];
                // Mark that at least one correct match was found
                correctGuessLetter = true;
            }
        }
        // If no correct letters were found, reduce life count
        if(correctGuessLetter == false){
            // Remove one life
            livesAmount--;
            // Tell user they lost a life
            console.log("Incorrect: You lose a life");
        }
        // If lives reach 0, player loses
        if(livesAmount === 0){
            // Show losing message and reveal word
            console.log("You lose: The word was " + word.join(""));
        }
        // If word is fully guessed, player wins
        else{
            // Show winning message and reveal word
            console.log("You Won: The word was " + word.join(""));
        }
    }
}


// Main function that starts the program
function mainFunction(){
    // Display welcome message
    console.log("Welcome to the Hangman Program");
    // Get a random word as an array of letters
    var hangmanWord = getHangmanWord();
    // Create blank version of that word
    var hangmanBlankWord = getHangmanBlankedWord(hangmanWord);
    // Start the game loop
    beginGame(hangmanWord, hangmanBlankWord);
    // End message after game finishes
    console.log("Program has ended...");
}


// Run the program
mainFunction();