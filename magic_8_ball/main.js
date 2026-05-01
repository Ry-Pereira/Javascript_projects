import { Magic8Ball } from "./magic_8_ball_class";
const magic8Ball = Magic8Ball;




function printMenu(){
    console.log("\n1. To Shake");
    console.log("2. Exit\n");
}




function runProgram(){
    
    printMenu();
    var userChoice = parseInt(prompt("Choice: "));
    while(userChoice != 2){
        if(userChoice == 1){
            let userRequest = prompt("Request: ");
            console.log(magic8Ball.shake());

        }
        else{
            console.log("Invalid Request");
        }
        printMenu();
        userChoice = parseInt(prompt("Choice: "));


    }

    
}



function mainFunction(){
    console.log("Welcome to the Magic 8 Ball Program");
    console.log("Program has ended");
}




if(require.main === module){
    mainFunction();

}