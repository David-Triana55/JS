class CarProductionLine{
    setAirBags(airBagsNumber){
        throw new error("Method not implemented")
    }
    setColor(color){
        throw new error("Method not implemented")
    }
    setEdition(edition){
        throw new error("Method not implemented")
    }
    resetProductionLine(){
        throw new error("Method not implemented")
    }
    
} 

class SedanProductionLine extends CarProductionLine {
    constructor({ model}){
        super()
        this.resetProductionLine() // this.sedanCar = this.internalModel
        this.setInternalModel(model)
    }

    setAirBags(howMany){
        this.sedanCar.airBags = howMany; // this.sedanCar.setColor => es el setter de la clase Car
        return this
    }

    setColor(color){
        this.sedanCar.color = color;
        return this
    }

    setEdition(edition){
        this.sedanCar.edition = edition;
        return this
    }

    setInternalModel(model){
        this.internalModel = model;
    }

    setModel(){
        this.sedanCar.model = 'sedan';
    }
    resetProductionLine(){
        this.sedanCar = this.internalModel === 'Mastodon' ? new MastodonCar() : new RhinoCar();
    }

    build(){
        this.setModel()
        const sedanCar = this.sedanCar
        this.resetProductionLine()
        return sedanCar
    }
}


class Car {
    constructor(){
        this._edition = ''
        this._model = ''
        this._airBags = 2
        this._color = 'black'
    }

    set edition(edition){
        this._edition = edition
    }

    set model(model) {
        this._model = model
    }

    set airBags(airBags) {
        this._airBags = airBags
    }

    set color(color) {
        this._color = color
    }
}

class MastodonCar extends Car {
    constructor(){
        super()
    }
}

class RhinoCar extends Car{
    constructor(){
        super()
    }
}


class Director {
    setProductLine(productionLine){ // new SedanProductLine()
        this.productionLine = productionLine
    }

    constructCvtEdition(){ // El Director puede tener métodos específicos que guíen el proceso de construcción, 
                            // definiendo los pasos necesarios y llamando a los métodos del Builder según sea 
                            // necesario para construir el objeto de acuerdo con un plan predefinido.
        this.productionLine
            .setAirBags(4)
            .setColor('blue')
            .setEdition('CVT');
    }

    constructSignatureEdition(){
        this.productionLine
            .setAirBags(8)
            .setColor('red')
            .setEdition('Signature');
    }
}

function appBuilder(director){
    const mastodonSedanProductionLine = new SedanProductionLine({
        model: 'Mastodon'
    }) 

    director.setProductLine(mastodonSedanProductionLine)
    director.constructCvtEdition()
    const mastodonSedanCvt = mastodonSedanProductionLine.build()
    console.log(mastodonSedanCvt);

    director.constructSignatureEdition()
    const mastodonSedanSignature = mastodonSedanProductionLine.build()
    console.log(mastodonSedanSignature);
}

appBuilder(new Director());




/* CarProductionLine: Es una clase base abstracta que define los métodos para configurar 
una línea de producción de automóviles.Es una clase concreta que extiende CarProductionLine
y define cómo se configura una línea de producción para automóviles sedán. 
Se encarga de definir cómo se crean y configuran los objetos MastodonCar o RhinoCar 
según el modelo interno especificado.


Car: Es una clase base abstracta que define las propiedades básicas de un automóvil,
como la edición, el modelo, las bolsas de aire y el color.

MastodonCar y RhinoCar: Son clases concretas que extienden Car y representan diferentes modelos de automóviles.

Director: Es responsable de orquestar la construcción de los diferentes tipos de automóviles. 
Define métodos para construir diferentes ediciones de automóviles, como la edición CVT y la edición Signature.

appBuilder: Es una función que utiliza un Director para construir diferentes tipos de automóviles.
Primero crea una línea de producción para automóviles sedán Mastodon,
luego construye una edición CVT y una edición Signature utilizando el Director.

En resumen,el patrón Builder para construir diferentes tipos de objetos de manera estructurada y coherente.
El Director se encarga de la secuencia de pasos para construir un objeto complejo, 
mientras que las clases concretas como SedanProductionLine y las clases de producto como MastodonCar 
se encargan de la implementación específica de cada paso de construcción.
*/ 