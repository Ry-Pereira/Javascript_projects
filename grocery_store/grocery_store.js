



function printMenu(){
    console.log("Welcome to your Shopping List!")
    console.log("1) Add item")
    console.log("2) Check off item")
    console.log("3) Print list")
    console.log("4) Exit")
}


function addItem(list){
    let item = prompt("Enter the item you want to add: ");
    list.push(item);
}

function checkOffItem(list){
}


function printList(list){
}

function menuSelection(){
    printMenu();
    userChoice = parseInt(prompt("Please enter your choice (1-4): "));
    let userList = [];
    while (userChoice != 4){
        if(userChoice == 1){
            addItem(userList);

        }
        else if(userChoice == 2){
            checkOffItem();

        }
        else if(userChoice == 3){
            printList();

        }
        else{
            console.log("Invalid choice. Please try again.");
        }
        
    }
}

function welcomeMessage(){
    console.log("Welcome to the Grocery Store!");
}


function goodbyeMessage(){
    console.log("Thank you for visiting the Grocery Store. Goodbye!");
}

function main(){
    welcomeMessage();
    goodbyeMessage();
}




main();