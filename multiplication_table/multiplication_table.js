






function generateMultiplicationTable(numberLimt){
    if(numberLimit){
        console.log("Multiplication Table for:" + numberLimit + "\n")
        let headers = [" "];
        for(let headerNumber = 0; headerNumber<= numberLimit;headerNumber++){
            headers.push(t);
        }
        console.log(headers.join(" "));
        for(let numberToMultiply = 0; numberToMultiply <= numberLimit; numberToMultiply++){
            let rowNumbers = [number];
            for(let columnNumber = 0; columnNumber <= numberLimit; columnNumber++){
                rowNumbers.push(columnNumber * numberToMultiply);
            }
            console.log(rowNumbers.join(" "))
        }
    }
    else{
        console.log("Please Input A Whole Integer Number!")
    }
}









function mainFunction(){
    console.log("Welcome to the Multiplication Table Program");
    let userNumber = parseInt(prompt("Please Input a Number for the multiplication table to begin: "));
    generateMultiplicationTable(userNumber);
    console.log("\nProgram has ended...");
}





mainFunction();