
class BaseCar {

    constructor({
        edition = '',
        model = '',
        airBags = 0,
        color = '',
    } = {}) {
        this._edition = edition;
        this._model = model;
        this._airBags = airBags;
        this._color = color;
    }
    
    set edition(edition) {
        this._edition = edition;
    }
    
    set model(model) {
        this._model = model;
    }
    set airBags(howMany) {
        this._airBags = howMany;
    }
    
    set color(color) {
        this._color = color;
    }

    get edition() {
        return this._edition;
    }
    
    get model() {
        return this._model;
    }

    get airBags() {
        return this._airBags;
    }
    get color() {
        return this._color;
    }
    clone() {
        throw new Error('Method not implemented!');
    }
}

  // STEP 2
class MastodonSedanCar extends BaseCar {
    constructor(carToClone) {
        super({
            edition: carToClone?.edition,
            model: 'sedan',
            airBags: carToClone?.airBags,
            color: carToClone?.color,
        });
    }

    clone() {
        return new MastodonSedanCar(this);
    }
}

class CarFactory {
    create() {
        throw new Error('Method not implemented!');
    }
}
class MastodonSedanCarFactory extends CarFactory {
    create() {
        return new MastodonSedanCar();
    }
}  
class CarProductionLine {
    setEdition(edition) {
        throw new Error('Method not implemented!');
    }
    setAirBags(howMany) {
        throw new Error('Method not implemented!');
    }
    setColor(color) {
        throw new Error('Method not implemented!');
    }
    resetProductionLine(newCar) {
        throw new Error('Method not implemented!');
    }
}

class SedanProductionLine extends CarProductionLine {
    constructor({ factory }) {
        super();
        this.carFactory = factory;
        this.resetProductionLine(this.carFactory.create());
    }
    setEditon(edition) {
        this.sedanCar.edition = edition;
        return this;
    }

    setAirBags(howMany) {
        this.sedanCar.airBags = howMany;
        return this;
    }

    setColor(color) {
        this.sedanCar.color = color;
        return this;
    }

    setCarFactory(factory) {
        this.carFactory = factory;
    }
    
    resetProductionLine(car) {
        this.sedanCar = car;
    }

    build() {
        const sedanCar = this.sedanCar;
        this.resetProductionLine(this.carFactory.create());
        return sedanCar;
    }
}

class Director {
    setProductionLine(productionLine) {
        this.productionLine = productionLine;
    }
    constructCvtEdition() {
        this.productionLine.setAirBags(4).setColor('red').setEditon('cvt');
    }
    
    constructSignatureEdition() {
        this.productionLine
            .setAirBags(8)
            .setColor('gray')
            .setEditon('signature');
    }
}

function appPrototype(director) {
    console.log('--- [JS] Calling appPrototype ---\n');
    if (!director) {
        console.log('--- No director provided ---');
        return;
    }
    const mastodonSedanProductionLine = new SedanProductionLine({
        factory: new MastodonSedanCarFactory(),
    });

    director.setProductionLine(mastodonSedanProductionLine);

    director.constructCvtEdition();
    const mastodonSedanCvt = mastodonSedanProductionLine.build();
    console.log('--- Mastodon Sedan CVT ---\n');
    console.log(mastodonSedanCvt);

    const mastodonSedanCvtClone = mastodonSedanCvt.clone();
    console.log('\n--- Mastodon Sedan CVT Clone ---\n');
    console.log(mastodonSedanCvtClone);

    director.constructSignatureEdition();
    const mastodonSedanSignature = mastodonSedanProductionLine.build();
    console.log('\n--- Mastodon Sedan Signature ---\n');
    console.log(mastodonSedanSignature);

    const mastodonSedanSignatureClone = mastodonSedanSignature.clone();
    console.log('\n--- Mastodon Sedan Signature Clone ---\n');
    console.log(mastodonSedanSignatureClone);
}
appPrototype(new Director());