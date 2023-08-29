let valores = document.getElementById("valores")

let result = document.getElementById("result")

let boton = document.getElementById("calcular")

boton.addEventListener("click",calcularPromedio);

//  todo [1,2,3,4]

function ordenarLista(listaDesordenada) {
    let lista = listaDesordenada.sort(function(a, b) {
        return a - b
    })
    return lista
}

function calcularPromedio(lista) {
    
        let sumaLista = lista.reduce(function(acumulador, elementoActual) {
            return acumulador + elementoActual
        })    
        
        const promedio = sumaLista / lista.length


        return promedio
        
    // let sumaLista = 0;    
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];    
    // }

    // console.log(suma) // Resultado: 15 (1 + 2 + 3 + 4 + 5)
}    

function calcularMediana (listaDesordenada) {
    const lista = ordenarLista(listaDesordenada)
    
    
    const listaEsPar = ListaPar(lista);
    
    if (listaEsPar) {
        const mediana1ListaPar = (lista.length / 2 ) - 1
        const mediana2ListaPar = lista.length / 2
        
        console.log(lista[mediana1ListaPar]);
        console.log(lista[mediana2ListaPar]);
        
        return calcularPromedio([lista[mediana1ListaPar], lista[mediana2ListaPar]])
        
    } else {
        const indexMitadListaImpar = Math.floor(lista. length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        
        return medianaListaImpar;
    }    
    
}    

function ListaPar(lista) { 
    return !(lista.length % 2)
}    

function calcularModa(lista) {
    const listaCount = {}

    for (let i = 0; i< lista.length; i++){
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }   
    }
}

