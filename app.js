const board = document.querySelector('#board');
const colors = ['#CED23A', '#D87093', '#8CCB5E', '#FFCF40', '#FFDC33', '#2A8D9C','#47A76A', '#FFB841', '#FF97BB'];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', ()=> {
        setColor(square)
    })
    square.addEventListener('mouseleave', ()=> {
        removeColor(square)
    })
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}