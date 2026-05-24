import ZodiacSign from "./zodiac_sign_class.js";


let ZodiacSignsInformation = [["Aries", 2, 4, 21, 19, "Fire", "Bold, energetic, and impulsive"],
                              ["Taurus", 4, 5, 20, 20, "Earth", "Reliable, patient, and practical"], 
                              ["Gemini", 5, 6, 21, 20, "Air", "Curious, adaptable, and expressive"],
                              ["Cancer", 6, 7, 21, 22, "Water", "Emotional, intuitive, and nurturing"],
                              ["Leo", 7, 8, 23, 22, "Fire", "Confident, generous, and charismatic"],
                              ["Virgo", 8, 9, 23, 22, "Earth", "Analytical, meticulous, and practical"],
                              ["Libra", 9, 10, 23, 22, "Air", "Diplomatic, charming, and balanced"],
                              ["Scorpio", 10, 11, 23, 21, "Water", "Passionate, resourceful, and determined"],
                              ["Sagittarius", 11, 12, 22, 21, "Fire", "Adventurous, optimistic, and independent"],
                              ["Capricorn", 12, 1, 22, 19, "Earth", "Disciplined, ambitious, and responsible"],
                              ["Aquarius", 1, 2, 20, 18, "Air", "Innovative, humanitarian, and intellectual"],
                              ["Pisces", 2, 3, 19, 20, "Water", "Compassionate, artistic, and intuitive"]];

export default class zodiaSignsListClass {
    constructor() {
        this.zodiacSigns = [];
        for (let i = 0; i < ZodiacSignsInformation.length; i++) {
            let signInfo = ZodiacSignsInformation[i];
            let zodiacSign = new ZodiacSign(signInfo[0], signInfo[1], signInfo[2], signInfo[3], signInfo[4], signInfo[5], signInfo[6]);
            this.zodiacSigns.push(zodiacSign);
        }
    }
}
