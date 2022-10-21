//converting celsius to fahrenheit
"use strict";
//interactions occur after window finishes loading
window.onload = init;

//init triggers the function that converts input 
function init() {
    const convert = document.getElementById("convertC");
    convert.onclick = conversionC_toF;
}
//access, extract, change input; compute and return number 
function conversionC_toF() {
    const getCelsius = Number(document.getElementById("celsius").value);
    const answer = document.getElementById("toFahrenheit");
    if (isNaN(getCelsius)) {
        answer.value = "A number, that simple";
        return;
    }
    else {
        let toFahrenheit = ((9 / 5) * getCelsius) + 32;
        answer.value = toFahrenheit.toFixed(2);
    }
}