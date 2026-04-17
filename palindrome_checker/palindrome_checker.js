//Name: Ryan Pereira
//Project Name: Palindrome Checker
//Description: A program that asks the user for a input, assumed as string. Return a string indicating that its a palindrome, in that the word is the same if reversed.
//Module Name: palindrome_checker.js
//Module Purpose: Set up the main entry point of the program while getting user input to see if reversed is a palindrome or not.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/17/2026
//Last Modified: 4/17/2026




function isPalindrome(input,reversedInput){
    if(input === reversedInput){
        return "a Palindrome!"
    }
    else{
        return "not a Palindrome!"
    }
}



function reverseInput(userInput){
    var userInputLength = userInput.length;
    var reverseUserInput = "";
    if(userInputLength <= 1){
        return " a Invalid Palindrome input\nTry Again"

    }

    else{
        for(var index = userInputLength-1;index>=0;index--){
            reverseUserInput += userInput[index];

        }
    }
     return isPalindrome(userInput, reverseUserInput)



}




function mainFunction(){
    console.log("Welcome to the Palindrome Checker\n");
    let userPalindromeInput = prompt("Input to Check for Palindrome: ");
    isPalindromeAnswer = reverseInput(userPalindromeInput);
    console.log(userPalindromeInput + " is " + isPalindromeAnswer)
}







mainFunction();