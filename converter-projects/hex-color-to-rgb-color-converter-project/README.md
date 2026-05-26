#  🔴🟠🟡🟢🔵🟣🟤⚫⚪ Hex Color to RGB Converter ⚪⚫🟤🟣🔵🟢🟡🟠🔴🟢🔵

## 📌 Overview

This project is a JavaScript-based program that converts a user-provided **Hex Color Code** 🎨 into its corresponding **RGB (Red, Green, Blue)** values 🔴🟢🔵.

The program validates the hex color input, converts the hexadecimal values into decimal RGB values, and displays the formatted result in the console.

---

# 🧱 Project Structure 🗂️

project-folder/  
│  
├── hex_to_rgb_converter.js   # Main program file (conversion logic + user interaction)  
└── README.md                 # Project documentation  

---

# 🚀 Features ✨🔥

✅ Accepts hex color input from the user 🎨  
✅ Validates hex color format (`#RRGGBB`) ✔️  
✅ Converts hexadecimal values into RGB values 🔢  
✅ Handles invalid input with error messages ⚠️  
✅ Menu-driven console interface 📋  
✅ Uses functions for clean and organized code 🧠  
✅ Displays formatted RGB output 💻  

---

# 🛠️ Technologies Used 💻⚡

- JavaScript 🟨  
- Console input/output (`prompt`, `console.log`) 🖥️  

---

# 📡 Program Logic ⚙️🧩

The program works by:

1️⃣ Displaying a menu with options 📋  

2️⃣ Prompting the user to choose an option 🎯  

3️⃣ Asking the user to enter a hex color code:
   - Example: `#FF5733` 🎨  

4️⃣ Validating the input:
   - Must begin with `#`
   - Must contain exactly 6 hexadecimal digits
   - Accepts:
     - `0-9`
     - `A-F`
     - `a-f`

5️⃣ Converting the hex values into RGB values:
   - First 2 digits → Red 🔴
   - Middle 2 digits → Green 🟢
   - Last 2 digits → Blue 🔵

6️⃣ Displaying the RGB result in the console 💻✨  

7️⃣ Allowing the user to continue or exit 🔁🚪  

---

# 🧪 Example Output 💡

```text
Welcome to the Hex Color Number to RGB Converter!

Menu:
1. Convert Hex Color to RGB
2. Exit

Please enter your choice (1 or 2): 1

Please enter a hex color code (e.g., #FF5733): #FF5733

The RGB values for #FF5733 are:
R=255, G=87, B=51
```

---

# ▶️ How to Run the Project 🚀🖥️

1️⃣ Ensure JavaScript is supported in your environment  
   - Browser console 🌐  
   - Node.js 🟩  

2️⃣ Run the program:

```bash
node hex_to_rgb_converter.js
```

---

# 📅 Project Info 📖

👨‍💻 Author: Ryan Pereira  
📆 Created: 5/22/2026  
🛠️ Last Modified: 5/22/2026  

---

# 📬 Contact ✨

Feel free to open an issue, fork the project, or suggest improvements! 🚀🌟
