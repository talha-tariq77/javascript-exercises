const reverseString = function(inputStr) {
    outputStr = '';
    for (i=inputStr.length - 1;i>=0;i--) {
        outputStr += inputStr.charAt(i);
    }

    return outputStr;
};

// Do not edit below this line
module.exports = reverseString;
