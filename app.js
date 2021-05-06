let direction = 'to right'
let icon = document.querySelector('.arrow-icon');

let hexFirst = '#000000';
let hexSecond = '#FFFFFF';

let colorCodeFirst = document.querySelector('.color-code-first');
let colorCodeSecond = document.querySelector('.color-code-second');

const preview = document.querySelector('.preview');

const btnCopyCss = document.querySelector('.copy-css');
const btnDirLeft = document.querySelector('.dir-left');
const btnDirTop = document.querySelector('.dir-top');
const btnDirRight = document.querySelector('.dir-right');
const btnDirBottom = document.querySelector('.dir-bottom');

// change background gradient
preview.addEventListener('click', () => {
    hexFirst = getHexCode();
    hexSecond = getHexCode();

    colorCodeFirst.value = hexFirst;
    colorCodeSecond.value = hexSecond;

    preview.style.backgroundImage = `linear-gradient(${direction}, ${hexFirst} ,${hexSecond})`;
});

function getHexCode() {
    let hexCode = '#';
    const chars = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < 6; i++) {
        hexCode += chars[Math.floor(Math.random() * chars.length)];
    }

    return hexCode;
}

// copy to clipboard
btnCopyCss.addEventListener('click', () => {
    let input = document.createElement('input');
    input.value = `background-image: linear-gradient(${direction}, ${hexFirst} ,${hexSecond})`;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('CSS code copied!');
});

// change gradient direction
btnDirLeft.addEventListener('click', () => changeDirection('fas fa-long-arrow-alt-left', 'to left'));
btnDirTop.addEventListener('click', () => changeDirection('fas fa-long-arrow-alt-up', 'to top'));
btnDirRight.addEventListener('click', () => changeDirection('fas fa-long-arrow-alt-right', 'to right'));
btnDirBottom.addEventListener('click', () => changeDirection('fas fa-long-arrow-alt-down', 'to bottom'));

function changeDirection(iconClass, gradientDirection) {
    icon.className = `arrow-icon ${iconClass}`;
    direction = gradientDirection;
    preview.style.backgroundImage = `linear-gradient(${direction}, ${hexFirst} ,${hexSecond})`;
}