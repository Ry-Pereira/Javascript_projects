//Name: Ryan Pereira
//Project Name: Even or Odd
//Description: A program that asks the user for a number and returns a string on whether the number is even or odd.
//Module Name: even_or_odd.js
//Module Purpose: Set up the main entry point of the program while getting user data and deciding whether the number is even, odd, or invalid.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/17/2026
//Last Modified: 4/17/2026






function isPalindrome(userInput){
    var userInputLength = userInput.length;
    if(userInputLength <= 1){
        return "Give a valid palindrome input";

    }

}




function mainFunction(){
    console.log("Welcome to the Palindrome Checker\n");
    let userPalindromeInput = prompt("Input to Check for Palindrome: ");
    isPalindromeResult = isPalindrome(userPalindromeInput);
}







mainFunction();