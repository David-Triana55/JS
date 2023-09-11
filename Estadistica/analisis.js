console.log(salarios);

function encontrarPersona(personaEnBusqueda) {  
    return salarios.find(persona => persona.name === personaEnBusqueda)   

     // metodo find encuentra Devuelve el primer elemento en el array que cumple una condición especificada en una función.
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos

    console.log(trabajos);

    // metodo map Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.

    const salarios = trabajos.map( function (elemento) {
        return elemento.salario
    })

    console.log(salarios);

    const medianaSalarios = FuncionesMath.calcularMediana(salarios)
    console.log(medianaSalarios)
    return medianaSalarios
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {

        const salarioActual = trabajos[i].salario;

        const salarioPasado = trabajos[i - 1].salario;

        const crecimiento = salarioActual - salarioPasado;
        
        const porcentajeCrecimiento = crecimiento / salarioPasado; // hayar el porcentaje que subio entre un salario y el otro
        
        porcentajesCrecimiento.push(porcentajeCrecimiento)   // envio cada porcentaje de crecimiento de un salario y el otro
    }

    // [ 0, 2.4, 0.2, 0.19, 0 ]  // devuelve la mediana del array

    const medianaPorcentajesCrecimiento = FuncionesMath.calcularMediana(porcentajesCrecimiento);

    console.log(porcentajesCrecimiento);
    console.log(medianaPorcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;  // nos vamos al ultimo salario cobrado

    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;  // el ultimo salario * la mediana de crecimiento de los salarios ganados


    const nuevoSalario = ultimoSalario + aumento;   // se suma el ultimo salario con el aumento para obtener el nuveo salario

    return "tu proximo salario es:  " + nuevoSalario;
}

const empresas = {}


for (persona of salarios) { // usamos la variable persona para recorrer el array de salarios
    for(trabajo of persona.trabajos) { // usamos la variable trabajo para recorrer el array de persona.trabajos
        if (!empresas[trabajo.empresa]) { // si no existe entonces
            empresas[trabajo.empresa] = {}   //  crea un objeto con el nombre de la empresa
        }

        if (!empresas[trabajo.empresa][trabajo.year]) { // si no existe entonces
            empresas[trabajo.empresa][trabajo.year] = [] // crea un arreglo con el año de la empresa
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario) // empuja los salario al array vacio de la empresa del año
    }
}

// ? for normal 

// for (let i = 0; i < salarios.length; i++) {
//     const persona = salarios[i];
//     for (let j = 0; j < persona.trabajos.length; j++) {
//         const trabajo = persona.trabajos[j];
//         if (!empresas[trabajo.empresa]) {
//             empresas[trabajo.empresa] = {};
//         }
//         if (!empresas[trabajo.empresa] [trabajo.year]) {
//             empresas[trabajo.empresa][trabajo.year] = [];
//         }
//         empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
//     }
// }

console.log(empresas)

function medianaEmpresaYear(nombre, year) {
    if(!empresas[nombre]) { // si la empresa llamada "***" no existe entonces
        console.warn("empresa no existe") // ! error
    } else if(!empresas[nombre][year]) {
        console.warn("no dío salario ese año")
    } else {
        return FuncionesMath.calcularMediana(empresas[nombre][year])
    }
}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) { // si empresa no existe entonces:
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);

        const listaMedianaYears = empresaYears.map((year) => {
        return medianaEmpresaYear(nombre, year);
        });

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {

            const salarioActual = listaMedianaYears[i];

            const salarioPasado = listaMedianaYears[i - 1];

            const crecimiento = salarioActual - salarioPasado;

            const porcentajeCrecimiento = crecimiento / salarioPasado;
            
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }
        const medianaPorcentajesCrecimiento = FuncionesMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];

        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;

        const nuevoMediana = ultimaMediana + aumento;

        return nuevoMediana;
    }
}

// Analisis general

function medianaGeneral() {
    const listaMediana = salarios.map( 
        (persona) => medianaPorPersona(persona.name)
    )

    const medianaOrdenadas = FuncionesMath.ordenarLista(listaMediana)

    const cantidad = listaMediana.length / 10;

    const limite = listaMediana.length - cantidad;

    const top10 = medianaOrdenadas.slice(limite, medianaOrdenadas.length);

    // slice solo copia
    // splice quita del arreglo original

    const medianaTop10 = FuncionesMath.calcularMediana(top10)

    return medianaTop10

}