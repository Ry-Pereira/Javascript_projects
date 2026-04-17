//Name: Ryan Pereira
//Project Name: Hex to Binary
//Description: A program that asks the user for a hex input and conver it ot binary, whhich is the output given.
//Module Name: fizzbuzz.js
//Module Purpose: Set up the main entry point of the program while getting user hex data input, converting it o binary, and giving back to user as output.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/16/2026
//Last Modified: 4/17/2026














function convert_hex_to_binary(hexInput){
    hexValueLength = hexInput.length;
    var binaryResult= "";
    for(var index =0;index < hexValueLength; index++)
        switch(hexInput[index]){
            case "0":
                binaryResult += "0000 ";
                break;
            case "1":
                binaryResult += "0001 ";
                break;
            case "2":
                binaryResult += "0010 ";
                break;
            case "3":
                binaryResult += "0011 ";
                break;
            case "4":
                binaryResult += "0100 ";
                break;
            case "5":
                binaryResult += "0101 ";
                break;
            case "6":
                binaryResult += "0110 ";
                break;
            case "7":
                binaryResult  += "0111 ";
                break;
            case "8":
                binaryResult += "1000 ";
                break;
            case "9":
                binaryResult += "1001 ";
                break;
            case "A":
                binaryResult += "1010 ";
                break;
            case "B":
                binaryResult += "1011 ";
                break;
            case "C":
                binaryResult += "1100 ";
                break;
            case "D":
                binaryResult += "1101 ";
                break;
            case "E":
                binaryResult += "1110 ";
                break;
            case "F":
                binaryResult += "1111 ";
                break;
            
            default:
                return "Not Valid"
            }
            
        
    return binaryResult;
        


}


//Defining the mainFunction, the entry point into the program itself
function mainFunction(){
    let userHexInput = prompt("Hex: ");
    let binary_value = "";
    binaryAnswer = convert_hex_to_binary(userHexInput);
    console.log("Hex Input: " + userHexInput + " -> " + binaryAnswer);

}




//Calling the main function, for whole program to begin.
mainFunction();