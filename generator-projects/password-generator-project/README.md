# 📄 Password Generator Program

## 📌 Overview

This project is a JavaScript-based program that generates a **custom password** based on user-defined criteria.

The program asks the user how many **uppercase letters, lowercase letters, numbers, and symbols** they want, then randomly generates a password using those specifications.

---

## 🧱 Project Structure

project-folder/  
│  
├── password_generator.js   # Main program file (logic + user interaction)  
└── README.md              # Project documentation  

---

## 🚀 Features

- Accepts user input for password composition  
- Generates random uppercase letters, lowercase letters, numbers, and symbols  
- Allows full customization of password structure  
- Validates user input to ensure correct values  
- Outputs the generated password in the console  

---

## 🛠️ Technologies Used

- JavaScript  
- Console input/output (`prompt`, `console.log`)  

---

## 📡 Program Logic

The program works by:

1. Displaying a welcome message  

2. Prompting the user to input:
   - Number of uppercase letters  
   - Number of lowercase letters  
   - Number of numbers  
   - Number of symbols  

3. Validating each input:
   - Must be a positive integer  
   - Re-prompts if invalid  

4. Generating random characters from predefined lists:
   - Uppercase letters (A–Z)  
   - Lowercase letters (a–z)  
   - Numbers (0–9)  
   - Symbols (special characters)  

5. Combining all generated characters into a single password string  

6. Displaying the generated password  

7. Ending the program  

---

## ▶️ How to Run the Project

1. Ensure JavaScript is supported in your environment (browser or Node.js with prompt support)

2. Run the program:

bash node password_generator.js
---

## 📅 Project Info
Author: Ryan Pereira
Created: 4/19/2026
Last Modified: 4/19/2026

---

## 📬 Contact

Feel free to open an issue or suggest improvements.

