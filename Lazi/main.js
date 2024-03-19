import { registerImage } from "./lazy.js";

const btn = document.getElementById('btn')

let randomNumber = () => Math.floor(Math.random() * 123) + 1;

let foxArray = []

btn.addEventListener('click', () =>{

    let numero = randomNumber();

    if(!foxArray.includes(numero)){
        foxArray.push(numero)
    }

    console.log(foxArray);
    console.log(numero);

    const container = document.getElementById('images')

    container.innerHTML = ''
    foxArray.forEach(fox => {
        const imagesContainer = document.createElement('div')
        const image = document.createElement('img')

        
        image.dataset.src = `https://randomfox.ca/images/${fox}.jpg`
        
        imagesContainer.appendChild(image)
        
        registerImage(container.appendChild(imagesContainer))
        
    })
})

const cleanBtn = document.getElementById('clean')
cleanBtn.addEventListener('click', () =>{
    const container = document.getElementById('images')
    container.innerHTML = ''
    foxArray = []

})