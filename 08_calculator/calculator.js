const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbersArray) {
  return numbersArray.reduce((total, current) => {
    return total += current;
  }, 0);

  // sumNum = 0;
	// for (num of numbersArray) {
  //   sumNum += num;
  // }
  // return sumNum;
};

const multiply = function(numArray) {
  return numArray.reduce((total, current) => {
    return total *= current;
  });

  // if (numArray.length == 0) {
  //   return 0;
  // }

  // multSum = 1;

  // for (num of numArray) {
  //   multSum *= num;
  // }

  // return multSum;
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(a) {
  fact = 1;
  for (i=2;i<=a;i++) {
    fact *= i;
  }

  return fact;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
