const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvasSize;
let elements;


window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

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
    
    const map = maps[1]
    const mapRow = map.trim().split("\n") // devuelve un array
    const mapRowCol = mapRow.map( row => row.trim().split(''))

        
    // (10) ['O', '-', '-', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
    // (10) ['X', '-', '-', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
    // (10) ['X', 'X', '-', '-', '-', '-', 'X', 'X', 'X', 'X']
    // (10) ['X', '-', '-', 'X', 'X', '-', 'X', 'X', 'X', 'X']
    // (10) ['X', '-', 'X', 'X', 'X', '-', '-', 'X', 'X', 'X']
    // (10) ['X', '-', 'X', 'X', 'X', 'X', '-', 'X', 'X', 'X']
    // (10) ['X', 'X', '-', '-', 'X', 'X', '-', '-', 'X', 'X'] 
    // (10) ['X', 'X', '-', '-', 'X', 'X', 'X', '-', 'X', 'X']
    // (10) ['X', 'X', 'X', 'X', '-', '-', '-', 'I', 'X', 'X']
    // (10) ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

    console.log({map, mapRow, mapRowCol});

    mapRowCol.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col]
            const posX = elements * (colI + 1)
            const posY = elements * (rowI + 1)
            game.fillText(emoji,posX,posY)
        })
        
    });

    // for (let row = 1; row <= 10; row++) {
    //     for (let col = 1; col <= 10; col++) {
    //         game.fillText(emojis[mapRowCol[row - 1][col -1]], elements * col, elements * row)
    //         console.log(emojis[mapRowCol[row - 1][col -1]], elements * col, elements * row);
    //     }
    // }
}

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