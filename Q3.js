// Q3. The Temperature Converter

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
var celciusValue = 0
var fahrenheitValue = 0
function toFahrenheit(celciusValue = 0){
    var result = ((celciusValue*9)/5)+32
    return result
}
console.log(toFahrenheit(180))

function toCelcius(fahrenheitValue = 0){
    var result = ((fahrenheitValue-32)*5)/9
    return result
}
console.log(toCelcius(212))