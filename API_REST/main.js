const URL_RANDOM  = "https://api.thecatapi.com/v1/images/search?limit=8"
const URL_FAVORITE = "https://api.thecatapi.com/v1/favourites?"

const URL_FAVORITE_DELETE  = (id) => `https://api.thecatapi.com/v1/favourites/${id}`

const API_KEY = "live_f4IVsUBUJ5t5lD9VRgfyM9mYvUkW4ZHwBb8fgvVW8OmyKdMjp5OqpUfHrELxRoT1"

const API_ADD_MICHI = `https://api.thecatapi.com/v1/images/upload`

document.addEventListener("DOMContentLoaded", loadRandom)
document.addEventListener("DOMContentLoaded", loadFavourites)

const btn = document.getElementById("btn")

const error = document.getElementById("error")

btn.addEventListener("click", () =>{
    location.reload()
})

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         const image = document.getElementById("photo")
//         image.src = data[0].url
//     })
//     .catch(err => console.log(err));

async function loadRandom(){
    try {
        const response = await fetch(URL_RANDOM, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY
            }
        })
        const data = await response.json();
        console.log("ramdom");
        console.log(data);
        const image1 = document.getElementById("photo1")
        const image2 = document.getElementById("photo2")
        const image3 = document.getElementById("photo3")
        const image4 = document.getElementById("photo4")
        const image5 = document.getElementById("photo5")
        const image6 = document.getElementById("photo6")
        const image7 = document.getElementById("photo7")
        const image8 = document.getElementById("photo8")
        const btn1 = document.getElementById("btn1")
        const btn2 = document.getElementById("btn2")
        const btn3 = document.getElementById("btn3")
        const btn4 = document.getElementById("btn4")
        const btn5 = document.getElementById("btn5")
        const btn6 = document.getElementById("btn6")
        const btn7 = document.getElementById("btn7")
        const btn8 = document.getElementById("btn8")


        image1.src = data[0].url
        image2.src = data[1].url
        image3.src = data[2].url
        image4.src = data[3].url
        image5.src = data[4].url
        image6.src = data[5].url
        image7.src = data[6].url
        image8.src = data[7].url

        btn1.onclick = () => saveFavouriteMichi(data[0].id)
        btn2.onclick = () => saveFavouriteMichi(data[1].id)
        btn3.onclick = () => saveFavouriteMichi(data[2].id)
        btn4.onclick = () => saveFavouriteMichi(data[3].id)
        btn5.onclick = () => saveFavouriteMichi(data[4].id)
        btn6.onclick = () => saveFavouriteMichi(data[5].id)
        btn7.onclick = () => saveFavouriteMichi(data[6].id)
        btn8.onclick = () => saveFavouriteMichi(data[7].id)

    }
    catch(err) {
        console.log(err);
    }
}

async function loadFavourites(){
    try {
        const response = await fetch(URL_FAVORITE, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json ",
                "x-api-key": API_KEY
            }
        })
        const data = await response.json();
        console.log("favorites");
        console.log(data);

        const section = document.getElementById("favorites-michis")
        section.innerHTML = ""

        data.forEach(michi => {
            const article = document.createElement("article");
            const img = document.createElement("img");
            const btn = document.createElement("button");
            const btnText = document.createTextNode('Remover')

            btn.classList.add("btn")
            btn.appendChild(btnText);
            img.src = michi.image.url
            article.appendChild(img)
            article.appendChild(btn)
            section.appendChild(article)

            btn.onclick = () => deleteMichi(michi.id)
        });

    }
    catch(err) {
        console.log(err);
    }
}

async function saveFavouriteMichi (id){
    const res = await fetch(URL_FAVORITE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        },
        body: JSON.stringify({
            image_id : id
        }),
    })

    console.log(res, "michi guardado en favoritos");
    loadFavourites()
}

async function deleteMichi(id){
    const res = await fetch(URL_FAVORITE_DELETE(id),{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY
        }
    })

    const data = await res.json();

    console.log(data, "michi eliminado");
    loadFavourites(); 
}

async function uploadMichiPhoto (){

    const form = document.getElementById("ulpoadingForm");
    const formData = new FormData(form);

    const res = await fetch(API_ADD_MICHI,{
        method: "POST",
        headers:{
            "x-api-key": API_KEY
        },
        body: formData
    })

    const data = await res.json();
    console.log(data);
    saveFavouriteMichi(data.id)
}