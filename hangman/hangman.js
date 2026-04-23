var words = ["apple", "tiger", "chair", "robot", "green", "house", "water"];





function getHangmanWord(){
    let wordList = [];
    let wordSelected = (words[Math.floor(Math.random() * words.length)]);
    for(var index = 0; index < wordSelected.length; index++){
        wordList.push(wordSelected [index]);
    }
    return wordList;
}


function getHangmanBlankedWord(hangmanWordToCross){
    let blankedHangmanWordList = [];
    for(var index = 0; index < hangmanWordToCross.length; index++){
        blankedHangmanWordList.push("_");
    }
    return blankedHangmanWordList;
    }
    



function beginGame(word,blankWord){
    let userGuess; 
    let livesAmount = 6;
    let correctGuess;

    while(blankWord.join("") !== word.join("") && livesAmount > 0){
        console.log("Word:" + blankWord.join(" "));
        userGuess = prompt("Guess: ");
        correctGuessLetter = false;
        if(userGuess.length > 1){
            console.log("Only put one letter for guess");
            correctGuessLetter = true;

        }
        for(var index = 0; index < word.length; index++){
            if(userGuess[index] === word[index]){
                blankWord[index] = userGuess[index];
                correctGuessLetter = true;
                
            }
        }
        if(correctGuesLetter == false){
            livesAmount--;
            console.log("Incorrect: You lose a life");
        }
    if(livesAmount === 0){
        console.log("You lose: The word was" + word.join(""));
    }
    else{
        console.log("You Won: The word was" + word.join(""));

    }
    }
}

function mainFunction(){
    console.log("Welcome to the Hangman Program");
    var hangmanWord = getHangmanWord();
    var hangmanBlankWord = getHangmanBlankedWord(hangmanWord);
    beginGame(hangmanWord,hangmanBlankWord);
    console.log("Program has ended...");



}




mainFunction();