//! ordenamiento burbuja

// let telefonos = [20,17,32,36,19,12,43,53,6,3,5,7,4,2,4,5,3,5,3] 

// pongo la ultima posicion porque compara un elemento más el otro

for (let i = 0; i < telefonos.length; i++) {
  for(let j = 0; j < telefonos.length - 1; j++){ // 4
        if (telefonos[j] > telefonos[j + 1]){   // 20 > 17  
            aux = telefonos[j]           // aux = telefonos[0] = 20
            telefonos[j] = telefonos[j + 1];    // telefonos[0] = 17
            telefonos[j + 1] = aux;           // telefonos[1] = 20
        }    // telefonos [17,20]
    }                   //[0 , 1]
}
console.log(telefonos.length)
console.log(telefonos)

let telefonos = [20,17,32,36,19,12,43,53,6,3,5,7,4,2,4,5,3,5,3] 


for (let i = 0; i < telefonos.length; i++) {
    for (let j = 0; j < telefonos.length; j++) {
        if(telefonos[i] < telefonos[j]){
            let aux = telefonos[i]
            telefonos[i] = telefonos[j]
            telefonos[j] = aux
            console.log(aux);
        }
    }
}

console.log(telefonos)


//! numero mayor

let numeroMaximo = telefonos[1];  // [1,2,3,4,5]

for (let k = 0; k < 5; k++) {
    if(telefonos[k] > numeroMaximo) {
        numeroMaximo = telefonos[k];             
    }         
}
console.log(numeroMaximo)


//!  busqueda binario

function busquedaBinaria(telefonos, numeroBuscar, inferior, superior ) {    
    if(inferior > superior) {    
        console.log("numero no existente")  
    }  
    else {    
        let mid = (inferior + superior) / 2;    
        if(numeroBuscar == telefonos[mid]) {         
            console.log(mid)    
        } else if ( numeroBuscar < telefonos[mid]) {      
            return busquedaBinaria(telefonos, numeroBuscar,inferior, mid - 1);    
        } else {      
            return busquedaBinaria(telefonos, numeroBuscar,mid + 1, superior);    
        }  
    }   
}

busquedaBinaria(telefonos,24,0, telefonos.length -1);

let bi = [
    [2,2,3],      
    [3,4,5],
    [4,5,2],
        ]

for (let c = 0; c < 3; c++) {
    for (let f = 0; f < 3; f++) {
        let array = console.log(array);
    }
}


// console.log(bi);

// let j = bi.flat()
// console.log(j);
