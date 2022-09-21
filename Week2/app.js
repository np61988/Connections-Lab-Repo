
//steps
//1. identify and select button
let button;
let colorButton;
let bgColor1 = ["#FF0000"];
let bgColor2 = ["#228B22"];
let choice = 0;

button = document.getElementById('button');

//2. listen to event clicked on the button
button.addEventListener("click", function () {
    document.body.style.background = bgColor1[choice];
});

//button to change background color
colorButton = document.getElementById('button-color')
    ;
colorButton.addEventListener('click', function () {
    console.log('color changes');
    document.body.style.background = bgColor2[choice];
    
})
