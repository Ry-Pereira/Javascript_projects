
//let userSodaAmount variable be set to 0
let userSodaAmount = 0;
//let fridgeCubeAmount variable be set to 0
let fridgeCubeAmount = 0;
//let sixPackAmount variable be set to 0
let sixPackAmount = 0;
//let singleAmount variable be set to 0
let singleAmount = 0;

//Logging into console a simple welcoming message to the user
console.log("Welcome to the Soda Packer Program");
//UserSodaAmount is reset ot the value of the prompted user input for the amount of sodas, then parsed from string to integer
userSodaAmount = parseInt(prompt("How many sodas do you have: "));


//If the userSodaAmount is lesser than 0, than its not valid for soda packing
if(userSodaAmount < 0){
    //Logging into console a simple message that the soda amount must be greater than 0
    console.log("Soda Amount must be greater than or equal to 0")
}
//Else if the soda amount is greater than or equal to 0, than its valid for packing
else{
    //FriedgeCubeAmount is reset to the floor division of the usersodaAmount by 24
    fridgeCubeAmount = Math.floor(userSodaAmount/24);
    //The usersodaAMount is decremented by the fridgeCubeAMoutn multiplies by 24
    userSodaAmount = userSodaAmount - (fridgeCubeAmount * 24);

    //SixPackAMount is set to the floor divisoon fo the user sodaAmount multiplies by 6
    sixPackAmount = Math.floor(userSodaAmount/ 6);
    //The usersodaAMount is decremented by the sixPackAMoutn multiplies by 6
    userSodaAmount = userSodaAmount - (sixPackAmount * 6);

    //singleAmount is set to the userSodaAmount
    singleAmount = userSodaAmount;
    //Logging into the console the amount for fridge cubes, six packs, and singles form the user soda amount input
    console.log(`Fridge Cubes: ${fridgeCubeAmount}\nSix Pack: ${sixPackAmount}\nSingles: ${singleAmount}`);

    

}
//Logging into console a thankyou message to the user for using program
console.log("Thankyou for using the program");
console.log("Goodbye...");
