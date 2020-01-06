const colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rge(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

let squares = document.querySelectorAll('.square');
let pickedColor = colors[3];
let colorDisplay = document.getElementById('colorDisplay')

colorDisplay.textContent = pickedColor;