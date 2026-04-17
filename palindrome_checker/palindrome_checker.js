//Name: Ryan Pereira
//Project Name: Palindrome Checker
//Description: A program that asks the user for a input, assumed as string. Return a string indicating that its a palindrome, in that the word is the same if reversed.
//Module Name: palindrome_checker.js
//Module Purpose: Set up the main entry point of the program while getting user input to see if reversed is a palindrome or not.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/17/2026
//Last Modified: 4/17/2026





//Defining a function that takes a input and the reversed of that input, if they are equal to each other.
function isPalindrome(input,reversedInput){
    //If the input is the same as the reversedInput, it's a palindrome.
    if(input === reversedInput){
        //A string is returned to indicate that the input is a palindrome.
        return "a Palindrome!";
    }
    //Else if the input is not same as the reversedInput, it's not a palindrome.
    else{
        //A string is retuned to indicate that the input is not a palindrome.
        return "not a Palindrome!";
    }
}




//Defining a function to reverse the input with the userInput as input argument
function reverseInput(userInput){
    //Variable userInputLengeth is set to the length of the userInput
    var userInputLength = userInput.length;
    //Variable reversedUserInput is set to a empty string.
    var reverseUserInput = "";
    //If the userInputLength is lesser than or equal to 1, can't be counted for palindrome checking, since it's too short.
    if(userInputLength <= 1){
        //Return a string to indicate the input is invalid, and to try again later
        return " a Invalid Palindrome input\nTry Again";
    }
    //Else if the userInputLength qualifies
    else{
        //For loop every index value in the userInput from reverse
        for(var index = userInputLength-1;index>=0;index--){
            //Incrementing the userInput value at index to reverseduserInput
            reverseUserInput += userInput[index];
        }
    }
    //Return the value of isPalindrome function with userInput and reversedUserInput as argument input.
     return isPalindrome(userInput, reverseUserInput);
}



//Defining a mainFunction, the main entry point into the program.
function mainFunction(){
    //Log into the console a welcome message.
    console.log("Welcome to the Palindrome Checker\n");
    //Lets a varaible userPalindromeInput is set to the prompted input from the user to check if it is a palindrome.
    let userPalindromeInput = prompt("Input to Check for Palindrome: ");
    //isPalindromeAnswer is set to the result of the function reverseInput with userPalindromeInput as input argument.
    isPalindromeAnswer = reverseInput(userPalindromeInput);
    //Log into the console the Palindrome result of the input
    console.log(userPalindromeInput + " is " + isPalindromeAnswer);
    //Log into the console, that the program has ended.
    console.log("\nThe program has ended\n");
}






//Calling the main function,entering the program.
mainFunction();