console.group("cuadrado")

let ladoCuadrado = 5
let perimetroCuadrado = 3
let areaCuadrado = 4

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
})


function cuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}

console.groupEnd("cuadrado")

console.group("triangulo")

let ladoTriangulo = 5
let perimetroTriangulo = 3
let areaTriangulo = 2

console.log({
    ladoTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})

function triangulo (lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

console.groupEnd("triangulo")

console.group("rectangulo")

let ladoRectangulo = 3
let perimetroRectangulo = 3
let areaRectangulo  = 2




function rectangulo(lado1, lado2) {
    return {
        perimetro: lado1 + lado1 + lado2 + lado2 ,
        area: lado1 * lado2
    }
}

console.log({
    ladoRectangulo,
    perimetroRectangulo,
    areaRectangulo,
})

console.groupEnd("rectangulo")

console.group("circulo")

let radioCirculo = 3
let diametroCirculo = radioCirculo * 2
let PI = Math.PI

let circunferencia = diametroCirculo * PI
let areaCirculo = (radioCirculo ** 2) * PI

console.log({
    radioCirculo,   
    diametroCirculo,    
    PI, 
    circunferencia, 
    areaCirculo,    
})

function calcularCirculo(radio) {
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow(radio,2)

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI
    }
}
console.groupEnd("circulo")



