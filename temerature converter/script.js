document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelect = document.getElementById("unitSelect");
    const convertButton = document.getElementById("convertButton");
    const resultText = document.getElementById("resultText");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let result;

        if (isNaN(temperature)) {
            result = "Please enter a valid temperature.";
        } else {
            switch (unit) {
                case "celsius":
                    result = `${temperature}°C is ${celsiusToFahrenheit(temperature)}°F and ${celsiusToKelvin(temperature)}K`;
                    break;
                case "fahrenheit":
                    result = `${temperature}°F is ${fahrenheitToCelsius(temperature)}°C and ${fahrenheitToKelvin(temperature)}K`;
                    break;
                case "kelvin":
                    result = `${temperature}K is ${kelvinToCelsius(temperature)}°C and ${kelvinToFahrenheit(temperature)}°F`;
                    break;
                default:
                    result = "Please select a unit.";
            }
        }

        resultText.textContent = `Result: ${result}`;
    });

    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function fahrenheitToKelvin(fahrenheit) {
        return (fahrenheit - 32) * 5/9 + 273.15;
    }

    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }

    function kelvinToFahrenheit(kelvin) {
        return (kelvin - 273.15) * 9/5 + 32;
    }
});
