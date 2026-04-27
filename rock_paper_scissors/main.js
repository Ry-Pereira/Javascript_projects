var moves = ["Rock","Paper","Scissors"];

function whoWonRound(userMoveToJudge, computerMoveToJudge) {
    if (userMoveToJudge !== "Rock" && userMoveToJudge !== "Paper" && userMoveToJudge !== "Scissors") {
        return "Invalid Move";
    }
    if (userMoveToJudge === computerMoveToJudge) {
        return "Tie";
    }
    if (userMoveToJudge === "Rock" && computerMoveToJudge === "Scissors") {
        return "User";
    }
    if (userMoveToJudge === "Paper" && computerMoveToJudge === "Rock") {
        return "User";
    }
    if (userMoveToJudge === "Scissors" && computerMoveToJudge === "Paper") {
        return "User";
    }
    return "Computer";
}

function determineGameWinner(userGameScore, computerGameScore){
    if(userGameScore === computerGameScore){
        console.log("Game Winner: No one, its a tie");
    }
    else if(userGameScore > computerGameScore){
        console.log("Game Winner: User Wins");
    }
    else{
        console.log("Game Winner: Computer Wins");
    }
}

function gameRun(){
    var userScore = 0;
    var computerScore = 0;

    for (let gameRound = 0 ; gameRound < 3; gameRound++){
        console.log("Round: " + (gameRound+1));
        let userMove = prompt("User Move: ");
        let computerMove = moves[Math.floor(Math.random() * moves.length)];

        let result = whoWonRound(userMove,computerMove);

        if(result == "Invalid Move"){
            console.log("For Invalid Input, you will lose this round");
            computerScore++;
        }
        else if(result == "Tie"){
            console.log("\nUser Move: " + userMove + "\nComputer Move: " + computerMove + "\nResult Tie");
        }
        else if(result == "User"){
            console.log("\nUser Move: " + userMove + "\nComputer Move: " + computerMove + "\nResult: User Wins Round");
            userScore ++;
        }
        else{
            console.log("\nUser Move: " + userMove + "\nComputer Move: " + computerMove + "\nResult: Computer Wins Round");
            computerScore ++;
        }
    }

    determineGameWinner(userScore,computerScore);
}

function mainFunction(){
    console.log("Welcome to the Rock Paper Scissors Game!");
    gameRun();
    console.log("Program has ended");
}

if(require.main === module){
    mainFunction();
}