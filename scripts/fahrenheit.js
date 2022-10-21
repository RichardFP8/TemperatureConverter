//convert fahrenheit to celsius
"use strict";
window.onload = init;

//find the button, respond to the onclick interaction, sends to other function
function init() {
    const convertBtn = document.getElementById("convertF");
    convertBtn.onclick = convertF_toC;
}
//convertion and display
function convertF_toC() {
    const getFahren = Number(document.getElementById("fahren").value);
    const answer = document.getElementById("toCelsius");
    //test if input is a number or NaN; if Nan, display message and exit
    if (isNaN(getFahren)) {
        answer.value = "You good?";
        return;
    }
    else {
        let toCelsius = (5 / 9) * (getFahren - 32);
        answer.value = toCelsius.toFixed(2);
    }
}