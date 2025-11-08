



function printMenu(){
    console.log("Welcome to your Shopping List!")
    console.log("1) Add item")
    console.log("2) Check off item")
    console.log("3) Print list")
    console.log("4) Exit")
}


function addItem(list){
    let itemToAdd = prompt("Enter the item you want to add: ");
    list.push(itemToAdd);
}

function crossOffItem(list,index){
    let itemCrossedOff = "";
    for(let i = 0; i < list[index].length; i++){
        if(i == 0 || i == list[index].length - 1){
            itemCrossedOff += list[i];
        }
    }
    list[index] = itemCrossedOff;
}

function checkOffItem(list){
    if(list.length == 0){
        console.log("Your shopping list is empty. Please add items first.");

    }
    else{
        let itemIndexToCheck = prompt("Enter the index of the item you want to check off: ");
        if(itemIndexToCheck >= 0 && itemIndexToCheck < list.length){
            for(let i = 0; i < list.length -1; i++){
                if(list[i] == list[itemIndexToCheck]){
                    crossOffItem(list,itemIndexToCheck);
                }
            }

        }
        else{
            console.log("Invalid index. Please try again.");
        }
}

}


function printList(list){
    console.log("Here is your shopping list: \n")
    if(list.length == 0){
        console.log("Your shopping list is empty.");
    }
    else{
        for(let i = 0; i < list.length -1; i++){
            console.log(`${i+1}: ${list[i]}`);
            }
    }
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