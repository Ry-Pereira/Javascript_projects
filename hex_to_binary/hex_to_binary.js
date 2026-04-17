//Name: Ryan Pereira
//Project Name: Hex to Binary
//Description: A program that asks the user for a hex input and conver it ot binary, whhich is the output given.
//Module Name: fizzbuzz.js
//Module Purpose: Set up the main entry point of the program while getting user hex data input, converting it o binary, and giving back to user as output.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 4/16/2026
//Last Modified: 4/17/2026













//Defining a function to convert hex to binary with hexInut as argument input from the user
function convertHexToBinary(hexInput){
    //Setting the hexValue:Lenge set to the hexInput length
    hexValueLength = hexInput.length;
    //Setting variable binaryResult to empty string
    var binaryResult= "";
    //For in loop with index set to 0, if the index is less than hexvalue length then index increments, to loop through each value in the hexInput
    for(var index =0;index < hexValueLength; index++)
        //Setting up a switch statement with hexInput value at index
        switch(hexInput[index]){
            //If case is 0
            case "0":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "0000 ";
                //Break out of swithc case
                break;
            //If case is 1
            case "1":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "0001 ";
                //Break out of swithc case
                break;
            //If case is 2
            case "2":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "0010 ";
                //Break out of swithc case
                break;
            //If case is 3
            case "3":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "0011 ";
                //Break out of swithc case
                break;
            //If case is 4
            case "4":
                //BinaryResult increments t
                // //Break out of swithc casehe binary value that accords to the hex value
                binaryResult += "0100 ";
                //Break out of swithc case
                break;
            //If case is 5
            case "5":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "0101 ";
                //Break out of swithc case
                break;
            //If case is 6
            case "6":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "0110 ";
                //Break out of swithc case
                break;
            //If case is 7
            case "7":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult  += "0111 ";
                //Break out of swithc case
                break;
            //If case is 8
            case "8":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "1000 ";
                //Break out of swithc case
                break;
            //If case is 9
            case "9":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "1001 ";
                //Break out of swithc case
                break;
            //If case is A
            case "A":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "1010 ";
                //Break out of swithc case
                break;
            //If case is B
            case "B":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "1011 ";
                //Break out of swithc case
                break;
            //If case is C
            case "C":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "1100 ";
                //Break out of swithc case
                break;
            //If case is D
            case "D":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "1101 ";
                //Break out of swithc case
                break;
            //If case is E
            case "E":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "1110 ";
                //Break out of swithc case
                break;
            //If case is F
            case "F":
                //BinaryResult increments the binary value that accords to the hex value
                binaryResult += "1111 ";
                //Break out of swithc case
                break;
            //If all cases don't meet, then it's not a valid hexvalue
            default:
                //Returns out of the entire function to say the input is not valid
                return "Not Valid"
            }
    //Return the binaryResult
    return binaryResult;
}


//Defining the mainFunction, the entry point into the program itself
function mainFunction(){
    //Let variable userHexInput to the prompt function for user to put in hex input value
    let userHexInput = prompt("Hex: ");
    //binaryAnswer set to convert hex to binary function with userHexInput as input argument
    binaryAnswer = convertHexToBinary(userHexInput);
    //Log to console the binaryAnswer of the userHexInput
    console.log("Hex Input: " + userHexInput + " -> " + binaryAnswer);

}




//Calling the main function, for whole program to begin.
mainFunction();