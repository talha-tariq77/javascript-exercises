const fibonacci = function(fibIndex) {

    fibs = [0, 1];

    if (fibIndex < 0) {
        return 'OOPS';
    }
    
    if (fibIndex < 2) {
        return fibs[fibIndex];
    }

    for (i=1; i<fibIndex; i++) {
        fibIndexNum = fibs.reduce((total, current) => {
            total += current;

            return total;
        }, 0);

        fibs.shift();
        fibs.push(fibIndexNum);
    }
    return fibs[1];

    fibs = [0, 1, 1];
    fibHeadCount = 2;

    if (fibIndex < 0) {
        return 'OOPS';
    }

    if (fibIndex <= fibHeadCount) {
        return fibs[fibIndex];
    }

    while (fibHeadCount < fibIndex) {
        fibs.push(fibs[1] + fibs[2]);
        fibs.shift();
        fibHeadCount++;
    }

    return fibs[2];
};

// Do not edit below this line
module.exports = fibonacci;
