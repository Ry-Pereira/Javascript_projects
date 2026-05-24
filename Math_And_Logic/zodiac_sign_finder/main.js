import zodiaSignsListClass from "./zodiac_signs_list_class.js";


function main(){

    console.log("Welcome to the Zodiac Sign Finder!");
    console.log("This program will help you find your zodiac sign based on your birth date.");

    let zodiacSignsList = new zodiaSignsListClass();

    // Gets and converts the birth month to a number
    let userBirthMonth = Number(prompt("Please enter your birth Month (1-12): "));

    // Gets and converts the birth day to a number
    let userBirthDay = Number(prompt("Please enter your birth Day (1-31): "));

    // Checks if the month or day is invalid
    if (isNaN(userBirthMonth) || isNaN(userBirthDay) ||
        userBirthMonth < 1 || userBirthMonth > 12 ||
        userBirthDay < 1 || userBirthDay > 31) {

        console.log("Invalid date entered.");
        return;
    }

    let userZodiacSign = null;

    // Loops through all zodiac signs
    for (let i = 0; i < zodiacSignsList.zodiacSigns.length; i++) {

        let zodiacSign = zodiacSignsList.zodiacSigns[i];

        // Checks if the birth date matches the zodiac sign range
        if ((userBirthMonth == zodiacSign.dateMonthStart && userBirthDay >= zodiacSign.dateDayStart) ||

            (userBirthMonth == zodiacSign.dateMonthEnd && userBirthDay <= zodiacSign.dateDayEnd)) {

            userZodiacSign = zodiacSign;
            break;
        }
    }

    // Displays zodiac sign information
    if (userZodiacSign) {

        console.log(`Your zodiac sign is ${userZodiacSign.name}.`);
        console.log(`Element: ${userZodiacSign.element}`);
        console.log(`Traits: ${userZodiacSign.traitsDescription}`);

    } 
    
    else {

        console.log("Sorry, we couldn't determine your zodiac sign.");
    }

    console.log("Program has finished.... Thankyou!");
}

main();