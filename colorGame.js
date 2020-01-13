let numSquares = 6
let colors = [];//reset generates colors
let squares = document.querySelectorAll('.square');
let pickedWinColor = pickedColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');
let h1 = document.querySelector('h1');

init();

function init() {
    //modeButtons event listener
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'EASY' ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
    for(let i = 0; i < squares.length; i++) {
        // click listener for squares
        squares[i].addEventListener('click', function() {
            //get color of clicked square
            let clickedColor = this.style.background;
            let wrongColor = this.style.background = '#232323';
            //compare color to picked color
            if(clickedColor === pickedWinColor) {
                correctMessage = messageDisplay.textContent = 'Correct';
                resetButton.textContent = 'Play Again ?';
                h1.style.background = pickedWinColor;
                changeColors(clickedColor);
            } else {
                messageDisplay.textContent = 'Try Again';
                wrongColor;
            }
        });
    }
    reset();
}


function reset() {
    colors =  generateRandomColors(numSquares);
    pickedWinColor = pickedColor();
    colorDisplay.textContent = pickedWinColor;
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
        for(i = 0; i < squares.length; i++) {
            if(colors[i]) {//if their is a color to paint
                squares[i].style.display = 'block';
                squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = 'none';
            }
        }
        h1.style.background = 'steelblue';
};

resetButton.addEventListener('click', function() {
    reset();
});

colorDisplay.textContent = pickedWinColor;

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