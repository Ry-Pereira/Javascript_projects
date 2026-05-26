//Name: Ryan Pereira
//Project Name: Rock Paper Scissors
//Description: fegerlfec code
//Module Name: main.js
//Module Purpose: Serves as the main entry point of the program by collecting user input and using a function to determine whether the two provided strings are anagrams.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/27/2026
//Last Modified: 4/27/2026








// Array storing the possible moves in the game
var moves = ["Rock","Paper","Scissors"];

// Function to determine the winner of a single round
function whoWonRound(userMoveToJudge, computerMoveToJudge) {
    // Check if the user's move is invalid
    if (userMoveToJudge !== "Rock" && userMoveToJudge !== "Paper" && userMoveToJudge !== "Scissors") {
        // Return "Invalid Move" if input is not one of the allowed options
        return "Invalid Move";
    }
    // Check if both user and computer chose the same move
    if (userMoveToJudge === computerMoveToJudge) {
        // Return "Tie" if both moves are equal
        return "Tie";
    }
    // Check if user wins with Rock against Scissors
    if (userMoveToJudge === "Rock" && computerMoveToJudge === "Scissors") {
        // Return "User" if user wins
        return "User";
    }
    // Check if user wins with Paper against Rock
    if (userMoveToJudge === "Paper" && computerMoveToJudge === "Rock") {
        // Return "User" if user wins
        return "User";
    }
    // Check if user wins with Scissors against Paper
    if (userMoveToJudge === "Scissors" && computerMoveToJudge === "Paper") {
        // Return "User" if user wins
        return "User";
    }
    // If none of the above conditions are met, computer wins
    return "Computer";
}

// Function to determine the overall game winner based on scores
function determineGameWinner(userGameScore, computerGameScore){
    // Check if both scores are equal
    if(userGameScore === computerGameScore){
        // Log that the game is a tie
        console.log("Game Winner: No one, its a tie");
    }
    // Check if user score is greater than computer score
    else if(userGameScore > computerGameScore){
        // Log that the user wins the game
        console.log("Game Winner: User Wins");
    }
    // Otherwise, computer score must be greater
    else{
        // Log that the computer wins the game
        console.log("Game Winner: Computer Wins");
    }
}

// Function to run the full game
function gameRun(){
    // Initialize user score to 0
    var userScore = 0;
    // Initialize computer score to 0
    var computerScore = 0;
    // Loop to play 3 rounds
    for (let gameRound = 0 ; gameRound < 3; gameRound++){
        // Print the current round number
        console.log("Round: " + (gameRound+1));
        // Prompt user to enter their move
        let userMove = prompt("User Move: ");
        // Randomly select a move for the computer
        let computerMove = moves[Math.floor(Math.random() * moves.length)];
        // Determine the result of the round
        let result = whoWonRound(userMove,computerMove);
        // If user input was invalid
        if(result == "Invalid Move"){
            // Inform user they lose the round due to invalid input
            console.log("For Invalid Input, you will lose this round");
            // Increment computer's score
            computerScore++;
        }
        // If the round is a tie
        else if(result == "Tie"){
            // Print both moves and indicate a tie
            console.log("\nUser Move: " + userMove + "\nComputer Move: " + computerMove + "\nResult Tie");
        }
        // If the user wins the round
        else if(result == "User"){
            // Print both moves and indicate user wins the round
            console.log("\nUser Move: " + userMove + "\nComputer Move: " + computerMove + "\nResult: User Wins Round");
            // Increment user score
            userScore ++;
        }
        // Otherwise, the computer wins the round
        else{
            // Print both moves and indicate computer wins the round
            console.log("\nUser Move: " + userMove + "\nComputer Move: " + computerMove + "\nResult: Computer Wins Round");
            // Increment computer score
            computerScore ++;
        }
    }
    // After all rounds, determine the overall game winner
    determineGameWinner(userScore,computerScore);
}

// Main function to start the program
function mainFunction(){
    // Display welcome message
    console.log("Welcome to the Rock Paper Scissors Game!");
    // Run the game
    gameRun();
    // Display end message
    console.log("Program has ended");
}

// Check if this script is being run directly (Node.js environment)
if(require.main === module){
    // Call the main function to start the program
    mainFunction();
}