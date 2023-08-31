console.log(salarios)

function encontrarPersona(personaEnBusqueda) {  
    return salarios.find(persona => persona.name === personaEnBusqueda)   
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos

    const salarios = trabajos.map( function (elemento) {
        return elemento.salario
    })

    const medianaSalarios = FuncionesMath.calcularMediana(salarios)
    console.log(medianaSalarios)
    return mediana

}