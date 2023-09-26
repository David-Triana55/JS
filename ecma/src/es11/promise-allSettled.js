const promise1 = new Promise((resolve, reject) =>  reject("Failed to"));
const promise2 = new Promise((resolve, reject) =>  resolve("resolve"));
const promise3 = new Promise((resolve, reject) =>  resolve("resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))


// El resultado de Promise.allSettled() es un array de objetos que describe el estado de cada promesa en el iterable original. Cada objeto tiene dos propiedades:
    
// status: Un valor que indica el estado de la promesa. Puede ser uno de los siguientes:
    
// "fulfilled": La promesa se ha cumplido con éxito.
// "rejected": La promesa se ha rechazado
// value o reason: Dependiendo del estado, esta propiedad contiene el valor resuelto (si la promesa se cumplió) o el motivo de rechazo (si la promesa se rechazó).