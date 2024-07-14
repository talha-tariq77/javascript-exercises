const convertToCelsius = function(farenheitTemp) {
  return Math.round((farenheitTemp - 32) * 5/9 * 10) / 10
};

const convertToFahrenheit = function(celciusTemp) {
  return Math.round((celciusTemp * 9/5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
