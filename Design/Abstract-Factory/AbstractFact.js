class MastodonCar {
    GPS(){
        throw new Error ("Method not implemented")
    }
}

class RhinoCar{
    GPS(){
        throw new Error ("Method not implemented")
    }
}

class MastodonSedanCar extends MastodonCar {
    GPS(){
        console.log("[SEDAN] Mastodon GPS");
    }
}

class MastodonHatchbackCar extends MastodonCar{
    GPS(){
        console.log("[HATCHBACK] Mastodon GPS");
    }
}

class RhinoSedanCar extends RhinoCar {
    GPS(){
        console.log("[SEDAN] Rhino GPS");
    }
}

class RhinoHatchbackCar extends RhinoCar{
     
    GPS(){
        console.log("[HATCHBACK] Rhino GPS");
    }
}

class CarAbstractFacory {
    createMastodon(){
        throw new Error ("Method not implemented")
    }
    createRhino(){
        throw new Error ("Method not implemented")
    }
}

class SedanFactory extends CarAbstractFacory {
    createMastodon(){
        return new MastodonSedanCar()
    }
    createRhino(){
        return new RhinoSedanCar()
    }

}

class HatchbackFactory extends CarAbstractFacory {
    createMastodon(){
        return new MastodonHatchbackCar()
    }
    createRhino(){
        return new RhinoHatchbackCar()
    }
}

function appCarFactory(factory) {
    const mastodon = factory.createMastodon()
    const rhino = factory.createRhino()

    mastodon.GPS()
    rhino.GPS()
}

appCarFactory(new HatchbackFactory())
appCarFactory(new SedanFactory())