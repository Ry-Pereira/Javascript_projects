# 📄 Hex to Binary Converter Program

## 📌 Overview

This project is a JavaScript-based program that converts a user-provided **hexadecimal (base-16)** value into its **binary (base-2)** equivalent.

The program prompts the user for a hex input, processes each character, and outputs the corresponding binary representation.

---

## 🧱 Project Structure

project-folder/  
│  
├── hex_to_binary.js   # Main program file (conversion logic + user interaction)  
└── README.md          # Project documentation  

---

## 🚀 Features

- Accepts hexadecimal input from the user  
- Converts each hex digit into a 4-bit binary equivalent  
- Uses a switch statement for precise mapping  
- Handles invalid input with an error message  
- Displays formatted binary output in the console  

---

## 🛠️ Technologies Used

- JavaScript  
- Console input/output (`prompt`, `console.log`)  

---

## 📡 Program Logic

The program works by:

1. Prompting the user to enter a hexadecimal value  

2. Looping through each character in the input  

3. Converting each hex digit using a `switch` statement:
   - `0–9` and `A–F` are mapped to their 4-bit binary equivalents  

4. Building a binary string with spaces between each 4-bit segment  

5. Returning:
   - The full binary result if input is valid  
   - `"Not Valid"` if an invalid character is detected  

6. Displaying the result in the format:
---



## ▶️ How to Run the Project

1. Ensure JavaScript is supported in your environment (browser or Node.js with prompt support)

2. Run the program: bash node hex_to_binary.js

---

## 📅 Project Info
Author: Ryan Pereira
Created: 4/16/2026
Last Modified: 4/17/2026

---

## 📬 Contact

Feel free to open an issue or suggest improvements.

