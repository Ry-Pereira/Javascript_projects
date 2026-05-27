// Name: Ryan Pereira
// Project Name: Magic 8 Ball Program
// Description: Defines the Magic 8 Ball class used to generate random responses for the Magic 8 Ball simulation.
// Module Name: magic_8_ball_class.js
// Module Purpose: Provides the Magic8Ball class, which stores possible responses and returns a random answer when shaken.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 4/30/2026
// Last Modified: 4/30/2026





// Defines a class representing a Magic 8-Ball fortune teller
export class Magic8Ball {
    // Constructor runs when a new Magic8Ball object is created
    constructor() {
        // Array of possible responses the Magic 8-Ball can give
        this.quotes = [
            "It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes — definitely",
            "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Yes",
            "Signs point to yes",
            "Reply hazy, try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful"
        ];
    }
    // Method that simulates shaking the Magic 8-Ball and returning a random answer
    shake() {
        // Calculate a random index within the bounds of the quotes array
        const index = Math.floor(Math.random() * this.quotes.length);
        // Return the randomly selected quote
        return this.quotes[index];
    }
}