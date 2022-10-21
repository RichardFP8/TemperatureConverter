//convert fahrenheit to celsius
"use strict";
window.onload = init;

//find the button, respond to the onclick interaction, sends to other function
function init() {
    const convertBtn = document.getElementById("convertF");
    convertBtn.onclick = convertF_toC;
    const resetBtn = document.getElementById("reset");
    resetBtn.onclick = resetAll;
}
//convertion and display
function convertF_toC() {
    const getFahren = Number(document.getElementById("fahren").value);
    const answer = document.getElementById("toCelsius");
    const message = document.getElementById("message");
    //test if input is a number or NaN; if Nan, display message and exit
    if (isNaN(getFahren)) {
        answer.value = "You good?";
        message.innerHTML = "Not a number";
        return;
    }
    else{
        let toCelsius = (5 / 9) * (getFahren - 32);
        answer.value = toCelsius.toFixed(2);
        message.innerHTML = "";
    }
}
function resetAll(){
    const resetFahren = document.getElementById("fahren");
    const resetAnswer = document.getElementById("toCelsius");
    resetFahren.value = "";
    resetAnswer.value = "";
}