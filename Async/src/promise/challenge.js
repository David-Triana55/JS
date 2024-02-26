import fetch from "node-fetch"; // poner el package.json que es type: module
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
    return fetch(urlApi)
}

// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products => {
//     console.log(products);
// })
// .then(()=> {
//     console.log('hola');
// })
// .catch(err => console.log(err));


fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log('productos-------------',products)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log( 'title-------------', product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log( 'name-------------', category.name)
    })
    .catch(err => console.log(err))
    .finally(()=> console.log('finally'))  