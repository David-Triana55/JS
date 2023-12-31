const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const spanLives = document.querySelector('#lives');
const spanTimes = document.querySelector('#time');
const spanRecord = document.querySelector('#Record');
const pResult = document.querySelector('#result');
const btnReinicio = document.querySelector("#Reiniciar")

let canvasSize;
let elementsSize;
let level = 0;
let lives = 3;

let timeStart
let timePlayer
let timeInterval

const playerPosition = {
    x: undefined,
    y: undefined,
};
const giftPosition = {
    x: undefined,
    y: undefined,
};
let enemyPositions = [];

btnReinicio.addEventListener('click', reinciarGame)

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

// ajustamos el width y el height de canvas

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.75;
    } else {
        canvasSize = window.innerHeight * 0.75;
    }
    canvasSize = Number(canvasSize.toFixed(0))

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;

    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

function startGame() {

    // game.fillReact(0,0,100,50) dibujar
    // game.clearReact(0,0,100,50) limpiar
    // game.filltext("hola",0,100,) texto
    // game.fillStyle = "black" color del texto
    // game.font = "Helvetica" fuente
    // game.textAlign = "left" position
    // window.innerWidth =
    // window.innerHeight =

    console.log({ canvasSize, elementsSize });

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    const map = maps[level];

    if (!map) {
        gameWin();
        return;
    }

    if (!timeStart) {
        timeStart = Date.now();
        timeInterval = setInterval(showTime, 100)
        showRecord()
    }
    // .strim quita espacios en blanco de strings
    //.split
    
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols});

    //['O', '-', '-', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
    //['X', '-', '-', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

    showLives();
    
    enemyPositions = [];
    game.clearRect(0,0,canvasSize, canvasSize);

    // for (let row = 1; row <= 10; row++) {
    //      for (let col = 1; col <= 10; col++) {
    //          game.fillText(emojis[mapRowCol[row - 1][col -1]], elements * col, elements * row)
    //          console.log(emojis[mapRowCol[row - 1][col -1]], elements * col, elements * row);
    //      }
    // }

    mapRowCols.forEach((row, rowI) => {  
        row.forEach((col, colI) => {
            const emoji = emojis[col]; 
            const posX = elementsSize * (colI + 1); 
            const posY = elementsSize * (rowI + 1);
            if (col == 'O') {
                if (!playerPosition.x && !playerPosition.y) {
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    console.log({playerPosition});
                }
            } else if (col == 'I') {
                giftPosition.x = posX;
                giftPosition.y = posY;
            } else if (col == 'X') {
                enemyPositions.push({
                    x: posX,
                    y: posY,
                });
            }
            game.fillText(emoji, posX, posY);
        })
    })
    movePlayer();
}

// movimientos del judor y colision

function movePlayer() {
    const giftCollisionX = playerPosition.x.toFixed(2) == giftPosition.x.toFixed(2);
    const giftCollisionY = playerPosition.y.toFixed(2) == giftPosition.y.toFixed(2);
    const giftCollision = giftCollisionX && giftCollisionY;

    if (giftCollision) {
        levelWin();
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(2) == playerPosition.x.toFixed(2);
        const enemyCollisionY = enemy.y.toFixed(2) == playerPosition.y.toFixed(2);
        return enemyCollisionX && enemyCollisionY;
    })

    if (enemyCollision) {
        levelFail();
    }
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

// pasar de nivel

function levelWin() {
    console.log('Subiste de nivel');
    level++;
    startGame();
}

// jugar de nuevo

function reinciarGame() {
    location.reload();
}

// sin vidas

function levelFail() {
    console.log('Chocaste contra un enemigo :(');
    lives--;

    if (lives <= 0) {
        level = 0;
        lives = 3;
        timeStart = undefined;
    }
    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

// victoria del juego

function gameWin() {
    console.log('¡Terminaste el juego!');
    clearInterval(timeInterval);

    const recordTime = localStorage.getItem("record_time")
    const playerTime = Date.now() - timeStart

    if(recordTime) {
        if(recordTime >= playerTime) {
            localStorage.setItem("record_time", playerTime)
            pResult.innerHTML = "superaste el record";
        } else {
            pResult.innerHTML = "lo siento, no superaste el record";
        }
    } else {
        localStorage.setItem("record_time", playerTime)
        pResult.innerHTML = "primer record, intenta superarlo!"
    }
    console.log({recordTime, playerTime});
}

// mostrar vidas restantes

function showLives() {
    const heartsArray = Array(lives).fill(emojis['HEART']); // [1,2,3]
    // console.log(heartsArray);

    spanLives.innerHTML = "";
    heartsArray.forEach(heart => spanLives.append(heart));
}

// mostrar tiempo de juego 

function showTime() {
    spanTimes.innerHTML = Date.now() - timeStart
}

// mostrar record anterior

function showRecord() {
    spanRecord.innerHTML = localStorage.getItem("record_time")
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event) {
    if (event.key == 'ArrowUp') moveUp();
    else if (event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if (event.key == 'ArrowDown') moveDown();
}

function moveUp() {
    console.log('Me quiero mover hacia arriba');

    if ((playerPosition.y - elementsSize) < elementsSize) {
        console.log('OUT');
    } else {
        playerPosition.y -= elementsSize;
        startGame();
    }
}

function moveLeft() {
    console.log('Me quiero mover hacia izquierda');

    if ((playerPosition.x - elementsSize) < elementsSize) {
        console.log('OUT');
    } else {
        playerPosition.x -= elementsSize;
        startGame();
    }
}

function moveRight() {
    console.log('Me quiero mover hacia derecha');

    if ((playerPosition.x + elementsSize) > canvasSize) {
        console.log('OUT');
    } else {
        playerPosition.x += elementsSize;
        startGame();
    }
}

function moveDown() {
    console.log('Me quiero mover hacia abajo');

    if ((playerPosition.y + elementsSize) > canvasSize) {
        console.log('OUT');
    } else {
        playerPosition.y += elementsSize;
        startGame();
    }
}