const anotherFunction = (num) => {
    return new Promise((resolve, reject) => {
        if(num > 0) {
            resolve("es mayor")
        } else{
            reject("es menor")
        }
    })
}


anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log("done"))

