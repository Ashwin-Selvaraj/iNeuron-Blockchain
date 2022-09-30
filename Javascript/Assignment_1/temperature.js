
function celsiusToFahrenheit(c) {
    var f = (c*9/5)+32;
    var message = c +'\xB0C is ' + f + '\xB0F.';
    console.log(message);
}
function fahrenheitToCelsius(f) {
    var c = ((f-32)*5)/9;
    var message = f +'\xB0F is ' + c + '\xB0C.';
    console.log(message);
}

celsiusToFahrenheit(60);
fahrenheitToCelsius(45);