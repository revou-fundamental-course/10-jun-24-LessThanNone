// variabel input, output dan button
const input = document.getElementById('input');
const output = document.getElementById('output');
const calculateOutput = document.getElementById('calculate-output');
const convertButton = document.getElementById('convert-button');
const resetButton = document.getElementById('reset-button');
const reverseButton = document.getElementById('reverse-button');
const celciusText = document.getElementById('celcius-text');
const fahrenheitText = document.getElementById('fahrenheit-text');

// Fungsi convert Celcius ke Fahrenheit
function celciusToFahrenheit(celcius) {
  return (celcius * 9/5) + 32;
}

// Fungsi convert Fahrenheit ke Celcius
function fahrenheitToCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// convert celcius ke fahrenheit
convertButton.addEventListener('click', function() {
  const celciusValue = parseFloat(input.value);
  if (!isNaN(celciusValue)) {
    const fahrenheitValue = celciusToFahrenheit(celciusValue);
    output.value = fahrenheitValue.toFixed(2);
    calculateOutput.innerHTML = `${input.value}&deg;C × 9/5) + 32 = ${output.value}&deg;F`;
  } else {
    alert('Please enter a valid Celcius value');
  }
});

// reset button
resetButton.addEventListener('click', function() {
  input.value = '';
  output.value = '';
  calculateOutput.innerHTML = '';
});