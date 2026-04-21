const fs = require('fs');

function getFileData(textFileName, callback) {
    fs.readFile(textFileName + '.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const words = data
            .toLowerCase()
            .trim()
            .split("\n")
            .join(" ")
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

    console.log(countDictionary);
}

function mainFunction() {
    getFileData("text", function(wordsExtracted) {
        getCountOfWords(wordsExtracted);
    });
}

mainFunction();