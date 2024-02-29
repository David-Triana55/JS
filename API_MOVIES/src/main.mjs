import { API_KEY } from "./secret.mjs";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    Headers: {
        "content-type": "application/json;charset=utf-8",
    },
    params: {
        "api_key": API_KEY
    }
})

export async function getTrendingMovies(){
    const { data } = await api('trending/movie/day')
    const movies = data.results

    console.log(movies);

    movies.forEach(movie => {
        const trendigPreviewMovies = document.querySelector('.trendingPreview-movieList')

        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImage = document.createElement('img')
        movieImage.classList.add('movie-img')
        movieImage.setAttribute('alt', movie.title)
        movieImage.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
        
        movieContainer.appendChild(movieImage)
        trendigPreviewMovies.appendChild(movieContainer)
    })
}


export async function getCategoriesPreview(){
    const {data} = await api('genre/movie/list')
    const categories = data.genres
    console.log(categories);

    categories.forEach(category => {
        const categoryPreview = document.querySelector('.categoriesPreview-list')

        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTitle = document.createElement('h3')
        categoryTitle.classList.add('category-title')
        categoryTitle.setAttribute('id', 'id' + category.id)

        const categoryTitleText = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTitleText)
        categoryContainer.appendChild(categoryTitle)

        categoryPreview.appendChild(categoryContainer )
    })
}
