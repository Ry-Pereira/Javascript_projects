// Name: Ryan Pereira
// Project Name: Tic Tac Toe Game
// Description: A simple interactive Tic Tac Toe game that allows two players to take turns and play the game.
// Module Name: tic_tac_toe_boards.js
// Module Purpose: Serves as the class definition for the Tic Tac Toe board, including methods to display the board, make moves, and check for a winner.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 5/18/2026
// Last Modified: 5/19/2026


export class TicTacToeBoard {
    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
    }

    markCell(row, col, player) {
        if (this.board[row][col] === ' ') {
            this.board[row][col] = player;
            return true;
        }
        return false;
    }

    checkMarkedOutBoard() {
        for (let row of this.board) {
            for (let cell of row) {
                if (cell === ' ') {
                    return false;
                }
            }
        }
        return true;
    }

    checkWinner() {

        if (
            this.board[0][0] !== ' ' &&
            this.board[0][0] === this.board[0][1] &&
            this.board[0][1] === this.board[0][2]
        ) {
            return this.board[0][0];
        }

        if (
            this.board[1][0] !== ' ' &&
            this.board[1][0] === this.board[1][1] &&
            this.board[1][1] === this.board[1][2]
        ) {
            return this.board[1][0];
        }

        if (
            this.board[2][0] !== ' ' &&
            this.board[2][0] === this.board[2][1] &&
            this.board[2][1] === this.board[2][2]
        ) {
            return this.board[2][0];
        }

        if (
            this.board[0][0] !== ' ' &&
            this.board[0][0] === this.board[1][0] &&
            this.board[1][0] === this.board[2][0]
        ) {
            return this.board[0][0];
        }

        if (
            this.board[0][1] !== ' ' &&
            this.board[0][1] === this.board[1][1] &&
            this.board[1][1] === this.board[2][1]
        ) {
            return this.board[0][1];
        }

        if (
            this.board[0][2] !== ' ' &&
            this.board[0][2] === this.board[1][2] &&
            this.board[1][2] === this.board[2][2]
        ) {
            return this.board[0][2];
        }

        if (
            this.board[0][0] !== ' ' &&
            this.board[0][0] === this.board[1][1] &&
            this.board[1][1] === this.board[2][2]
        ) {
            return this.board[0][0];
        }

        if (
            this.board[0][2] !== ' ' &&
            this.board[0][2] === this.board[1][1] &&
            this.board[1][1] === this.board[2][0]
        ) {
            return this.board[0][2];
        }

        return null;
    }

    displayBoard() {
        console.log("Current Board:");

        for (let row of this.board) {
            console.log(row.join('|'));
        }
    }
}