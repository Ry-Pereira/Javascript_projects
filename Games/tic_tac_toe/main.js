// Name: Ryan Pereira
// Project Name: Tic Tac Toe Game
// Description: A simple interactive Tic Tac Toe game that allows two players to take turns and play the game.
// Module Name: main.js
// Module Purpose: Serves as the main entry point of the program by displaying a menu, collecting user input, and managing the game flow.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 5/18/2026
// Last Modified: 5/18/2026


import { TicTacToeBoard } from './tic_tac_toe_board_class.js';


// Function to display the main menu.
function displayMenu() {
    //Logs into the console the options for the user to select from.
    console.log("Please select an option:");
    //Logs into the console, for the user to select 1, to start a new game.
    console.log("1. Start a new game");
    //Logs into the console, for the user to select 2, to exit the game.
    console.log("2. Exit");
}

function playGame(firstPlayer, secondPlayer) {

    console.log(`Starting a new game between ${firstPlayer} (X) and ${secondPlayer} (O).`);

    let board = new TicTacToeBoard();

    board.displayBoard();

    while (true) {

        if(board.checkMarkedOutBoard()){
            console.log("The board is full. The game is a draw!");
            break;
        }

        let row = parseInt(prompt(`${firstPlayer}, enter the row (0-2) for your move: `));
        let col = parseInt(prompt(`${firstPlayer}, enter the column (0-2) for your move: `));

        board.markCell(row, col, 'X');

        board.displayBoard();

        let winner = board.checkWinner();

        if (winner) {
            console.log(`Congratulations ${winner === 'X' ? firstPlayer : secondPlayer}! You have won the game.`);
            break;
        }

        if(board.checkMarkedOutBoard()){
            console.log("The board is full. The game is a draw!");
            break;
        }

        let row2 = parseInt(prompt(`${secondPlayer}, enter the row (0-2) for your move: `));
        let col2 = parseInt(prompt(`${secondPlayer}, enter the column (0-2) for your move: `));

        board.markCell(row2, col2, 'O');

        board.displayBoard();

        winner = board.checkWinner();

        if (winner) {
            console.log(`Congratulations ${winner === 'X' ? firstPlayer : secondPlayer}! You have won the game.`);
            break;
        }
    }
}



// Main function to start the program.
function main(){

    //Logs into the console a welcome message for the user.
    console.log("Welcome to the Tic Tac Toe game!");

    //Calling the displayMenu function to show the user the available options.
    displayMenu();

    //Prompting the user to enter their choice and storing it in the variable userChoice.
    let userChoice = parseInt(prompt("Enter your choice (1 or 2): "));

    //Checking the user's choice and executing the corresponding action.
    if(userChoice === 1){

        //Letting player 1 and player 2 enter their names and storing them in the variables player1 and player2 respectively.
        let player1 = prompt("Enter name for Player 1 (X): ");
        let player2 = prompt("Enter name for Player 2 (O): ");

        //Calling the playGame function to start the game with the provided player names.
        playGame(player1, player2);
    }

    else if(userChoice === 2){

        //Logs into the console a goodbye message for the user when they choose to exit the game.
        console.log("Thankyou for playing the tic tac toe game!\nGoodbye....");
    }

    else{

        //Logs into the console an error message for the user when they enter an invalid choice.
        console.log("Invalid choice. Please select 1 or 2.");
    }
}


// Calling the main function to start the program.
main();