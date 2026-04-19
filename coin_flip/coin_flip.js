









function flipCoin(){
    coinFlipValue = Math.floor(Math.random() * 2); 
    if(coinFlipValue === 1){
        return "Heads";
    }
    else{
        return "Tails";
    }
}


function askUserToFlipCoin(userAnswer){
    while(userAnswer != "N"){
        if(userAnswer === "Y"){
            flippedCoinAnswer = flipCoin();
            console.log("Coinf Flip Value: " + flippedCoinAnswer);
        }
        else{
            console.log("Please give a valid answer");
        }
        userAnswer = prompt("Do you want to flip the coing(Y/N): ");
    }
}


function mainFunction(){
    console.log("Welcome to Coin Flip Program\n");
    userCoinFlipAnswer = prompt("Do you want to flip the coing(Y/N): ");
    askUserToFlipCoin(userCoinFlipAnswer);
    console.log("\nProgram has ended...");
}



mainFunction();