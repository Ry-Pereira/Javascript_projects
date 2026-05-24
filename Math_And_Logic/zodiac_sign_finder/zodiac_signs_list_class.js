import ZodiacSign from "./zodiac_sign_class.js";


let ZodiacSignsInformation = [["Aries", "March 21 - April 19", "Fire", "Bold, energetic, and impulsive"],
                              ["Taurus", "April 20 - May 20", "Earth", "Reliable, patient, and practical"], 
                              ["Gemini", "May 21 - June 20", "Air", "Curious, adaptable, and expressive"],
                              ["Cancer", "June 21 - July 22", "Water", "Emotional, intuitive, and nurturing"],
                              ["Leo", "July 23 - August 22", "Fire", "Confident, generous, and charismatic"],
                              ["Virgo", "August 23 - September 22", "Earth", "Analytical, meticulous, and practical"],
                              ["Libra", "September 23 - October 22", "Air", "Diplomatic, charming, and balanced"],
                              ["Scorpio", "October 23 - November 21", "Water", "Passionate, resourceful, and determined"],
                              ["Sagittarius", "November 22 - December 21", "Fire", "Adventurous, optimistic, and independent"],
                              ["Capricorn", "December 22 - January 19", "Earth", "Disciplined, ambitious, and responsible"],
                              ["Aquarius", "January 20 - February 18", "Air", "Innovative, humanitarian, and intellectual"],
                              ["Pisces", "February 19 - March 20", "Water", "Compassionate, artistic, and intuitive"]];

export default class zodiaSignsListClass {
    constructor() {
        this.zodiacSigns = [];
        for (let i = 0; i < ZodiacSignsInformation.length; i++) {
            let signInfo = ZodiacSignsInformation[i];
            let zodiacSign = new zodiac_sign_class(signInfo[0], signInfo[1], signInfo[2], signInfo[3]);
            this.zodiacSigns.push(zodiacSign);
        }
    }
}
