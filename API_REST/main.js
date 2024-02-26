console.log("hello");

const URL_random  = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_f4IVsUBUJ5t5lD9VRgfyM9mYvUkW4ZHwBb8fgvVW8OmyKdMjp5OqpUfHrELxRoT1"
const URL_favorite  = "https://api.thecatapi.com/v1/favourites?limit=3&api_key=live_f4IVsUBUJ5t5lD9VRgfyM9mYvUkW4ZHwBb8fgvVW8OmyKdMjp5OqpUfHrELxRoT1"

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
        const response = await fetch(URL_random)
        const data = await response.json();
        console.log("ramdom");
        console.log(data);
        const image1 = document.getElementById("photo1")
        const image2 = document.getElementById("photo2")

        image1.src = data[0].url
        image2.src = data[1].url
    }
    catch(err) {
        error.innerText = err.message;
    }
}

async function loadFavourites(){
    try {
        const response = await fetch(URL_favorite)
        const data = await response.json();
        console.log("favorites");
        console.log(data);

    }
    catch(err) {
        console.log(err);
        error.innerText = "hubo un error " + err.status
    }
}

async function saveFavourites (){
    const res = await fetch(URL_favorite, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image_id : "dnj"
        }),

    })

    console.log(res);
}