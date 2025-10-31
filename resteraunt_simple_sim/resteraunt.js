let coldPastaAmount = 0;
let grilledCheeseAmount = 0;
let pieAmount = 0;

let wantColdPasta = "n";
let wantGrilledCheese = "n";
let wantPie = "n";

let age = 0;
let subTotal = 0;
let tax = .08;
let discount = 0;

let totalColdPastaCost = 0;
let totalGrilledCheeseCost = 0;
let totalPieCost = 0;
let totalCost = 0;


const coldPastaCost = 2.50;
const grilledCheeseCost = 5.55;
const pieCost = 3.00;


console.log("==================");
console.log("WELCOME TO THE RESTERAUNT ");
console.log("==================");

wantColdPasta = parseBool(prompt("Do you want Cold Pasta(true/false): "));

if(wantColdPasta === true){
    coldPastaAmount = parseInt(prompt("How many Cold pasta do you want"));
}
if(coldPastaAmount < 0){
    console.log("You must put ina  positive value for the amount of cold pasta that you want");
    coldPastaAmount = 0;
}



wantGrilledCheese = parseBool(prompt("Do you want Grilled Cheese(true/false): "));
if(wantGrilledCheese === true){
    grilledCheeseAmount = parseInt(prompt("How many Grilled Cheeses do you want"));
}
if(grilledCheeseAmount < 0){
    console.log("You must put ina  positive value for the amount of grilled cheeses that you want");
    grilledCheeseAmount = 0;
}



wantPie = parseBool(prompt("Do you want Pie(true/false): "));
if(wantPie === true){
    pieAmount = parseInt(prompt("How many Pies do you want"));
}
if(pieAmount < 0){
    console.log("You must put ina  positive value for the amount of pies that you want");
    pieAmount = 0;
}



age = parseInt(prompt("What is your age: "));


if(age >= 55){
    discount = (subTotal + (subTotal * tax)) * .55;
    totalPieCost = 0;
}
else if(age > 5 || age < 55){
    discount = 0;
    tax = .8


}
else if(age <= 5){
    tax = 0;
    discount = 0;

}
else{
    console.loge("Give a valid age");

}

console.log(`Subtotal : ${subTotal}`);
console.log(`Tax: ${tax}`);
console.loge(`Discount: ${discount}`);

console.log("==================");
totalCost = (subTotal + (subTotal * tax)) - discount;
console.log(`Total Cost: ${totalCost}`);
console.log("Please come again!");