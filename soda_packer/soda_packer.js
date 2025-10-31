let userSodaAmount = 0;
let fridgeCubeAmount = 0;
let sixPackAmount = 0;
let singleAmount = 0;


console.log("Welcome to the Soda Packer Program");
userSodaAmount = parseInt(prompt("How many sodas do you have: "));

if(userSodaAmount < 0){
    console.log("Soda Amount must be greater than or equal to 0")
}
else{
    fridgeCubeAmount = Math.floor(userSodaAmount/24);
    userSodaAmount = userSodaAmount - (fridgeCubeAmount * 24);


    sixPackAmount = Math.floor(userSodaAmount/ 6);

    userSodaAmount = userSodaAmount - (sixPackAmount * 6);

    singleAmount = userSodaAmount;

    console.log(`Fridge Cubes: ${fridgeCubeAmount}\nSix Pack: ${sixPackAmount}\nSingles: ${singleAmount}`);

    

}
console.log("Thankyou for using the program");

console.log("Goodbye...");
