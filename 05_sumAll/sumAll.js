const sumAll = function(startInt, endInt) {
    sum = 0;
    if (!(typeof startInt == 'number' && typeof endInt == "number") ||
    startInt < 0 || endInt < 0) {
        return 'ERROR';
    }
    if (startInt > endInt) {
        tmp = endInt;
        endInt = startInt;
        startInt = tmp;
    }

    for (i=startInt; i<=endInt; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
