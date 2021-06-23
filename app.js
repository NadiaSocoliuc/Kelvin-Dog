const Kelvin = 293; // Created a constant variable named it kelvin wich value is 293
const Celsius = Kelvin - 273; // Converted Kelvin to Celsius by substracting 273 from Kelvin variable
const Fahtenheit = Math.floor(Celsius * (9/5) + 32); // Converted Celsius to Fahrenheit and used the Math.floor method to round down the Fahrenheit temperature so we don't have a decimal number
console.log(`The temperature is ${Fahtenheit} degrees Fahrenheit`);