//Function to print menu for mathematicl madness sums
function printMenu(){
    //Logs into console the menu and choices associated with numbering
    console.log("1) Summation");
    console.log("2) Product");
    console.log("3) Odd Count");
    console.log("4) Even Count");
    console.log("5) Exit");

}

//Function for print a welcome message for the user
function welcomeMessage(){
    //Logs into console a welcoming message for the user
    console.log("Welcome to the Mathemtical Madness Program!");
}

//Function for print a welcome message for the user
function goodbyeMessage(){
    //Logs into console a goodbye message to user
    console.log("Thanks for using the program");
    console.log("Goodbye! ");



}


//Function for user choice selection
function choiceSelection(){
    //Variable to hold user choice, 6 is just a placeholder to enter the while loop
    let choice = 6;
    //While loop to continue prompting user for choices until they select exit
    while(choice != 5){
        //Prints the menu for user to see choices
        printMenu();
        //Prompts user for choice input
        choice = parseInt(prompt("User Choice: "));
        //Function call to execute the choice selected by user
        choiceExecution(choice);
    }
}

//Function to execute user choice
function choiceExecution(selectedChoice){
    //Variable to hold the sum count result from each function
    let sumCount = 0;

    //If else statements to determine which function to call based on user choice
    if(selectedChoice == 1){
        //Prompts user for lower and higher bounds and parses them from string to integer
        let userLowerBound = parseInt(prompt("Lower Bound: "));
        let userHigherBound = parseInt(prompt("Higher Bound: "));
        //Function call to summation function with user bounds as parameters
        sumCount = summation(userLowerBound,userHigherBound);
        //Logs the result to console
        console.log(`Summation Count: ${sumCount}`);

    }
    //Similar structure for product function call if user selects choice 2
    else if (selectedChoice == 2){
        //Prompts user for lower and higher bounds and parses them from string to integer
        let userLowerBound = parseInt(prompt("Lower Bound: "));
        let userHigherBound = parseInt(prompt("Higher Bound: "));
        //Function call to product function with user bounds as parameters
        sumCount = product(userLowerBound,userHigherBound);
        //Logs the result to console
        console.log(`Product Count: ${sumCount}`);

    }
    //Similar structure for odd count function call if user selects choice 3
    else if (selectedChoice == 3){
        //Prompts user for lower and higher bounds and parses them from string to integer
        let userLowerBound = parseInt(prompt("Lower Bound: "));
        let userHigherBound = parseInt(prompt("Higher Bound: "));
        //Function call to odd count function with user bounds as parameters
        sumCount = oddCount(userLowerBound,userHigherBound);
        //Logs the result to console
        console.log(`Odd Count: ${sumCount}`);
        
    } 
    //Similar structure for even count function call if user selects choice 4
    else if (selectedChoice == 4){
        //Prompts user for lower and higher bounds and parses them from string to integer
        let userLowerBound = parseInt(prompt("Lower Bound: "));
        let userHigherBound = parseInt(prompt("Higher Bound: "));
        //Function call to even count function with user bounds as parameters
        sumCount = evenCount(userLowerBound,userHigherBound);
        //Logs the result to console
        console.log(`Even Count: ${sumCount}`);
        
    }
    //If user selects choice 5, exit message is printed from main loop
    else if (selectedChoice > 5){
        //Logs invalid choice message to console
        console.log("Please select a valid choice next time");
    }  
}


//Function to calculate summation from lower bound to upper bound
function summation(lowerBound,UpperBound){
    //Initializes summation sum count variable
    let summationSumCount = 0;
    //For loop to iterate from lower bound to upper bound
    for(let index = lowerBound;index <= UpperBound;index++){
        //Adds index to summation sum count
        summationSumCount += index;
    }
    //Returns the final summation sum count
    return summationSumCount;


}


//Function to calculate product from lower bound to upper bound
function product(lowerBound,UpperBound){
    //Initializes product sum count variable
    let productSumCount = lowerBound;
    //For loop to iterate from lower bound to upper bound
    for(let index = lowerBound + 1;index <= UpperBound;index++){
        //Multiplies index to product sum count
        productSumCount *= index;
    }
    //Returns the final product sum count
    return productSumCount;


}


//Function to calculate odd count from lower bound to upper bound
function oddCount(lowerBound,UpperBound){
    //Initializes sum count variable
    let oddCountSumCount = 0;
    //For loop to iterate from lower bound to upper bound
    for(let index = lowerBound;index <= UpperBound;index++){
        //If statement to check if index is odd
        if(index%2 != 0){
            //Adds index to sum count if it is odd
            oddCountSumCount += index;

        }
    }
    //Returns the final odd count sum
    return oddCountSumCount;

}


//Function to calculate even count from lower bound to upper bound
function evenCount(lowerBound,UpperBound){
    //Initializes sum count variable
    let evenCountSumCount = 0;
    //For loop to iterate from lower bound to upper bound
    for(let index = lowerBound;index < UpperBound;index++){
        //If statement to check if index is even
        if(index%2 == 0){
            //Adds index to sum count if it is even
            evenCountSumCount += index;

        }
    }
    //Returns the final even count sum
    return evenCountSumCount;

}


//Main function to run the program
function main(){
    //Function call to print welcome message
    welcomeMessage();
    //Function call to handle user choice selection and execution
    choiceSelection();
    //Function call to print goodbye message
    goodbyeMessage();
    
}


//Call to main function to start the program
main();