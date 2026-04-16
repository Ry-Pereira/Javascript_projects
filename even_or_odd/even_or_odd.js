
//Name: Ryan Pereira
//Project Name: Even or Odd
//Description: A program that asks the user for a number and returns a string on whether the number is even or odd.
//Module Name: even_or_odd.js
//Module Purpose: Set up the main entry point of the program while getting user data and deciding whether the number is even, odd, or invalid.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/15/2026
//Last Modified: 4/15/2026






function is_even_or_odd(numberToCheck){
    let numberRemainder = numberToCheck % 2;
    if(numberRemainder === 0){
        return "Even"
    }
    if(numberRemainder === 1){
        return "Odd"
    }
    else{
        return "Invalid"
    }
}




function main(){
    let userNumber = parseInt(prompt("Number: "))
    let result = is_even_or_odd(userNumber)
    console.log("\nThe Number you put is " + result + ".")

    
}








main();