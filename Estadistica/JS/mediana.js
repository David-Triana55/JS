// let valores = document.getElementById("valores")

// let result = document.getElementById("result")

// let boton = document.getElementById("calcular")

// boton.addEventListener("click",calcularPromedio);

//  todo [1,2,3,4]


const FuncionesMath = {

}

FuncionesMath.ordenarLista = function ordenarLista(listaDesordenada) {
    
    return listaDesordenada.sort((a, b) =>  a - b)
}

FuncionesMath.calcularPromedio = function calcularPromedio(lista) {
    
        let sumaLista = lista.reduce(function(acumulador, elementoActual) {
            return acumulador + elementoActual
        })    
        
        // el método reduce va a tomar el valor anterior con el nuevo ej: Resultado: 15 (1 + 2 + 3 + 4 + 5)


        const promedio = sumaLista / lista.length


        return promedio
        
}    

FuncionesMath.calcularMediana = function calcularMediana (listaDesordenada) {
    const lista = FuncionesMath.ordenarLista(listaDesordenada)
    
    
    const listaEsPar = FuncionesMath.ListaPar(lista);
    
    if (listaEsPar) {

        // para encontrar la mediana de la lista en una lista par tenemos que dividir en 2
        const mediana1ListaPar = (lista.length / 2 ) - 1 // para encontrar el valor de la mitad menor
        const mediana2ListaPar = lista.length / 2 // el valor de la mitad 
        
        console.log(lista[mediana1ListaPar]);
        console.log(lista[mediana2ListaPar]);

    
        // enviamos los 2 valores de los indices de la mitad a la función calcular promedio donde se divide en 2
        
        return FuncionesMath.calcularPromedio([lista[mediana1ListaPar], lista[mediana2ListaPar]])

        
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];

        // como los array empiezan en 0 la mitad vendria dando un numero impar y ese sería la mediana
        
        
        return medianaListaImpar;
    }    
    
}    

FuncionesMath.ListaPar = function ListaPar(lista) { 
    return !(lista.length % 2)
}    


// calcular moda 

FuncionesMath.calcularModa = function calcularModa(lista) {
    const listaCount = {} 

    for (let i = 0; i < lista.length; i++){
        const elemento = lista[i];
        
        // enviamos el indice de la lista de array a un variable de objetos

        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }   
        // si el elemento ya existe entonces añade 1 a la asignacion del valor del objeto
    }

    // con entries hacemos un array bidimensional de cada objeto con su asignacion

    const listaArray = Object.entries(listaCount)

    // ordenamos de menor a mayor la asignacion de cada array para encontrar el que más se repite

    const orderArray = listaArray.sort((a,b) => a[1] - b[1])

    // el array con el indice de asignación mayor estará de ultimas 

    const max = orderArray[orderArray.length - 1]
    
    // entrando en el indice 0 obtendremos el valor que más se repite y será la moda
    
    const moda = max[0]
    return "la moda es " + moda
}

