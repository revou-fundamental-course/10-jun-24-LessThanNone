// variabel input, output dan button
const inputCelcius = document.getElementById('input');
const outputFahrenheit = document.getElementById('output');
const convertButton = document.getElementById('convert-button');
const resetButton = document.getElementById('reset-button');
const reverseButton = document.getElementById('reverse-button');

// Fungsi convert Celcius ke Fahrenheit
function celciusToFahrenheit(celcius) {
  return (celcius * 9/5) + 32;
}

// Fungsi convert Fahrenheit ke Celcius
function fahrenheitToCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

