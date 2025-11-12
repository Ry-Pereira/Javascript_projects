



function printMenu(){
    console.log("1) Count digits");
    console.log("2) Sum digits");
    console.log("3) Is Palindrome");
    console.log("4) Reverse ");
    console.log("5) Exit");
}

function countDigits(number){

}

function sumDigits(number){
    
}

function isPalindrome(number){
    
}

function reverseNumber(number){
    
}

function lastDigit(number){
    let digit_list = [number]
}
function choiceSelection(){
    printMenu();
    let userChoice = parseInt(prompt("Please enter your choice (1-5): "));
    let userNumber = 0;
    while(userChoice != 5){
        if(userChoice == 1){
            userNumber = parseInt(prompt("Enter a number to count its digits: "));
            let digitCount = countDigits(userNumber);
        }
        else if(userChoice == 2){

        }
        else if(userChoice == 3){
        }
        else if(userChoice == 4){
        }
        else{
            console.log("Invalid choice. Please try again.");
        }
        printMenu();
        userChoice = parseInt(prompt("Please enter your choice (1-5): "));
    }
}


function welcomeMessage(){
    console.log("Welcome to Number Manipulation!");
}




function goodbyeMessage(){
    console.log("Thank you for using Number Manipulation. Goodbye!");
}





function main(){
    welcomeMessage();
    choiceSelection();
    goodbyeMessage();
}