const promise1 = new Promise((resolve, reject) => reject("rejected"))
const promise2 = new Promise((resolve, reject) => resolve("resolved 1"));
const promise3= new Promise((resolve, reject) => resolve("resolved 2"));

Promise.any([promise1, promise2, promise3])
    .then( response => console.log(response))


// nos devuelve la primera promesa que cumple, mirar cual se soluciono de primero