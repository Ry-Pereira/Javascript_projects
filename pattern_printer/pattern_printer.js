// Function for logging welcome message
function welcomeMessage(){
    console.log("Welcome to the Pattern Printer!");
}

// Function for logging goodbye message
function goodbyeMessage(){
    console.log("Thank you for using the Pattern Printer. Goodbye!");
}

// Function to print the menu options
function printMenu(){
    console.log("1) Checkerboard");
    console.log("2) Running Total");
    console.log("3) Upper Left Triangle");
    console.log("4) Upper Right Triangle");
    console.log("5) Exit");
}


// Function to print checkerboard pattern
function printCheckerboardPattern(size){
    // Loop through each row
    for(let i = 0; i<=size; i++){
        // Initialize row string
        let row = "";
        // Loop through each column
        for(let j = 0; j<= size; j++){
            // Append "OX" or "XO" based on row index
            if(i%2 == 0 ){
                row +="O";
                row +="X";
            }
            else{
                row +="X";
                row +="O";
            }

        }
        // Print the constructed row
        console.log(row);
    }

}


// Function to print running total pattern
function printRunningTotalPattern(size){
    // Initialize number counter
    let numberCounter = 1;
    // Loop through each row
    for(let i = 0; i<size; i++){
        // Initialize row string
        let row = "";
        // Loop through each column
        for(let j = 0; j< size; j++){
            // Append number and comma to row
            row += numberCounter + ",";
            // Increment number counter
            numberCounter++;
        }
        // Print the constructed row
        console.log(row);
    }
}



// Function to print upper right triangle pattern
function printUpperLeftTrianglePattern(size){
    // Loop through each row
    for(let i = size; i>=0; i--){
        // Initialize row string
        let row = "";
        // Add asterisks for the triangle
        for(let j = i; j>= 0; j--){
            // Append asterisk to row
            row += "*";
        }
        // Print the constructed row
        console.log(row);
    }

}


// Function to print upper right triangle pattern
function printUpperLeftTrianglePattern(size) {
  // Initialize spacing counter
  let spacing_count = 0;
  // Loop through each row
  for (let i = size; i > 0; i--) {
    // Initialize row string
    let row = "";
    // Add spaces for right alignment
    if (spacing_count > 0) {
      // Add spaces based on spacing count
      for (let c = 0; c < spacing_count; c++) {
        // Append space to row
        row += " ";
      }
    }
    // Add asterisks for the triangle
    for (let j = i; j > 0; j--) {
    // Append asterisk to row
      row += "*";
    }
    // Print the constructed row
    console.log(row);
    // Increment spacing counter for next row
    spacing_count += 1;
  }
}


// Function to get size input from user
function getSizeInput(){
    //let userSize = parseInt(prompt("Enter the size of the pattern (positive integer >= 5) "));
    let userSizeInput = parseInt(prompt("Enter the size of the pattern (positive integer >= 5) "));
    // Loop until valid size is entered
    while(userSizeInput <= 5){
        //Logging invalid size message
        console.log("Invalid size. Please enter a positive integer greater than or equal to 5.");
        // Prompt user for size input again
        userSizeInput = parseInt(prompt("Enter the size of the pattern (positive integer >= 5) "));
    }
    // Return valid size input
    return userSizeInput;
}


// Function to get user choice and call appropriate pattern function
function getUserChoice(){
    // Display menu and get user choice
    printMenu();
    let userChoice = parseInt(prompt("Enter your choice: "));
    // Loop until user chooses to exit
    while(userChoice != 4){
        // Call appropriate pattern function based on user choice
        if(userChoice == 1){
            //let userSize = parseInt(prompt("Enter the size of the pattern (positive integer >= 5) "));
            let userSize = getSizeInput();
            // Call checkerboard pattern function
            printCheckerboardPattern(userSize);
            // Call running totalpattern function
        } else if(userChoice == 2){
            //let userSize = parseInt(prompt("Enter the size of the pattern (positive integer >= 5) "));
            let userSize = getSizeInput();
            // Call running total pattern function
            printRunningTotalPattern(userSize);
            // Call upper left triangle pattern function
        } else if(userChoice == 3){
            //let userSize = parseInt(prompt("Enter the size of the pattern (positive integer >= 5) "));
            let userSize = getSizeInput();
            // Call upper left triangle pattern function
            printUpperLeftTrianglePattern(userSize);
            // Call upper right triangle pattern function
        } else if(userChoice == 4){
            //let userSize = parseInt(prompt("Enter the size of the pattern (positive integer >= 5) "));
            let userSize = getSizeInput();
            // Call upper right triangle pattern function
            printUpperRightTrianglePattern(userSize);
        }
        // Exit option
        else{
            // Logging invalid choice message
            console.log("Invalid choice. Please try again.");
        }
        printMenu();
        userChoice = parseInt(prompt("Enter your choice: "));
    }
}

// Main function to run the program
function main(){
    // Display welcome message
    welcomeMessage();
    // Get user choice and print patterns
    getUserChoice();
    // Display goodbye message
    goodbyeMessage();

}


// Call the main function to start the program
main();