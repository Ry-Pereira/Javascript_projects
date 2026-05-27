//Name: Ryan Pereira
//Project Name: Zodiac Sign Finder
//Description: A program that asks the user for a birth date and determines their zodiac sign.
//Module Name: zodiac_signs_list_class.js
//Module Purpose: Set up the ZodiacSignsListClass which will create a list of ZodiacSign objects using the information stored in a 2D array.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 5/23/2026
//Last Modified: 5/24/2026









// Imports the ZodiacSign class from another JavaScript file
import ZodiacSign from "./zodiac_sign_class.js";


// Creates a 2D array containing zodiac sign information
let ZodiacSignsInformation = [
    // Stores information for Aries
    ["Aries", 2, 4, 21, 19, "Fire", "Bold, energetic, and impulsive"],
    // Stores information for Taurus
    ["Taurus", 4, 5, 20, 20, "Earth", "Reliable, patient, and practical"], 
    // Stores information for Gemini
    ["Gemini", 5, 6, 21, 20, "Air", "Curious, adaptable, and expressive"],
    // Stores information for Cancer
    ["Cancer", 6, 7, 21, 22, "Water", "Emotional, intuitive, and nurturing"],
    // Stores information for Leo
    ["Leo", 7, 8, 23, 22, "Fire", "Confident, generous, and charismatic"],
    // Stores information for Virgo
    ["Virgo", 8, 9, 23, 22, "Earth", "Analytical, meticulous, and practical"],
    // Stores information for Libra
    ["Libra", 9, 10, 23, 22, "Air", "Diplomatic, charming, and balanced"],
    // Stores information for Scorpio
    ["Scorpio", 10, 11, 23, 21, "Water", "Passionate, resourceful, and determined"],
    // Stores information for Sagittarius
    ["Sagittarius", 11, 12, 22, 21, "Fire", "Adventurous, optimistic, and independent"],
    // Stores information for Capricorn
    ["Capricorn", 12, 1, 22, 19, "Earth", "Disciplined, ambitious, and responsible"],
    // Stores information for Aquarius
    ["Aquarius", 1, 2, 20, 18, "Air", "Innovative, humanitarian, and intellectual"],
    // Stores information for Pisces
    ["Pisces", 2, 3, 19, 20, "Water", "Compassionate, artistic, and intuitive"]
];





// Exports the zodiac signs list class so it can be used in other files
export default class zodiaSignsListClass {
    // Constructor method used to create the zodiac signs list
    constructor() {
        // Creates an empty array to store ZodiacSign objects
        this.zodiacSigns = [];
        // Loops through each zodiac sign in the information array
        for (let i = 0; i < ZodiacSignsInformation.length; i++) {
            // Stores the current zodiac sign information
            let signInfo = ZodiacSignsInformation[i];
            // Creates a new ZodiacSign object using the stored information
            let zodiacSign = new ZodiacSign(
                signInfo[0], // Zodiac sign name
                signInfo[1], // Starting month
                signInfo[2], // Ending month
                signInfo[3], // Starting day
                signInfo[4], // Ending day
                signInfo[5], // Zodiac element
                signInfo[6]  // Personality traits description
            );
            // Adds the ZodiacSign object to the zodiacSigns array
            this.zodiacSigns.push(zodiacSign);
        }
    }
}
