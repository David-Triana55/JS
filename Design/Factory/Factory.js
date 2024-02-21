// crar objetos basados en una superclase

/*
 el patrón Factory es útil cuando necesitas crear objetos de forma flexible y desacoplada,
  y cuando la lógica de creación de objetos es complicada o propensa a cambios.
  Utilizando un Factory, puedes encapsular esta lógica y proporcionar una interfaz simple
  para crear objetos en tu aplicación.
*/

// STEP 1 crate the superclass 
class BaseCar {
    showCost() {
      throw new Error('Method not implemented!');
    }
  }
  
  // STEP 2 extends superclass to products
  class MastodonCar extends BaseCar {
    showCost() {
      console.log('[MASTODON] Car Cost: 300,000 MXN');
    }
  }
  
  class RhinoCar extends BaseCar {
    showCost() {
      console.log('[RHINO] Car Cost: 100,000 MXN');
    }
  }
  
  // STEP 3 create the factory of the products 
  class CarFactory {
    makeCar() {
      throw new Error('Method not implemented!');
    }
  }
  
  // STEP 4 extends the factory to new factories products
  class MastodonCarFactory extends CarFactory {
  
    makeCar() {
      return new MastodonCar(); // call product extends base car
    }
  }
  
  class RhinoCarFactory extends CarFactory {
   
    makeCar() {
      return new RhinoCar();
    }
  }
  
  function appFactory(factory) {
    console.log('--- [JS] Calling appFactory ---\n');
  
    if (!factory) {
      console.log('--- No factory provided ---');
      return;
    }
  
    const car = factory.makeCar();
    car.showCost();
  }
 
  appFactory(new CarFactory());
  appFactory(new RhinoCarFactory());
