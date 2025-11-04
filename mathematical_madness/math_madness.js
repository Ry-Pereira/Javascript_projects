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
function choisSelection(){
    let choice = 6;
    while(choice != 5){
        choice = parseInt(prompt("User Choice: "));
        choiceExecution(choice);
        
    }
}


function choiceExecution(selectedChoice){
    if(selectedChoice == 1)  
}



function summation(lowerBound,UpperBound){

}

function prodcut(lowerBound,UpperBound){

}

function oddCount(lowerBound,UpperBound){

}

function evenCount(lowerBound,UpperBound){

}

function main(){
    welcomeMessage();
    printMenu();
    goodbyeMessage();
    
}