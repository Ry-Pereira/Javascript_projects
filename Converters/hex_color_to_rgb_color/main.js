







function displayMenu(){
    console.log("\nMenu: ");
    console.log("1. Convert Hex Color to RGB");
    console.log("2. Exit\n");
}





function checkHexColor(hexColor){
    if(hexColor.length !== 7 || hexColor[0] !== '#'){
        return false;
    }
    for(let i = 1; i < hexColor.length; i++){
        if(!((hexColor[i] >= '0' && hexColor[i] <= '9') || (hexColor[i] >= 'A' && hexColor[i] <= 'F') || (hexColor[i] >= 'a' && hexColor[i] <= 'f'))){
            return false;
        }
    }
    return true;
}


function convertHexToRGB(hexColor){
    let rValue = parseInt(hexColor.slice(1, 3), 16);
    let gValue = parseInt(hexColor.slice(3, 5), 16);
    let bValue = parseInt(hexColor.slice(5, 7), 16);
    return {rValue,gValue,bValue};
}


function beginProgram(){
    displayMenu();
    let choice = prompt(" Please enter your choice (1 or 2): ");
    while(true){
        if(choice === "1"){
            let hexColor = prompt("\nPlease enter a hex color code (e.g., #FF5733): ");
            if(checkHexColor(hexColor) === false){
                console.log("\nInvalid hex color code. Please try again. \n");
            }
            else {
                let rgb = convertHexToRGB(hexColor);
                console.log(`The RGB values for ${hexColor} are: R=${rgb.rValue}, G=${rgb.gValue}, B=${rgb.bValue} \n`);
            }
        }
        else if(choice === "2"){
            console.log("\nExiting the program. ");
            break;
        } 
        else {
            console.log("\nInvalid choice. Please enter 1 or 2. ");
        }
        choice = prompt("\nPlease enter your choice (1 or 2): ");
    }
}

function main() {
    console.log("Welcome to the Hex Color Number to RGB Converter! \n");
    beginProgram();
    console.log("\nThank you for using the converter. Goodbye! ");
    


}





main();