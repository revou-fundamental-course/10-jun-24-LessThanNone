// variabel input, output dan button
const input = document.getElementById('input');
const output = document.getElementById('output');
const calculateOutput = document.getElementById('calculate-output');
const convertButton = document.getElementById('convert-button');
const resetButton = document.getElementById('reset-button');
const reverseButton = document.getElementById('reverse-button');
const celciusText = document.getElementById('celcius-text');
const fahrenheitText = document.getElementById('fahrenheit-text');
const formulaSection = document.getElementById('formula-section')
const formulaHead = document.getElementById('formula-head');
const formulaContent = document.getElementById('formula-content')
const formulaRumus = document.getElementById('formula-rumus')


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
    calculateOutput.innerHTML = `(${input.value}&deg;C × 9/5) + 32 = ${output.value}&deg;F`;
    formulaSection.hidden = false
    formulaContent.innerHTML = `Suhu <span class="subject-info"> ${output.value} </span> dalam derajat Fahrenheit (°F) sama dengan suhu <span class="subject-info"> ${input.value} </span> dalam derajat Celcius (°C) dikali 9/5 ditambah 32`
    formulaRumus.innerHTML = `<span class="subject-info"> ${output.value}<sub>(&deg;F)</sub> = (${input.value}<sub>(&deg;C)</sub> x 9/5) + 32 </span>`
  } else {
    alert('Tolong masukkan derajat suhunya!');
  }
});


// reset button
resetButton.addEventListener('click', function() {
  input.value = '';
  output.value = '';
  calculateOutput.innerHTML = '';
  formulaSection.hidden = true
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
    formulaSection.hidden = true
  } else {
    celciusText.innerHTML = 'Celcius (&deg;C): ';
    fahrenheitText.innerHTML = 'Fahrenheit (&deg;F): ' ;
    output.value = '';
    calculateOutput.innerHTML = '';
    formulaSection.hidden = true
  }
});

  // convert fahrenheit ke celcius
  convertButton.addEventListener('click', function() {
    if (isReversed) {
      const fahrenheitValue = parseFloat(input.value);
      if (!isNaN(fahrenheitValue)) {
        const celciusValue = fahrenheitToCelcius(fahrenheitValue);
        output.value = celciusValue.toFixed(2);
        calculateOutput.innerHTML = `(${input.value}&deg;F - 32) × 5/9 = ${output.value}&deg;C`;
        formulaSection.hidden = false
        formulaHead.headingHTML = `<h2>Cara konversi dari Celcius (&deg;C) ke Fahrenheit (&deg;F)</h2>`
        formulaContent.innerHTML = `Suhu <span class="subject-info"> ${output.value} </span> dalam derajat Celcius (&deg;C) sama dengan suhu <span class="subject-info"> ${input.value} </span> dalam derajat Fahrenheit (&deg;F) dikurang 32 dikali 5/9`
        formulaRumus.innerHTML = `<span class="subject-info"> ${output.value}<sub>(&deg;C)</sub> = (${input.value}<sub>(&deg;F)</sub> - 32) x 5/9 </span>`
      } else {
        alert('Tolong masukkan derajat suhunya!');
      }
    }
  });

