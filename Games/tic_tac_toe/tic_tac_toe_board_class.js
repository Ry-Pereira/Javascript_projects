// Name: Ryan Pereira
// Project Name: Tic Tac Toe Game
// Description: A simple interactive Tic Tac Toe game that allows two players to take turns and play the game.
// Module Name: tic_tac_toe_boards.js
// Module Purpose: Serves as the class definition for the Tic Tac Toe board, including methods to display the board, make moves, and check for a winner.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 5/18/2026
// Last Modified: 5/19/2026


// Exports the TicTacToeBoard class so it can be used in other files.
export class TicTacToeBoard {
    // Constructor method used to initialize the game board.
    constructor() {
        // Creates a 3x3 board filled with empty spaces.
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
    }

    // Method used to place a player's symbol on the board.
    markCell(row, col, player) {
        // Checks if the selected cell is empty.
        if (this.board[row][col] === ' ') {
            // Places the player's symbol in the selected position.
            this.board[row][col] = player;
            // Returns true if the move was successful.
            return true;
        }
        // Returns false if the cell is already occupied.
        return false;
    }

    // Method used to determine if the board is completely full.
    checkMarkedOutBoard() {
        // Loops through each row in the board.
        for (let row of this.board) {
            // Loops through each cell in the current row.
            for (let cell of row) {
                // Checks if there is still an empty space on the board.
                if (cell === ' ') {

                    // Returns false because the board is not full.
                    return false;
                }
            }
        }
        // Returns true if no empty spaces remain.
        return true;
    }

    // Method used to check if either player has won the game.
    checkWinner() {
        // Checks the first row for a winner.
        if (
            this.board[0][0] !== ' ' && this.board[0][0] === this.board[0][1] && this.board[0][1] === this.board[0][2]
        ) {
            // Returns the winning symbol.
            return this.board[0][0];
        }

        // Checks the second row for a winner.
        if (
            this.board[1][0] !== ' ' && this.board[1][0] === this.board[1][1] && this.board[1][1] === this.board[1][2]
        ) {
            // Returns the winning symbol.
            return this.board[1][0];
        }
        // Checks the third row for a winner.
        if (
            this.board[2][0] !== ' ' && this.board[2][0] === this.board[2][1] && this.board[2][1] === this.board[2][2]
        ) {
            // Returns the winning symbol.
            return this.board[2][0];
        }
        // Checks the first column for a winner.
        if (
            this.board[0][0] !== ' ' && this.board[0][0] === this.board[1][0] && this.board[1][0] === this.board[2][0]
        ) {
            // Returns the winning symbol.
            return this.board[0][0];
        }
        // Checks the second column for a winner.
        if (
            this.board[0][1] !== ' ' && this.board[0][1] === this.board[1][1] && this.board[1][1] === this.board[2][1]
        ) {
            // Returns the winning symbol.
            return this.board[0][1];
        }

        // Checks the third column for a winner.
        if (
            this.board[0][2] !== ' ' && this.board[0][2] === this.board[1][2] && this.board[1][2] === this.board[2][2]
        ) {
            // Returns the winning symbol.
            return this.board[0][2];
        }

        // Checks the diagonal from top-left to bottom-right.
        if (
            this.board[0][0] !== ' ' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]
        ) {
            // Returns the winning symbol.
            return this.board[0][0];
        }

        // Checks the diagonal from top-right to bottom-left.
        if (
            this.board[0][2] !== ' ' && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]
        ) {
            // Returns the winning symbol.
            return this.board[0][2];
        }
        // Returns null if there is no winner.
        return null;
    }

    // Method used to display the current game board.
    displayBoard() {
        // Displays a label above the board.
        console.log("Current Board:");
        // Loops through each row of the board.
        for (let row of this.board) {
            // Displays the row contents separated by vertical bars.
            console.log(row.join('|'));
        }
    }
}