function printMenu(){
    console.log("1) Summation");
    console.log("2) Product");
    console.log("3) Odd Count");
    console.log("4) Even Count");
    console.log("5) Exit");

}

function welcomeMessage(){
    console.log("Welcome to the Mathemtical Madness Program!");
}


function goodbyeMessage(){
    console.log("Thanks for using the program");
    console.log("Goodbye! ");



}
function choiceSelection(){
    let choice = 6;
    while(choice != 5){
        printMenu();
        choice = parseInt(prompt("User Choice: "));
        choiceExecution(choice);
        
        
    }
}


function choiceExecution(selectedChoice){
    let sumCount = 0;
    if(selectedChoice == 1){
        let userLowerBound = parseInt(prompt("Lower Bound: "));
        let userhigherBound = parseInt(prompt("Lower Bound: "));
        sumCount = summation(userLowerBound,userhigherBound);
        console.log(`Summation Count: ${sumCount}`);

    }
    else if (selectedChoice == 2){
        let userLowerBound = parseInt(prompt("Lower Bound: "));
        let userhigherBound = parseInt(prompt("Lower Bound: "));
        sumCount = product(userLowerBound,userhigherBound);
        console.log(`Product Count: ${sumCount}`);

    } 
    else if (selectedChoice == 3){
        let userLowerBound = parseInt(prompt("Lower Bound: "));
        let userhigherBound = parseInt(prompt("Lower Bound: "));
        sumCount = oddCount(userLowerBound,userhigherBound);
        console.log(`Odd Count: ${sumCount}`);
        
    } 
    else if (selectedChoice == 4){
        let userLowerBound = parseInt(prompt("Lower Bound: "));
        let userhigherBound = parseInt(prompt("Lower Bound: "));
        sumCount = evenCount(userLowerBound,userhigherBound);
        console.log(`Even Count: ${sumCount}`);
        
    }
    else if (selectedChoice > 5){
        console.log("Please select a valid choice next time");
    }  
}



function summation(lowerBound,UpperBound){
    let summationSumCount = 0;
    for(let index = lowerBound;index <= UpperBound;index++){
        summationSumCount += index;
    }
    return summationSumCount;


}

function product(lowerBound,UpperBound){
    let productSumCount = lowerBound;
    for(let index = lowerBound + 1;index <= UpperBound;index++){
        productSumCount *= index;
    }
    return productSumCount;


}

function oddCount(lowerBound,UpperBound){
    let oddCountSumCount = 0;
    for(let index = lowerBound;index <= UpperBound;index++){
        if(index%2 != 0){
            oddCountSumCount += index;

        }
    }
    return oddCountSumCount;

}

function evenCount(lowerBound,UpperBound){
    let evenCountSumCount = 0;
    for(let index = lowerBound;index < UpperBound;index++){
        if(index%2 == 0){
            evenCountSumCount += index;

        }
    }
    return evenCountSumCount;

}

function main(){
    
    welcomeMessage();
    choiceSelection();
    goodbyeMessage();
    
}