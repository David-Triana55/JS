const promise = new Promise(function(resolve, reject) {
    resolve('hey')
})

const cows = 12


const countCows = new Promise(function(resolve, reject) {
    if(cows === 15){
        resolve('hay 15 vacas')
    } else{
        reject('error')
    }
})

countCows.then((result => { // resuelve la promesa
    console.log(result);
})).catch((err) => { // no cumple la promesa
    console.log(err);
}).finally(() => {
    console.log('finally'); // cumplio la promesa
})

function delay(time, message) { 
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(message)
        }, time)
    })
}


(delay(2000, 'resuelto')).then((result => {
    console.log(result);
})).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('done');
})