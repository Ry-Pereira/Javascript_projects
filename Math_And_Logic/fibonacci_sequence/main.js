



function fibonacciSequence(n){
    if(n <=1){
        return "Not valid input";
    }
    else if(n === 0){
        return 0;
    }
    else if(n === 1){
        return 1;
    }
    else{
        return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
    }
}





function main(){
    console.log("Welcome to the Fibonacci Sequence Generator");
    console.log("This program generates the Fibonacci sequence.");
    console.log("Program has ended...");
}




main();