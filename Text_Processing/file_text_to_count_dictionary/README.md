# 📄 File Text to Count Dictionary Program

## 📌 Overview

This project is a JavaScript-based program that reads a text file, processes its contents into individual words, and counts the frequency of each word. The program prompts the user for a file name, analyzes the text, and outputs a word count dictionary.

Users can:
* Input the name of a text file  
* Process text data into words  
* Count how many times each word appears  
* View results in the console  

---

## 🧱 Project Structure

project-folder/  
│  
├── file_text_to_count_dictionary.js   # Main program file (file reading + logic)  
├── sample.txt                         # Example input text file  
└── README.md                          # Project documentation  

---

## 🚀 Features

* Reads text files using Node.js file system module  
* Cleans and formats text data (removes extra spaces and line breaks)  
* Splits text into individual words  
* Counts frequency of each word using a dictionary (object)  
* Displays word counts in the console  

---

## 🛠️ Technologies Used

* JavaScript  
* Node.js (`fs` module for file handling)  
* Console input/output (prompt + console.log)  

---

## 📡 Program Logic

The program works by:

1. Prompting the user for a file name (without `.txt`)  
2. Reading the file asynchronously using the `fs` module  
3. Cleaning the text by:
   * Removing line breaks  
   * Trimming extra spaces  
   * Normalizing spacing  
4. Splitting the text into an array of words  
5. Counting occurrences of each word using an object  
6. Printing each word along with its frequency  

---

## ▶️ How to Run the Project

1. Ensure Node.js is installed  

2. Place your `.txt` file in the same directory as the program  

3. Run the program:
   ```bash
   node file_text_to_count_dictionary.js
4. Enter the file name (without .txt) when prompted
5. View the word count results in the console

---

## 📅 Project Info
Author: Ryan Pereira
Created: 4/15/2026
Last Modified: 4/15/2026

---

## 📬 Contact

Feel free to open an issue or suggest improvements.

