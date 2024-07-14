const removeFromArray = function(inputList) {

    for (i=1;i<arguments.length;i++) {
        argIndex = inputList.indexOf(arguments[i]);
        while (argIndex != -1) {
            inputList.splice(inputList.indexOf(arguments[i]), 1);
            argIndex = inputList.indexOf(arguments[i]);
        }
    }
    return inputList;
};

// Do not edit below this line
module.exports = removeFromArray;
