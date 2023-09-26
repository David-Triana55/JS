class Banda {
    constructor({nombre,generos = []}) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        if (this.integrantes.find((element) => element.instrumento == "Bateria")) {
            console.log('La banda ya tiene un baterista');
        } else {
            this.integrantes.push(integranteNuevo);
        }
        this.integrantes.push(integranteNuevo)
    }
}
  //Crear clase Integrante
class Integrante {
    constructor({ nombre, instrumento }) {
        this.nombre = nombre
        this.instrumento = instrumento
    }
}  


const integrante1 = new Integrante({nombre: "juan", instrumento: "guitarra"})
const integrante2 = new Integrante({nombre: "juan", instrumento: "Bateria"})

const data = {
    nombre: 'Los Jacks',
    generos: ['rock', 'pop', 'post-punk'],
    integrantes :[
        integrante1,
        integrante2
    ]
};


const banda = new Banda(data);
banda.agregarIntegrante(integrante1)
banda.agregarIntegrante(integrante2)


console.log(banda);




