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
    calculateOutput.innerHTML = `${input.value}&deg;C × (9/5) + 32 = ${output.value}&deg;F`;
  } else {
    alert('Tolong masukkan derajat suhunya!');
  }
});


// reset button
resetButton.addEventListener('click', function() {
  input.value = '';
  output.value = '';
  calculateOutput.innerHTML = '';
});

// Reverse button 
let isReversed = false;
reverseButton.addEventListener('click', function() {
  isReversed = !isReversed;
  if (isReversed) {
    celciusText.innerHTML = 'Fahrenheit (&deg;F): ';
    fahrenheitText.innerHTML = 'Celcius (&deg;C): ' ;
    output.value = '';
    calculateOutput.innerHTML = '';
  } else {
    celciusText.innerHTML = 'Celcius (&deg;C): ';
    fahrenheitText.innerHTML = 'Fahrenheit (&deg;F): ' ;
    output.value = '';
    calculateOutput.innerHTML = '';
  }
});

  // convert fahrenheit ke celcius
  convertButton.addEventListener('click', function() {
    if (isReversed) {
      const fahrenheitValue = parseFloat(input.value);
      if (!isNaN(fahrenheitValue)) {
        const celciusValue = fahrenheitToCelcius(fahrenheitValue);
        output.value = celciusValue.toFixed(2);
        calculateOutput.innerHTML = `${input.value}&deg;F × 5/9 - 32 = ${output.value}&deg;C`;
      } else {
        alert('Tolong masukkan derajat suhunya!');
      }
    }
  });