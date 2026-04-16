





function fizzBuzzSelection(number){
    if(number%3 === 0){
        if(number%5 ===0){
            return "FizzBuzz"
        }

    }
    if(number%3 === 0){
        return "Fizz"
    }
    if(number%5 === 0){
        return "Buzz"
    }
    else{
        return number
    }
}


function fizzBuzzSequence(numberStart,numberEnd){
    if(numberStart > numberEnd){
        return
    }
    else{
        fizzBuzzResult = fizzBuzzSelection(numberStart)
        console.log(numberStart + ":" + fizzBuzzResult)
        fizzBuzzSequence(numberStart+1,numberEnd)
    }
}


function mainFunction(){
    console.log("Welcome to the FIZZBUZZ Program\n")
    let userStartNumber = parseInt(prompt("Start Number: "))
    let userEndNumber = parseInt(prompt("End Number: "))
    fizzBuzzSequence(userStartNumber,userEndNumber)
    console.log("\nProgram has ended\nGoodbye")
}



mainFunction()