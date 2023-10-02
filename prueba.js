class david {
    constructor({ name, age,ahorros, id,novia = false, madre, padre}) {
        this.name = name;
        this.age = age;
        this.ahorros = ahorros;
        this.id = id;
        this.padre = padre;
        this.novia = novia;
        this.madre = madre;
    }

    miNovia(name){
        if (name == "Angie") {
            console.log("si es tu novia");
        } else {
            console.log("no es tu novia");
        }
    }
}

const persona = new david({
    name: "david",
    age: "18",
    ahorros: "20.000",
    id: 1032677756,
    padre: true,
    madre: true,
    novia: "Angie",
})

console.log(persona);


persona.miNovia(persona.novia)


// abstraccion es abstraer los detalles de un objeto
// herencia conserva el constructor de la clase extendida asi reutilizamos codigo
// polimosfismo el polimorfismo se manifiesta a través de la capacidad de los objetos de diferentes clases para responder a la misma llamada de método.
// encapsulamiento es la ocultar los detalles internos de un objeto, getters y setters