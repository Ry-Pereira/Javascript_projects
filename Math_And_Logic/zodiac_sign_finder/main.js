import zodiaSignsListClass from "./zodiac_signs_list_class.js";









function main(){
    console.log("Welcome to the Zodiac Sign Finder!");
    console.log("This program will help you find your zodiac sign based on your birth date.");

    let zodiacSignsList = new zodiaSignsListClass();
    let userBirthMonth = prompt("Please enter your birth Month");
    let userBirthDay = prompt("Please enter your birth Day");

    let userZodiacSign = null;
    for (let i = 0; i < zodiacSignsList.zodiacSigns.length; i++) {
        let zodiacSign = zodiacSignsList.zodiacSigns[i];
        if ((userBirthMonth == zodiacSign.dateMonthStart && userBirthDay >= zodiacSign.dateDayStart) ||
            (userBirthMonth == zodiacSign.dateMonthEnd && userBirthDay <= zodiacSign.dateDayEnd)) {
            userZodiacSign = zodiacSign;
            break;
        }
    }

    if (userZodiacSign) {
        console.log(`Your zodiac sign is ${userZodiacSign.name}.`);
        console.log(`Element: ${userZodiacSign.element}`);
        console.log(`Traits: ${userZodiacSign.traitsDescription}`);
    } else {
        console.log("Sorry, we couldn't determine your zodiac sign. Please check your input and try again.");
    }






    console.log("Program has finished.... Thankyou!");
}



main();