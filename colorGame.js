let colors = generateRandomColors(6);

let squares = document.querySelectorAll('.square');
let pickedWinColor = pickedColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function() {
    colors =  generateRandomColors(6);
    pickedWinColor = pickedColor();
    correctMessage = messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors'
    colorDisplay.textContent = pickedWinColor;
        for(i = 0; i < squares.length; i++ ) {
            squares[i].style.background = colors[i]
        }
});

colorDisplay.textContent = pickedWinColor;

for(let i = 0; i < squares.length; i++) {
    //intial colors add to square
    squares[i].style.background = colors[i];
    // click listener for squares
    squares[i].addEventListener('click', function() {
        //get color of clicked square
        let clickedColor = this.style.background;
        let wrongColor = this.style.background = '#232323';
        //compare color to picked color
        if(clickedColor === pickedWinColor) {
            correctMessage = messageDisplay.textContent = 'Correct';
            resetButton.textContent = 'Play Again ?';
            changeColors(clickedColor);
        } else {
            messageDisplay.textContent = 'Try Again';
            wrongColor;
        }
    });
}
function changeColors(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickedColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    let arr = [];
    for(let i = 0; i < num; i ++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
//pick a red from 0 - 255
let r = Math.floor(Math.random() * 256);
//pick a green from 0 - 255
let g = Math.floor(Math.random() * 256);
//pick a blue from 0 - 255
let b = Math.floor(Math.random() * 256);

return "rgb("+ r + ", " + g + ", " + b + ")"
}

