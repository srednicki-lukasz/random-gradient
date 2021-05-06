let direction = 'to right'
let hexFirst = '#000000';
let hexSecond = '#FFFFFF';

// change background gradient
document.querySelector('.preview').addEventListener('click', () => {
    hexFirst = getHexCode();
    hexSecond = getHexCode();
    
    document.querySelector('.color-code-first').value = hexFirst;
    document.querySelector('.color-code-second').value = hexSecond;
    document.querySelector('.preview').style.backgroundImage = `linear-gradient(${direction}, ${hexFirst} ,${hexSecond})`;
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
document.querySelector('.copy-css').addEventListener('click', () => {
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
document.querySelector('.dir-left').addEventListener('click', () => changeDirection('fas fa-long-arrow-alt-left', 'to left'));
document.querySelector('.dir-top').addEventListener('click', () => changeDirection('fas fa-long-arrow-alt-up', 'to top'));
document.querySelector('.dir-right').addEventListener('click', () => changeDirection('fas fa-long-arrow-alt-right', 'to right'));
document.querySelector('.dir-bottom').addEventListener('click', () => changeDirection('fas fa-long-arrow-alt-down', 'to bottom'));

function changeDirection(iconClass, gradientDirection) {
    document.querySelector('.arrow-icon').className = `arrow-icon ${iconClass}`;
    direction = gradientDirection;
    document.querySelector('.preview').style.backgroundImage = `linear-gradient(${direction}, ${hexFirst} ,${hexSecond})`;
}