// Name: Ryan Pereira
// Project Name: Tic Tac Toe Game
// Description: A simple interactive Tic Tac Toe game that allows two players to take turns and play the game.
// Module Name: main.js
// Module Purpose: Serves as the main entry point of the program by displaying a menu, collecting user input, and managing the game flow.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 5/18/2026
// Last Modified: 5/19/2026


// Importing the TicTacToeBoard class from the separate module file.
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


// Function to handle the game flow between two players.
function playGame(firstPlayer, secondPlayer) {
    // Logs a message showing which players are participating in the game.
    console.log(`Starting a new game between ${firstPlayer} (X) and ${secondPlayer} (O).`);
    // Creates a new TicTacToeBoard object.
    let board = new TicTacToeBoard();
    // Displays the empty game board before the game starts.
    board.displayBoard();
    // Infinite loop used to keep the game running until there is a winner or draw.
    while (true) {
        // Checks if the board is completely full.
        if(board.checkMarkedOutBoard()) {
            // Logs a draw message if no more moves can be made.
            console.log("The board is full. The game is a draw!");
            // Exits the loop and ends the game.
            break;
        }
        // Prompts the first player to enter a row number.
        let row = parseInt(prompt(`${firstPlayer}, enter the row (0-2) for your move: `));
        // Prompts the first player to enter a column number.
        let col = parseInt(prompt(`${firstPlayer}, enter the column (0-2) for your move: `));
        // Marks the selected board position with an X.
        board.markCell(row, col, 'X');
        // Displays the updated game board.
        board.displayBoard();
        // Checks if there is a winner after Player 1's move.
        let winner = board.checkWinner();
        // If a winner exists, the game ends.
        if (winner) {
            // Displays a congratulatory winning message.
            console.log(`Congratulations ${winner === 'X' ? firstPlayer : secondPlayer}! You have won the game.`);
            // Exits the game loop.
            break;
        }
        // Checks again if the board is full after Player 1's move.
        if(board.checkMarkedOutBoard()) {
            // Logs a draw message if the board is full.
            console.log("The board is full. The game is a draw!");
            // Exits the game loop.
            break;
        }
        // Prompts the second player to enter a row number.
        let row2 = parseInt(prompt(`${secondPlayer}, enter the row (0-2) for your move: `));
        // Prompts the second player to enter a column number.
        let col2 = parseInt(prompt(`${secondPlayer}, enter the column (0-2) for your move: `));
        // Marks the selected board position with an O.
        board.markCell(row2, col2, 'O');
        // Displays the updated game board.
        board.displayBoard();
        // Checks if there is a winner after Player 2's move.
        winner = board.checkWinner();
        // If a winner exists, the game ends.
        if (winner) {
            // Displays a congratulatory winning message.
            console.log(`Congratulations ${winner === 'X' ? firstPlayer : secondPlayer}! You have won the game.`);
            // Exits the game loop.
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
        // Prompts the second player to enter their name.
        let player2 = prompt("Enter name for Player 2 (O): ");
        //Calling the playGame function to start the game with the provided player names.
        playGame(player1, player2);
    }
    //Checks if the user selected option 2 to exit the program.
    else if(userChoice === 2){
        //Logs into the console a goodbye message for the user when they choose to exit the game.
        console.log("Thankyou for playing the tic tac toe game!\nGoodbye....");
    }
    //Runs if the user enters an invalid menu option.
    else{
        //Logs into the console an error message for the user when they enter an invalid choice.
        console.log("Invalid choice. Please select 1 or 2.");
    }
}





// Calling the main function to start the program.
main();