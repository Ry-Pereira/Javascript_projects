







function checkForAnagram(stringFirstInput,stringSecondInput){
    var stringFirstInputLetterValueCount = {};
    var stringSecondInputLetterValueCount = {};
    if(stringFirstInput.length !== stringSecondInput.length){
        return "Not a Anagram: Not the same count of letters";
    }
    else{
        for(var index = 0; index < stringFirstInput.length; index++){
            stringFirstInputLetterValueCount[stringFirstInput[index]] = 0;
            stringFirstInputLetterValueCount[stringFirstInput[index]] ++;
            stringSecondInputLetterValueCount[stringSecondInput[index]] = 0;
            stringSecondInputLetterValueCount[stringSecondInput[index]] ++;

        }
        

        for(let letterValue in stringFirstInputLetterValueCount){
            if(!stringSecondInputLetterValueCount.hasOwnProperty(letterValue)){
                return "Not Valid: Strings don't have same letters";

            }
            if(stringFirstInputLetterValueCount[letterValue] != stringSecondInputLetterValueCount[letterValue]){

                return "Not Valid: String don't have same letter count";
            }

        }
        return "Is a Anagram"


    }

}





function mainFUnction(){
    console.log("Welcome to the Anagram Checker Program");
    var userFistString = prompt("User First String: ");
    var userSecondString = prompt("User Second String: ");
    var anagramResult = checkForAnagram(userFistString,userSecondString);
    console.log("Anagram Result: " + anagramResult);
    console.log("Program Has Ended...");

}



mainFUnction();