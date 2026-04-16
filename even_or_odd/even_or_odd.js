







function is_even_or_odd(numberToCheck){
    let numberRemainder = numberToCheck % 2;
    if(numberRemainder === 0){
        return "Even"
    }
    if(numberRemainder === 1){
        return "Odd"
    }
    else{
        return "Invalid"
    }
}




function main(){
    let userNumber = parseInt(prompt("Number: "))
    let result = is_even_or_odd(userNumber)
    console.log("\nThe Number you put is " + result + ".")

    
}








main();