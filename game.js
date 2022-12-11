const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

let canvasSize;
let elementSize;

function startGame() {
    game.font = elementSize + 'px Arial';
    game.textAlign = 'end';

    const map = maps[0];
    
    const maprows = map.trim().split('\n');
    const mapcols = maprows.map(row => row.trim().split(''));
    
    for (row=1; row<=10; row++) {
        for (col=1; col<=10; col++) {
            game.fillText(sprites[mapcols[row-1][col-1]], elementSize * col, elementSize * row);
        }
    }
}

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    }
    else {
        canvasSize = innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementSize = canvasSize / 10;

    startGame();
}