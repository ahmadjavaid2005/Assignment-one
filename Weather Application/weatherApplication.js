// Question No 7 :  Weather Application
function determineWeatherCondition(temperature) {
     const weatherCondition = temperature > 30 ? "Hot" : "Moderate";
     console.log(`The weather condition is ${weatherCondition}`);
}

// Example usage:
const currentTemperature = 25;
determineWeatherCondition(currentTemperature);
