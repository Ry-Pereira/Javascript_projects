//Name: Ryan Pereira
//Project Name: Dice Roll
//Description: A program that asks the user to roll a dice and get a value between 1 and 6, continously if told to stop by user.
//Module Name: dice_roll.js
//Module Purpose: Set up the main entry point of the program while getting user for input on rolling the dice, for a value between 1 and 6, continously until the user asks to stop.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/18/2026
//Last Modified: 4/18/2026


//Defining a function to roll the dice to get a value between 1 and 6
function rollTheDice(){
    //diceValue is set to the result of a random fraction multiplied by 7, then floored
    diceValue = Math.floor(Math.random() * 7);
    //If the dice value is 0, then 1 is returned
    if(diceValue === 0){
        //Return 1 value
        return 1;
    }
    //Else if the dice value is not 0, then the diceValeu will be returned as is
    else{
        //Return the diceValue as is
        return diceValue;
    }
}


//Defining a function to ask the user if they want to roll the dice
function askUserToRollDice(userAnswer){
    //Whiel loop with condition if the user answer is not N, then they will be continously asked if they want to roll the dice to get value, until they ask to stop
    while(userAnswer != "N"){
        //If the userAnswer variable value is the Y character, then roll the dice
        if(userAnswer === "Y"){
            //rolledDiceValue is set to the result of the rollTheDice function return value
            rolledDiceValue = rollTheDice();
            //Log into the console a message that the dice is being rolled
            console.log("Roll...Roll..Roll");
            //Log into the console  the dice roll value with rolledDiceValue passed in to be logged into the console
            console.log("Dice Roll Value: " + rolledDiceValue);
        }
        //Else the answer is not valid
        else{
            //Log into the console to let user know to put in a valid answer
            console.log("Please give a valid answer.");
        }
        //userAnswer is set to the prompted user input if they would like to roll the dice
        userAnswer = prompt("Would you like to roll the dice(Y/N): ");
    }

    
}


//Defining a mainfunction, the main entry point into the program.
function mainFunction(){
    //Log into the console, a welcome message to the user
    console.log("Welcome to the Dice Roll Program");
    //userAnswerQuestion stores the prompted input from ueser if they would like to roll the dice
    userAnswerToQuestion = prompt("Would you like to roll the dice(Y/N): ");
    //askUserToRollDice function is called with userAnswerToQuestion as input argument
    askUserToRollDice(userAnswerToQuestion);
    //Log into the console with a message to indicate the program has ended.
    console.log("\nThe program has ended...");


}



//Calling the main function, to enter the program
mainFunction();