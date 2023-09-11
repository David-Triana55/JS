// ? const boton = document.getElementById("calcular")
// todo const inputPrice = document.getElementById("producto")
// ! const inputCupon = document.getElementById("cupon")
// let parrafo = document.getElementById("result")

// boton.addEventListener("click", promedio)

function promedio(){
    // p * (100 - D) / 100
    const price = Number(inputPrice.value)  
    const cupon = (inputCupon.value)

    let descuento
    
    if(price == 0 && cupon == 0) {
        parrafo.innerHTML = "no te creas, PAGA!!"
        return
    }


    const cuponList = []

    cuponList.push({
        nombre: "david_triana",
        descuento: 30
    })
    cuponList.push({
        nombre: "david_felipe",
        descuento: 5
    })
    cuponList.push({
        nombre: "david_gomez",
        descuento: 25
    })

    cuponList.push(10)

    console.log(cuponList[2])


    const arrayCupones = cuponList.find(cupones)
    
    function cupones(cuponElement){
        return cuponElement.nombre == cupon
    }
    
    if(arrayCupones) {
        descuento = arrayCupones.descuento
    } else {
        parrafo.innerHTML = "cupon no valido"
        return
    }

    if ( descuento >= 100) {
        parrafo.innerHTML = "no te creas, PAGA!!"
        return
    }

    const resultado =  price * (100 - descuento) / 100

    parrafo.innerHTML = resultado

}