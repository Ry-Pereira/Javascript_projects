
//Name: Ryan Pereira
//Project Name: Even or Odd
//Description: A program that asks the user for a number and returns a string on whether the number is even or odd.
//Module Name: even_or_odd.js
//Module Purpose: Set up the main entry point of the program while getting user data and deciding whether the number is even, odd, or invalid.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/15/2026
//Last Modified: 4/15/2026





//Defined a function that takes a number to check and return a string to indicate if odd,even, or invalid.
function is_even_or_odd(numberToCheck){
    //Letting numberRemainder to numberToCheck with remainder of 2 to get even,odd,or invalid
    let numberRemainder = numberToCheck % 2;
    //If numberRemainder is 0, then even
    if(numberRemainder === 0){
        //Return even string
        return "Even"
    }
    //If numberRemainder is 1, then odd
    if(numberRemainder === 1){
        //Return odd string
        return "Odd"
    }

    //If all conditions don't meet
    else{
        //Return invalid string
        return "Invalid"
    }
}



//Defining the main function, the entry point into the program
function main(){
    //Let userNumber set to the prompt input from user, parsing it for the integer
    let userNumber = parseInt(prompt("Number: "))
    //Reuslt is set to the result of the userNumber as parameter input into is_even_or_odd function
    let result = is_even_or_odd(userNumber)
    //Logs into console with string and result in it to indciate to user if number is even,odd, or invalid.
    console.log("\nThe Number you put is " + result + ".")

    
}







//Calling the main function
main();