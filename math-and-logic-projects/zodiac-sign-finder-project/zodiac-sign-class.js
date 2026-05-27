//Name: Ryan Pereira
//Project Name: Zodiac Sign Finder
//Description: A program that asks the user for a birth date and determines their zodiac sign.
//Module Name: zodiac-sign-class.js
//Module Purpose: Set up the ZodiacSign class which will be used to create objects for each zodiac sign with their respective information and traits.
//Collaborators: None
//Sources: Github Copilot, Stack Overflow, ChatGPT, Python documentation
//Date: 5/23/2026
//Last Modified: 5/24/2026



// Exports the ZodiacSign class so it can be used in other files
export class ZodiacSign {
    // Constructor method used to create a new ZodiacSign object
    constructor(name, dateMonthStart, dateMonthEnd, dateDayStart, dateDayEnd, element, traitsDescription) {
        // Stores the zodiac sign name
        this.name = name;
        // Stores the starting month of the zodiac sign
        this.dateMonthStart = dateMonthStart;
        // Stores the ending month of the zodiac sign
        this.dateMonthEnd = dateMonthEnd;
        // Stores the starting day of the zodiac sign
        this.dateDayStart = dateDayStart;
        // Stores the ending day of the zodiac sign
        this.dateDayEnd = dateDayEnd;
        // Stores the zodiac sign element (Fire, Water, Earth, Air)
        this.element = element;
        // Stores the personality traits description of the zodiac sign
        this.traitsDescription = traitsDescription;
    }
}