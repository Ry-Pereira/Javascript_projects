//Letting the numerator variable be set to 0,initially
let numerator = 0;
//Letting the denominator variable be set to 0, initially
let denominator = 0;
//Letting the remainder variable be set to 0, initially
let remainder = 0;



//Logging in the a console a quick welcome message into the program
console.log("Welcome to the Long division Printer Program");
//Numerator will hold the prompted numerator input from the user an parse it into a Integer from string
numerator = parseInt(prompt("Numerator: "));
//Denominator will hold the prompted denominator input from the user an parse it into a Integer from string
denominator = parseInt(prompt("Denominator: "));


//If the denominator is 0, a console message will be sent to tell them they can't divide by zero
if(denominator === 0){
    //A console log message will tell the user to not divide zero when doing division
    console.log("Sorry you cannot divide by zero!");
}

//Else if the denominator is not 0, a valid logn division will occur
else{
    //Remainder ise set to numerator long divided by the denominator
    remainder = numerator/denominator;
    //Console logged with a message of the output of the numerator divided by the denominator equalling the remainder
    console.log(`${numerator} / ${denominator} = ${remainder}`);
}

//Console logged with a message, thanking the user for using the program
console.log("Thankyou for using the program");
console.log("Bye");