

function welcomeMessage(){
    console.log("Welcome to the Fibonacci Sequence Generator");
    console.log("This program generates the Fibonacci sequence.\n");
}

function goodbyeMessage(){
    console.log("\nThank you for using the Fibonacci Sequence Generator.");
    console.log("Goodbye!");
}

function displayMenu(){
    console.log("\nPlease select an option:");
    console.log("1. Generate Fibonacci sequence");
    console.log("2. Exit\n");
}



function fibonacciSequence(numberInput){
    if(isNaN(numberInput)){
            console.log("Please enter a valid number.");
    }
    if(numberInput < 0){
        return "Input must be a positive integer.";
    }
    else if(numberInput === 0){
        return 0;
    }
    else if(numberInput === 1){
        return 1;
    }
    else{
        return fibonacciSequence(numberInput - 1) + fibonacciSequence(numberInput - 2);
    }
}


function startProgram(){
    console.log("Starting the Fibonacci Sequence Generator...");
    console.log("Please put a positive integer.");
    displayMenu();
    var userChoice = parseInt(prompt("Enter your choice: "));
    while(userChoice !== 2){
        if(userChoice === 1){
            let numberInput = parseInt(prompt("Enter a positive integer: "));
            console.log("The Fibonacci sequence for " + numberInput + " is: " + fibonacciSequence(numberInput));
        }
        else{
            console.log("Invalid choice. Please try again.");
        }
        displayMenu();
        userChoice = parseInt(prompt("Enter your choice: "));
    }
}



function main(){
    welcomeMessage();
    startProgram();
    goodbyeMessage();
}




main();