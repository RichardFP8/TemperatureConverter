//convert fahrenheit to celsius
"use strict";
window.onload = init;

//find the button, respond to the onclick interaction, sends to other function
function init(){
    const convertBtn = document.getElementById("convertF");
    convertBtn.onclick = convertF_toC;
}
//convertion and display
function convertF_toC(){
    const getFahren = Number(document.getElementById("fahren").value);
    const answer =  document.getElementById("toCelsius");
    let toCelsius = ( 5 / 9 ) * ( getFahren - 32 );
    answer.value = toCelsius.toFixed(2);
}