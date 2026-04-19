//Name: Ryan Pereira
//Project Name: Coin Flip
//Description: A program that asks the user to flip a cpin and get a value between 0 to idicate Tails and 1 to indicate Head, continously if told to stop by user.
//Module Name: coin_flip.js
//Module Purpose: Set up the main entry point of the program while getting user for input on flipping the dice, for a value between 0 for tails and 1 for head, continously until the user asks to stop.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/18/2026
//Last Modified: 4/18/2026



//Defining a function to flip a coin and return the value of it being either heads or tails
function flipCoin(){
    //conFlipValue is set to a random fraction multipled by 2 and floored, giving the value rand of 0 and 1
    coinFlipValue = Math.floor(Math.random() * 2); 
    //If the coinFlippedValue is 1, then return Heads
    if(coinFlipValue === 1){
        //Return Heads string 
        return "Heads";
    }
    //Else then the value is 9, then return Tails
    else{
        //Return Tails string
        return "Tails";
    }
}



//Defining a askUserToFLipCoin function with userAnswer as argument
function askUserToFlipCoin(userAnswer){
    //While condition with userAnswer is not set to N character, the coin will be flipped until not satisfied
    while(userAnswer != "N"){
        //If the userAnswer is set to Y character, then flip the coin
        if(userAnswer === "Y"){
            //flippedCoinAnswer is set to result of flipCoin
            flippedCoinAnswer = flipCoin();
            //Log into the console the value of the flipped coin
            console.log("Coinf Flip Value: " + flippedCoinAnswer);
        }
        //Else then log into the console, the input is invalid
        else{
            //Log into the console that the answer is invalid
            console.log("Please give a valid answer");
        }
        //userAnswer is set to prompted input from the user if they want to flip the coin
        userAnswer = prompt("Do you want to flip the coing(Y/N): ");
    }
}



//Defining the mainFunction, the main entry point into the program
function mainFunction(){
    //Logging into the console, a welcome message
    console.log("Welcome to Coin Flip Program\n");
    //userCoinFlipAnswer is set to the prompted input from the user if they want to flip the coin result
    userCoinFlipAnswer = prompt("Do you want to flip the coing(Y/N): ");
    //Calling the askUserForFlipCoin function with userCoinFLipAnswer as input argument
    askUserToFlipCoin(userCoinFlipAnswer);
    //Logging into the console, a message to indicate the program has ended
    console.log("\nProgram has ended...");
}


//Calling the mainFunction
mainFunction();