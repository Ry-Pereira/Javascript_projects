







function convert_hex_to_binary(hexInput,binaryResult,startIndex){

    if(startIndex > hexInput.length){
        return binaryResult

    }
    else{

    
  

        switch(hexValue){
            case "0":
                binary_value += "0000"
                break
            case "1":
                binary_value += "0001"
                break
            case "2":
                binary_value += "0010"
                break
            case "3":
                binary_value += "0011"
                break
            case "4":
                binary_value += "0100"
                break
            case "5":
                binary_value += "0101"
                break
            case "6":
                binary_value += "0110"
                break
            case "7":
                binary_value += "0111"
                break
            case "8":
                binary_value += "1000"
                break
            case "9":
                binary_value += "1001"
                break
            case "A":
                binary_value += "1010"
                break
            case "B":
                binary_value += "1011"
                break
            case "C":
                binary_value += "1100"
                break
            case "D":
                binary_value += "1101"
                break
            case "E":
                binary_value += "1110"
                break
            case "F":
                binary_value += "1111"
                break
        }

        convert_hex_to_binary(hexInput,binaryResult,startIndex++)
        
         


    }


}

function mainFunction(){
    let userHexInput = prompt("Hex: ")
    let binary_value = ""
    convert_hex_to_binary(userHexInput,binary_value,0)

}




mainFunction()