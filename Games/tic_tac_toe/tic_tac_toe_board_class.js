// Name: Ryan Pereira
// Project Name: Tic Tac Toe Game
// Description: A simple interactive Tic Tac Toe game that allows two players to take turns and play the game.
// Module Name: tic_tac_toe_boards.js
// Module Purpose: Serves as the class definition for the Tic Tac Toe board, including methods to display the board, make moves, and check for a winner.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 5/18/2026
// Last Modified: 5/18/2026



export class TicTacToeBoard {
    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
    }

    displayBoard() {
        console.log("Current Board:");
        for (let row of this.board) {
            console.log(row.join('|'));
        }
    }
}