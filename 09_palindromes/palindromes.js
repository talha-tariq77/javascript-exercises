const palindromes = function (inputWord) {
    alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
    word = inputWord.toLowerCase().split("").filter((val) => alphanumeric.includes(val)).join('');

    reversedWord = word.split("").reverse().join('');

    return word == reversedWord;

    // inputWord = inputWord.toLowerCase().match(/[a-z]|[0-9]/g).join("");
    // reversed = ''   ;


    // for (i=inputWord.length - 1; i>=0; i--) {
    //     reversed += inputWord[i];
    // }

    // return reversed == inputWord;
};

// Do not edit below this line
module.exports = palindromes;
