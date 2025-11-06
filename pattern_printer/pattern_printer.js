



function welcomeMessage(){
    console.log("Welcome to the Pattern Printer!");
}

function goodbyeMessage(){
    console.log("Thank you for using the Pattern Printer. Goodbye!");
}

function printMenu(){
    console.log("1) Checkerboard");
    console.log("2) Twin Islands");
    console.log("3) Running Total");
    console.log("4) Upper Left Triangle");
    console.log("5) Upper Right Triangle");
    console.log("6) Exit");
}

function printCheckerboardPattern(){

}

function printTwinIslandsPattern(){

}

function printRunningTotalPattern(){

}
function printUpperLeftTrianglePattern(){

}
function printUpperRightTrianglePattern(){

}


function getUserChoice(){
    printMenu();
    let userChoice = parseInt(prompt("Enter your choice: "));
    while(userChoice != 6){
        if(userChoice == 1){
            printCheckerboardPattern();
        } else if(userChoice == 2){
            printTwinIslandsPattern();
        } else if(userChoice == 3){
            printRunningTotalPattern();
        } else if(userChoice == 4){
            printUpperLeftTrianglePattern();
        } else if(userChoice == 5){
            printUpperRightTrianglePattern();
        }
        else{
            console.log("Invalid choice. Please try again.");
        }
        printMenu();
        userChoice = parseInt(prompt("Enter your choice: "));
    }
}

function main(){
    welcomeMessage();
    getUserChoice();
    goodbyeMessage();

}



main();