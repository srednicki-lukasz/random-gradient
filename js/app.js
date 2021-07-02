// Set initial values.
window.onload = () => {
    document.querySelector('.color-one').value = '#FFFFFF';
    document.querySelector('.color-two').value = '#FFFFFF';
}

class RandomGradient {

    /**
     * Color one.
     * Initial - #FFFFFF
     * @memberof RandomGradient
     */
    colorOne = '#FFFFFF';

    /**
     * Color two.
     * Initial - #FFFFFF
     * @memberof RandomGradient
     */
    colorTwo = '#FFFFFF';

    /**
     * Gradient direction.
     * Initial - to right.
     * @memberof randomGradient
     */
    direction = 'to right';

    constructor() {}

    /**
     * Generate random colors.
     * @memberof RandomGradient
     */
    generateRandomColors() {
        this.colorOne = '#';
        this.colorTwo = '#';

        const availableCharacters = [
            'A', 'B', 'C', 'D', 'E', 'F',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];

        for (let i = 0; i < 6; i++) {
            this.colorOne += availableCharacters[
                Math.floor(Math.random() * availableCharacters.length)
            ];

            this.colorTwo += availableCharacters[
                Math.floor(Math.random() * availableCharacters.length)
            ];
        }

        return [this.direction, this.colorOne, this.colorTwo];
    }

    /**
     * Change gradient direction.
     * @memberof RandomGradient
     */
    changeDirection(button) {
        if (button.classList.contains('to-left')) this.direction = 'to left';
        else if (button.classList.contains('to-top')) this.direction = 'to top';
        else if (button.classList.contains('to-right')) this.direction = 'to right';
        else if (button.classList.contains('to-bottom')) this.direction = 'to bottom';

        return [this.direction, this.colorOne, this.colorTwo];
    }

    /**
     * Copy CSS code.
     * @memberof RandomGradient
     */
    copyCSS() {
        const input = document.createElement('input');
        const gradient = `${this.direction}, ${this.colorOne} ,${this.colorTwo}`;

        input.value = `background: linear-gradient(${gradient})`;
        document.body.appendChild(input);

        input.select();
        input.setSelectionRange(0, 99999);

        document.execCommand('copy');
        document.body.removeChild(input);

        alert('CSS code copied!');
    }
}

const randomGradient = new RandomGradient();

document.querySelector('main').addEventListener('click', () => {
    const gradientElements = randomGradient.generateRandomColors();
    const direction = gradientElements[0];
    const colorOne = gradientElements[1];
    const colorTwo = gradientElements[2];

    document.querySelector('.color-one').value = colorOne;
    document.querySelector('.color-two').value = colorTwo;

    document.querySelector('main').style.background = `linear-gradient(${direction}, ${colorOne}, ${colorTwo})`;
});

document.querySelectorAll('.btn-direction').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('active');

        button.parentNode.childNodes.forEach(node => {
            if (node.nodeName === 'BUTTON'
                && !node.classList.contains('btn-copy-css')
                && node.classList !== button.classList) {
                node.classList.remove('active');
            }
        });
        
        const gradientElements = randomGradient.changeDirection(button);
        const direction = gradientElements[0];
        const colorOne = gradientElements[1];
        const colorTwo = gradientElements[2];

        document.querySelector('main').style.background = `linear-gradient(${direction}, ${colorOne}, ${colorTwo})`;
    });
});

document.querySelector('.btn-copy-css').addEventListener('click', () => randomGradient.copyCSS());
