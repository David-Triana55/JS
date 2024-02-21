// una instancia a lo largo del codigo

// pros 
// certeza de que solo hay una instancia
// un solo punto de acceso global
// la instancia es inicializada solo cuando se se requiere una vez 

/*es importante tener en cuenta que el patrón Singleton también puede tener desventajas, 
como acoplar las clases a una única implementación y dificultar las pruebas unitarias.
 Por lo tanto, es importante evaluar cuidadosamente si el uso de un Singleton es 
 apropiado para tu situación específica y considerar alternativas si es necesario. 
 */
 
class Singleton {
    static instances = undefined;

    constructor(version){
        this.version = version
    }

    static getInstance(version){
        if(!this.instances){
            this.instances = new Singleton(version)
        }
    }

}

function get(){
    const persona1 = Singleton.getInstance("hols")
    const persona2 = Singleton.getInstance("gaga")
    console.log(persona1 == persona2);
}

get()

console.log(Singleton.instances);