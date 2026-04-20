


var vowelLetters = ["A","a","E", "e","I", "i","O", "o","U", "u"];
var alphabetLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



function isAlphabetLetter(characterValue){
    for(var alphabetLetterIndex; alphabetLetterIndex < alphabetLetters.length; alphabetLetterIndex++){
        if(characterValue === alphabetLetters[alphabetLetterIndex]){
            return true;
        }
    }
    return false;
}


function removeVowels(stringInput){
    for(var stringIndex = 0; stringIndex < stringInput.length; stringIndex++){
        if (isAlphabetLetter(stringInput[stringIndex]) == false && stringInput[stringIndex] != " ") {
            return "Please Put Valid String with alphabet character";
        }
        for(var vowelLetterIndex = 0; vowelLetterIndex < vowelLetters.length; vowelLetterIndex++ ){

            if(stringInput[stringIndex] === vowelLetters[vowelLetterIndex]){
                stringInput[stringIndex] = "*";
                break;
            }
        }
    }
    return stringInput.join("");
}




function mainFunction(){
    console.log("Welcome to Vowel Remover Program\n");
    userStringInput = prompt("Give me a String Input: ").split("");
    console.log(userStringInput);
    removedVowelResult = removeVowels(userStringInput);
    console.log("Removed Vowels Result: " + removedVowelResult);
    console.log("\nProgram has ended...");
}



mainFunction();