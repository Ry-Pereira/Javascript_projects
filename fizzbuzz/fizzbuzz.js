//Name: Ryan Pereira
//Project Name: Fizzbuzz
//Description: A program that asks the user for a start and end number. Generate a sequence of that range, and determine wheter the number fits the qualifications of Fizz,Buzz, or FizzBuzz.
//Module Name: fizzbuzz.js
//Module Purpose: Set up the main entry point of the program while getting user data and deciding whether the number sequence is Fizz if divisible by 3, Buzz if divisble by 5, and Fizzbuzz if divisble by 3 and 5.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/16/2026
//Last Modified: 4/16/2026





//Defining a function for fizzbuzz slection of whter a number is fizz,buzz, or fizzbuzz from the number input
function fizzBuzzSelection(number){
    //If the number has 0 remainder after dividing by 3, then follows the next step to qualify as Fizzbuzz
    if(number%3 === 0){
        //If the number has 0 remainder after dividing by 5, then its FizzBuzz
        if(number%5 ===0){
            //Returns FizzBuzz string
            return "FizzBuzz"
        }

    }
    //If the number has 0 remainder after dividing by 3, then its Fizz
    if(number%3 === 0){
        //Returns Fizz string
        return "Fizz"
    }
    //If the number has 0 remainder after dividing by 5, then its Buzz
    if(number%5 === 0){
        //Returns Buzz string
        return "Buzz"
    }
    //Else if all conditions don't meet then the number does not qualify
    else{
        //Returns the number itsself
        return number
    }
}


//Defining the function for generating a sequence of numbers from start to end with input provided by user
function fizzBuzzSequence(numberStart,numberEnd){
    //If numberStart is greater than the numberEnd, then the sequence ends
    if(numberStart > numberEnd){
        //Returns out of sequence function
        return
    }
    //Else the numberStart has not met the numberEnd
    else{
        //FizzBuzzResult is set to the result of the function fizzBuzzSelection with numberStart passed in as argument input
        fizzBuzzResult = fizzBuzzSelection(numberStart)
        //Logs into console with numberstart,colon, and the fizzBuzzResult
        console.log(numberStart + ":" + fizzBuzzResult)
        //Calls the function in itself, with numberStart incremented by 1, with numberEnd passed in, recursively.
        fizzBuzzSequence(numberStart++,numberEnd)
    }
}


//Defining the mainFunction, the entry point into the program itself
function mainFunction(){
    //Logs into the console a welcome message to user of the program
    console.log("Welcome to the FIZZBUZZ Program\n")
    //Lets userStartNumber be set to the prompted input from user that is parsed for the integer
    let userStartNumber = parseInt(prompt("Start Number: "))
    //Lets userEndNumber be set to the prompted input from user that is parsed for the integer
    let userEndNumber = parseInt(prompt("End Number: "))
    //Calling the fizzBuzzSequence with userStartNumber and userEndNumber passed in as argument
    fizzBuzzSequence(userStartNumber,userEndNumber)
    //Logs into the console a welcome message to user of the program
    console.log("\nProgram has ended\nGoodbye")
}


//Calling the main function, for whole program to begin.
mainFunction()