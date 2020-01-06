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
let messageDisplay = document.querySelector('#message')

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    //intial colors add to square
    squares[i].style.background = colors[i];
    // click listener for squares
    squares[i].addEventListener('click', function() {
        //get color of clicked square
        let clickedColor = this.style.background
        //compare color to picked color
        clickedColor === pickedColor ? messageDisplay.textContent = 'Correct' :
        messageDisplay.textContent = 'Try Again'
        this.style.background = '#232323'
    });
}