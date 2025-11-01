
//Let the variable coldpastaAmount to 0
let coldPastaAmount = 0;
//Let the variable grilledCheeseAmount to 0
let grilledCheeseAmount = 0;
//Let the variable pieAmount to 0
let pieAmount = 0;


//Let wantedColdPasta set to literal char n
let wantColdPasta = "n";
//Let wantedGrilledCheese set to literal char n
let wantGrilledCheese = "n";
//Let wantedPie set to literal char n
let wantPie = "n";


//Let the variable age to 0
let age = 0;
//Let the variable subTotal to 0
let subTotal = 0;
//Let the variable tax to .08
let tax = .08;
//Let the variable discount to 0
let discount = 0;

//let totalCost set to 0
let totalCost = 0;

//Setting constant coldPastaCost to 2.50
const coldPastaCost = 2.50;
//Setting constant coldPastaCost to 5.55
const grilledCheeseCost = 5.55;
//Setting constant coldPastaCost to 3.00
const pieCost = 3.00;



//Logging into console a welcoming message to the user
console.log("==================");
console.log("WELCOME TO THE RESTERAUNT ");
console.log("==================");


//Prompts the user if they want cold pasta
wantColdPasta = prompt("Do you want Cold Pasta(y/n): ");


// If want Cold Pasta is set to y
if(wantColdPasta === "y"){
    //Prompt the user for how many cold pasta they want, and parseing it froma string to a integer
    coldPastaAmount = parseInt(prompt("How many Cold pasta do you want"));
}
//If the coldPastaAmount is lesser than 0
if(coldPastaAmount < 0){
    //Loggs into the consoles that a positive value must be in for the amount of cold pasta
    console.log("You must put ina  positive value for the amount of cold pasta that you want");
    //Cold Pasta amount is set to 0
    coldPastaAmount = 0;
}


//Prompts the user if they want grilled cheese
wantGrilledCheese = prompt("Do you want Grilled Cheese(y/n): ");
// If want grilled cheese is set to string literal y
if(wantGrilledCheese === "y"){
    //Prompt the user for how many grilled cheese they want, and parseing it froma string to a integer
    grilledCheeseAmount = parseInt(prompt("How many Grilled Cheeses do you want"));
}

//If the coldGrilled Cheese amount is lesser than 0
if(grilledCheeseAmount < 0){
    //Loggs into the consoles that a positive value must be in for the amount of grilled cheese
    console.log("You must put ina  positive value for the amount of grilled cheeses that you want");
    //Grilled Cheese amount is set to 0
    grilledCheeseAmount = 0;
}


//Prompts the user if they want pie
wantPie = prompt("Do you want Pie(y/n): ");
// If want pie is set to string literal y
if(wantPie === "y"){
    //Prompt the user for how many pies they want, and parseing it froma string to a integer
    pieAmount = parseInt(prompt("How many Pies do you want"));
}
//If the pie amount is lesser than 0
if(pieAmount < 0){
    //Loggs into the consoles that a positive value must be in for the amount of pie
    console.log("You must put ina  positive value for the amount of pies that you want");
    //Pie amount is set to 0
    pieAmount = 0;
}


//Prompt the user for their aget, and parseing it from a string to a integer
age = parseInt(prompt("What is your age: "));


//If the age is greater than or equalt to 55. They will recieve a senior discount, deducted after tax, the costs will be printed
if(age >= 55){
    subTotal = (pieAmount * pieCost) + (coldPastaAmount * coldPastaCost) + (grilledCheeseAmount * grilledCheeseCost);
    discount = (subTotal + (subTotal * tax)) * .55;
    totalCost = (subTotal + (subTotal * tax)) - discount;
    console.log(`${coldPastaAmount} Cold Pastas @ ${coldPastaCost} == > ${coldPastaAmount * coldPastaCost}`);
    console.log(`${grilledCheeseAmount} Grilled Cheeses @ ${grilledCheeseCost} == > ${grilledCheeseAmount * grilledCheeseCost}`);
    console.log(`${pieAmount} Pies @ ${pieCost} == > ${pieAmount * pieCost}`);    
   
}

//If the age is greater than 5 and lesser than 55. They will not recieve a senior discount, deducted after tax, the costs will be printed
else if(age > 5 && age < 55){
    subTotal = (pieAmount * pieCost) + (coldPastaAmount * coldPastaCost) + (grilledCheeseAmount * grilledCheeseCost);
    discount = 0;
    tax = .8
    totalCost = (subTotal + (subTotal * tax)) - discount;
    console.log(`${coldPastaAmount} Cold Pastas @ ${coldPastaCost} == > ${coldPastaAmount * coldPastaCost}`);
    console.log(`${grilledCheeseAmount} Grilled Cheeses @ ${grilledCheeseCost} == > ${grilledCheeseAmount * grilledCheeseCost}`);
    console.log(`${pieAmount} Pies @ ${pieCost} == > ${pieAmount * pieCost}`);    


}
//If they are less than 5, they will not be taxed, not discounted, but their pie cost is free
else if(age <= 5){
    subTotal =  (coldPastaAmount * coldPastaCost) + (grilledCheeseAmount * grilledCheeseCost);
    tax = 0;
    discount = 0;
    totalPieCost = 0;
    totalCost = (subTotal + (subTotal * tax)) - discount;
    console.log(`${coldPastaAmount} Cold Pastas @ ${coldPastaCost} == > ${coldPastaAmount * coldPastaCost}`);
    console.log(`${grilledCheeseAmount} Grilled Cheeses @ ${grilledCheeseCost} == > ${grilledCheeseAmount * grilledCheeseCost}`);
    console.log(`${pieAmount} Pies @ ${pieCost} == > 0`);    
    

}
//Else the age is not a valid number integer
else{
    //Logs into the console to five a vlaid age
    console.log("Give a valid age");

}

//Logged into console the subtotal
console.log(`Subtotal : ${subTotal}`);
//Logged into console the tax
console.log(`Tax: ${tax}`);
//Logged into console the discount
console.log(`Discount: ${discount}`);

console.log("==================");
//Logged into console the total cost after tax and discount if possible
totalCost = (subTotal + (subTotal * tax)) - discount;
//Logged into console the totalCost
console.log(`Total Cost: ${totalCost}`);
//Logged into console a goodbye message
console.log("Please come again!");