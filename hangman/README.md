# 📄 Hangman Game Program

## 📌 Overview

This project is a JavaScript-based **Hangman game** where the program randomly selects a word and the user attempts to guess it one letter at a time.

The player has a limited number of lives and must correctly guess all letters in the word before running out.

---

## 🧱 Project Structure

project-folder/  
│  
├── hangman.js      # Main program file (game logic + user interaction)  
└── README.md       # Project documentation  

---

## 🚀 Features

- Randomly selects a word from a predefined list  
- Displays the word as blanks (underscores)  
- Accepts user guesses one letter at a time  
- Tracks remaining lives  
- Reveals correct letters in their positions  
- Ends game with win or loss message  

---

## 🛠️ Technologies Used

- JavaScript  
- Console input/output (`prompt`, `console.log`)  

---

## 📡 Program Logic

The program works by:

1. Selecting a random word from an array  
2. Converting the word into a blank version using underscores  
3. Starting the game loop where the user:
   - Inputs one letter per guess  
   - Gets feedback on correct or incorrect guesses  
4. Checking each guess against the word:
   - If correct → reveal letter(s)  
   - If incorrect → lose a life  
5. Ending the game when:
   - The word is fully guessed (**win**)  
   - Lives reach zero (**loss**)  

---

## ▶️ How to Run the Project

1. Ensure JavaScript is supported in your environment (browser or Node.js with prompt support)

2. Run the program:
   ```bash
   node hangman.js

3. Enter one letter at a time when prompted
4. Continue guessing until you win or lose

---


## 📅 Project Info
Author: Ryan Pereira
Created: 4/22/2026
Last Modified: 4/23/2026

---

## 📬 Contact

Feel free to open an issue or suggest improvements.

