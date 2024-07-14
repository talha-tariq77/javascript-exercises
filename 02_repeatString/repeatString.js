const repeatString = function(inputStr, repetitionNum) {
    if (repetitionNum < 0) {
        return 'ERROR';
    }

    outputStr = "";
    for (i=0; i<repetitionNum; i++) {
        outputStr += inputStr;
    }
    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
