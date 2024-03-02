import { categoriesPreviewList, genericSection, headerCategoryTitle, movieDetailCategoriesList, movieDetailDescription, movieDetailScore, movieDetailTitle, trendingMoviesPreviewList } from "./node.mjs";
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
// utils

function createMovies(movies, container){
    container.innerHTML = ""
    movies.forEach(movie => {

        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImage = document.createElement('img')
        movieImage.classList.add('movie-img')
        movieImage.setAttribute('alt', movie.title)
        movieImage.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
        
        movieContainer.appendChild(movieImage)
        container.appendChild(movieContainer)

        movieContainer.addEventListener('click', () => {
            location.hash = `#movie= ${movie.id}`
        })
    })
}

function createCategory(categories, container) {


    container.innerHTML = ""
    categories.forEach(category => {

        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTitle = document.createElement('h3')
        categoryTitle.classList.add('category-title')
        categoryTitle.setAttribute('id', 'id' + category.id)

        categoryTitle.addEventListener("click", () => {
            location.hash = `category=${category.id}-${category.name}`
        })
        const categoryTitleText = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTitleText)
        categoryContainer.appendChild(categoryTitle)

        container.appendChild(categoryContainer)
    })
}


// llamado api

export async function getTrendingMoviesPreview(){
    const { data } = await api('trending/movie/day')
    const movies = data.results
    console.log(movies);

    createMovies(movies, trendingMoviesPreviewList)
}

export async function getCategoriesPreview(){
    const {data} = await api('genre/movie/list')
    const categories = data.genres
    console.log(categories);

    createCategory(categories, categoriesPreviewList)
}



export async function getMoviesByCategory(id){
    const {data} = await api(`discover/movie`,{
        params: {
            with_genres: id
        }
    })

    const movies = data.results
    console.log(movies);

    createMovies(movies, genericSection)
} 


export async function getMoviesBySearch(query){
    const {data} = await api("search/movie",{
        params: {
            query
        }
    })

    const movies = data.results

    createMovies(movies, genericSection)
}


export async function getTrendingMovies(){
    const {data} = await api("trending/movie/day")

    const movies = data.results

    createMovies(movies, genericSection)
}

export async function getMovieById(id){
    const data = await api('movie/' + id)

    
    const movie = data.data
    console.log(movie);

    movieDetailTitle.innerHTML = movie.title
    movieDetailDescription.innerHTML = movie.overview
    movieDetailScore.innerHTML = movie.vote_average


    
}