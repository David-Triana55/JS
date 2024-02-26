import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data) { // api url, information to send
    const response = fetch(urlApi,{ 
        method: "POST", // POST send, PUT update, DELETE remove
        mode: 'cors', // permissions
        credentials: 'same-origin', 
        headers:{
            'content-Type': 'application/json', // indicate type file
        },
        body: JSON.stringify(data), // to become obj in text format
    })
    return response
}


const data = {
    "title": "New product",
    "price": 999,
    "description" : "Product description",
    "categoryId" : 2,
    "images": [
        "http://placeimg.com/640/480/any"
    ]
}
postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data))