


function welcomeMessage(){
    console.log("Welcome to the JavaScript Prime Number Checker!");
    console.log("Please enter a number from 1 to 100 to check if it's a prime number.\n");
}



function goodbyeMessage(){
    console.log("\nThank you for using the Prime Number Checker. Goodbye!");
}



function displayMenu(){
    console.log("Menu:");
    console.log("1. Check if a number is prime");
    console.log("2. Exit\n");
}



function isPrimeOrComposite(num) {
    if(num <= 1){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}




function programStart(){
    displayMenu();
    let choice = prompt("Enter your choice (1 or 2): ");
    while(choice != "2"){
        if(choice == "1"){
            let number = Number(prompt("\nEnter a number from 1 to 100: "));
            if(isNaN(number) || number < 1 || number > 100){
                console.log("Invalid number. Please enter a number from 1 to 100.");
            }
            else {
                if(isPrimeOrComposite(number)){
                    console.log(number + " is a prime number.");
                } 
                else {
                    console.log(number + " is not a prime number, it is a composite number.");
                }
            }
        } 
        else {
            console.log("\nInvalid choice. Please try again.");
        }
        choice = prompt("\nEnter your choice (1 or 2): ");
    }
}

function main(){
    welcomeMessage();
    programStart();
    goodbyeMessage();
}

main();