



function rollTheDice(){
    diceValue = Math.floor(Math.random() * 7);
    if(diceValue === 0){
        return 1;
    }
    else{
        return diceValue;
    }
}



function askUserToRollDice(userAnswer){
    while(userAnswer != "N"){
        if(userAnswer === "Y"){
            rolledDiceValue = rollTheDice();
            console.log("Roll...Roll..Roll");
            console.log("Dice Roll Value: " + rolledDiceValue);
        }
        else{
            console.log("Please give a valid answer.");
        }
        userAnswer = prompt("Would you like to roll the dice(Y/N): ");
    }

    
}



function mainFunction(){
    console.log("Welcome to the Dice Roll Program");
    userAnswerToQuestion = prompt("Would you like to roll the dice(Y/N): ");
    askUserToRollDice(userAnswerToQuestion);
    console.log("\nThe program has ended...");


}




mainFunction();