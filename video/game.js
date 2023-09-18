const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.getElementById("up")
const btnDown = document.getElementById("down")
const btnLeft = document.getElementById("left")
const btnRight = document.getElementById("right")

let level = 0

let canvasSize;
let elements;

let playerP = {
    x: undefined,
    y: undefined,
}

let giftP = {
    x: undefined,
    y: undefined,
}

let enemies = []


window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);


function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8
    } else{
        canvasSize = window.innerHeight * 0.8
    }

    canvas.setAttribute("width", canvasSize);
    canvas.setAttribute("height", canvasSize);

    elements = canvasSize / 10

    console.log({canvasSize, elements});
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

    game.font = elements + "px calibri"
    game.textAlign = "end"

    // .strim quita espacios en blanco de strings
    //.split
    
    const map = maps[level]

    if(!map) {
        gameWin()
        return
    }
    const mapRow = map.trim().split("\n") // devuelve un array
    const mapRowCol = mapRow.map( row => row.trim().split(''))

    //['O', '-', '-', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
    //['X', '-', '-', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

    console.log({map, mapRow, mapRowCol});
    enemies = []
    game.clearRect(0, 0, canvasSize, canvasSize)
    mapRowCol.forEach((row, rowI) => {     // for (let row = 1; row <= 10; row++) {
        row.forEach((col, colI) => {       //  for (let col = 1; col <= 10; col++) {
            const emoji = emojis[col]      //  game.fillText(emojis[mapRowCol[row - 1][col -1]], elements * col, elements * row)
            const posX = elements * (colI + 1) // console.log(emojis[mapRowCol[row - 1][col -1]], elements * col, elements * row);
            const posY = elements * (rowI + 1)  // }
                                            // }
            if (col == 'O') {                  
                if(! playerP.x && !playerP.y){  
                    playerP.x = posX
                    playerP.y = posY
                    console.log({playerP});                                    
                }
            }  else if (col == 'I') {
                giftP.x = posX
                giftP.y = posY
            } else if (col == 'X') {
                enemies.push({
                    x: posX,
                    y: posY
                })
                
            }
            game.fillText(emoji,posX,posY)                               
        })
    });
    movePlayer()
}

function movePlayer () {
    const giftColiisionX = playerP.x.toFixed(2) == giftP.x.toFixed(2);
    const giftColiisionY = playerP.y.toFixed(2) == giftP.y.toFixed(2);
    const giftColiision = giftColiisionX && giftColiisionY;

    if(giftColiision) {
        levelWin()
    }

    const enemyCollision = enemies.find(enemy => {
        const enemyCollisionX =  enemy.x.toFixed(3) == playerP.x.toFixed(3)
        const enemyCollisionY =  enemy.y.toFixed(3) == playerP.y.toFixed(3) 
        return enemyCollisionX && enemyCollisionY 

    })

    if(enemyCollision) {
        levelFail()
    }

    game.fillText(emojis["PLAYER"],playerP.x, playerP.y)
    console.log(playerP.x);
    console.log(playerP.y);
    console.log(giftP.x)
    console.log(giftP.y)
}

function levelWin() {
    console.log("subiste de nivel");
    level++
    startGame()
}

function levelFail () {
    playerP.x = undefined
    playerP.y = undefined
    startGame()
}

function gameWin() {
    console.log("terminaste");
}

window.addEventListener("keydown", moveKeys)
btnUp.addEventListener("click", moveUp)
btnDown.addEventListener("click", moveDown)
btnLeft.addEventListener("click", moveLeft)
btnRight.addEventListener("click", moveRight)

function moveKeys(event){
    console.log(event);
    if(event.code == "ArrowUp") moveUp()
    else if(event.code == "ArrowDown") moveDown()
    else if(event.code == "ArrowLeft") moveLeft()
    else if(event.code == "ArrowRight") moveRight()
}

function moveUp(){
    console.log("me quiero mover hacia arriba");

    if((playerP.y - elements) < elements){
        console.log("OUT");
    } else {        
        playerP.y -= elements
        startGame()
    }
}

function moveLeft(){
    console.log("me quiero mover hacia izquierda");

    if((playerP.x - elements) < elements){
        console.log("OUT");
    } else {   
        playerP.x -= elements
        startGame()
    }
}

function moveRight(){
    console.log("me quiero mover hacia la derecha");
    
    if((playerP.x + elements) > canvasSize ) {
        console.log("OUT");
    } else {    
        playerP.x += elements
        startGame()
    }
}

function moveDown(){
    console.log("me quiero mover hacia abajo");

    if((playerP.y + elements) > canvasSize){
        console.log("OUT");
    } else {
        playerP.y += elements
        startGame()
    }
}
