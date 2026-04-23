const fs = require('fs');

function getFileData(textFileName, callback) {
    fs.readFile(textFileName + '.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        var words = data

        .replace(/[\r\n]+/g, " ")  
        .trim()                    
        .replace(/\s+/g, " ")     
        .split(" ");  
        

        callback(words); 
    });
}

function getCountOfWords(wordsList) {
    const countDictionary = {};

    for (let i = 0; i < wordsList.length; i++) {
        const word = wordsList[i];

        if (countDictionary[word]) {
            countDictionary[word]++;
        } else {
            countDictionary[word] = 1;
        }
    }

    console.log("Count of Words:\n");
    for (const wordCount in countDictionary) {
        console.log(wordCount, countDictionary[wordCount]);
}
}

function mainFunction() {
    console.log("Welcome to the Text To Count Dictionary Program");
    var textFile = prompt("Name of text file: ");
    getFileData(textFile, function(wordsExtracted) {
        getCountOfWords(wordsExtracted);
    });
}

mainFunction();