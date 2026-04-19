



var upperCaseLettersList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseLettersList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersList = ["0","1","2","3","4","5","6","7","8","9"];
var symbolsList = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}",";",";",":","'","\"","\\","|",",",".","<",">","/","?"];





function generatePassword(specList){
    var upperCaseLettersListLength = upperCaseLettersList.length;
    var lowerCaseLettersListLength = lowerCaseLettersList.length;
    var numbersListLength = numbersList.length;
    var symbolListLength = symbolsList.length;

    var generatedPassword = "";

    for(var number = 0; number < specList[0];number++){
        var upperCaseValue = Math.floor(Math.random() * upperCaseLettersListLength); 
        generatedPassword += upperCaseValue;
    }

    for(var number = 0; number < specList[1];number++){
        var lowerCaseValue = Math.floor(Math.random() * lowerCaseLettersListLength); 
        generatedPassword += lowerCaseValue;
    }

    for(var number = 0; number < specList[2];number++){
        var numberValue = Math.floor(Math.random() * numbersListLength); 
        generatedPassword += numberValue;
    }

    for(var number = 0; number < specList[3];number++){
        var symbolValue = Math.floor(Math.random() * symbolListLength); 
        generatedPassword += symbolValue;
    }
    return generatedPassword;
}


function askUserForPasswrodSpecs(){
    let upperCaseLettersAmount = parseInt(prompt("How many Upper Case Letters in the Password: "));
    let lowerCaseLettersAmount = parseInt(prompt("How many Lower Case Letters in the Password: "));
    let numbersAmount = parseInt(prompt("How many Numbers in the Password: "));
    let symbolsAmount = parseInt(prompt("How many Symbols in the Password: "));

    if(upperCaseLettersAmount <= 0 || Number.isInteger(upperCaseLettersAmount) == false){
        console.log("Please input a valid amount of uppercase letters");
        askUserForPasswrodSpecs();
    }
    else if(lowerCaseLettersAmount <= 0 || Number.isInteger(lowererCaseLettersAmount) == false){
        console.log("Please input a valid amount of lowercase letters");
        askUserForPasswrodSpecs();

    }
    else if(numbersAmount <= 0 || Number.isInteger(numbersAmount) == false){
        console.log("Please input a valid amount of numbers");
        askUserForPasswrodSpecs();

    }
    else if(symbolsAmount <= 0 || Number.isInteger(symbolsAmount) == false){
        console.log("Please input a valid amount of symbols");
        askUserForPasswrodSpecs();

    }
    else{
        return [upperCaseLettersAmount,lowerCaseLettersAmount,numbersAmount,symbolsAmount];
    }
}





function mainFunction(){
    console.log("Welcome to the Password Generator\n");
    userSpecsList = askUserForPasswrodSpecs();
    userGeneratedPassword = generatePassword(userSpecsList);
    console.log("Generated Password: " + userGeneratedPassword);
    console.log("Program has ended...");
}