const matrizA = new Array(3);
const matrizB = new Array(3);
const matrizC = new Array(3);

// Ingresar valores en la matriz A
console.log("Ingresa 9 valores para la matriz A:");
for (let i = 0; i < 3; i++) {
    matrizA[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
        matrizA[i][j] = parseInt(prompt(`Ingresa el valor para la posición [${i}][${j}]:`));
    }
}

// Ingresar valores en la matriz B
console.log("Ingresa 9 valores para la matriz B:");
for (let i = 0; i < 3; i++) {
    matrizB[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
        matrizB[i][j] = parseInt(prompt(`Ingresa el valor para la posición [${i}][${j}]:`));
    }
}

// Realizar la suma de las matrices
for (let f = 0; f < 3; f++) {
    matrizC[f] = new Array(3);
    for (let c = 0; c < 3; c++) {
        matrizC[f][c] = matrizA[f][c] + matrizB[f][c];
    }
}

// Imprimir la matriz resultante (matriz C)
console.log("Matriz C (A + B):");
for (let f = 0; f < 3; f++) {
    let row = "";
    for (let c = 0; c < 3; c++) {
        row += matrizC[f][c] + " ";
    }
    console.log(row);
}

