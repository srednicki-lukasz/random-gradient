let hexFirst = '#000000';
let hexSecond = '#FFFFFF';
let colorCodeFirst = document.querySelector('.color-code-first');
let colorCodeSecond = document.querySelector('.color-code-second');

const preview = document.querySelector('.preview');
const btnCopyCss = document.querySelector('.copy-css');

// change background gradient
preview.addEventListener('click', () => {
    hexFirst = getHexCode();
    hexSecond = getHexCode();

    colorCodeFirst.value = hexFirst;
    colorCodeSecond.value = hexSecond;

    preview.style.backgroundImage = `linear-gradient(to right, ${hexFirst} ,${hexSecond})`;
});

function getHexCode() {
    let hexCode = '#';
    const chars = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < 6; i++) {
        hexCode += chars[Math.floor(Math.random() * chars.length)];
    }

    return hexCode;
}