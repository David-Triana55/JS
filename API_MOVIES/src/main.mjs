import { categoriesPreviewList, genericSection, headerCategoryTitle, headerSection, movieDetailCategoriesList, movieDetailDescription, movieDetailScore, movieDetailTitle, relatedMoviesContainer, trendingMoviesPreviewList } from "./node.mjs";
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

const laziLoader = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            const URL = entry.target.getAttribute('data-img')
            entry.target.setAttribute('src' , URL);
        }
    });
}) // observar la interseccion y mostrar los elementos que esten en ella para la optimizacion

console.log(laziLoader);

function createMovies(movies, container, 
    { 
        lazyLoad = false,
        clean = true 
    } = {},
) {
        
        if(clean) {
            container.innerHTML = ""
        }


        movies.forEach(movie => {

            const movieContainer = document.createElement('div')
            movieContainer.classList.add('movie-container')

            const movieImage = document.createElement('img')
            movieImage.classList.add('movie-img')
            movieImage.setAttribute('alt', movie.title)
            movieImage.setAttribute( lazyLoad ? 'data-img' : 'src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)


            movieImage.addEventListener('error', () => {
                movieContainer.remove()
                movieImage.style.display= "none";
            })

            if(lazyLoad){
                laziLoader.observe(movieImage)
            }

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

    createMovies(movies, trendingMoviesPreviewList, {laziLoad : true} )
}

export async function getCategoriesPreview(){
    const {data} = await api('genre/movie/list')
    const categories = data.genres
    console.log(categories);

    createCategory(categories, categoriesPreviewList, {laziLoad : true})
}

export async function getMoviesByCategory(id){
    const {data} = await api(`discover/movie`,{
        params: {
            with_genres: id
        }
    })

    const movies = data.results
    console.log(movies);

    createMovies(movies, genericSection, true)
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
    createMovies(movies, genericSection, {lazyLoad: true, clean: true})
}

window.addEventListener('scroll', getPanigedTrendingMovies)

let page = 1

async function getPanigedTrendingMovies(){
    const { scrollTop, scrollHeight, clientHeight} = document.documentElement

    const isScrollBottom = (scrollTop + clientHeight) >= scrollHeight - 15
    
    if(isScrollBottom) {
        page++
        const {data} = await api("trending/movie/day", {
            params: {
                page
            }
        })
        
        const movies = data.results
        createMovies(movies, genericSection, {lazyLoad: true, clean: false})
    }

}

export async function getMovieById(id){
    const data = await api('movie/' + id)
    
    const movie = data.data
    console.log(movie);

    const fondo = document.querySelector(".header-container--long")

    const movieUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    fondo.style.background = 
    `
    linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.35) 19.27%, 
        rgba(0, 0, 0, 0) 29.17%
        ),

    url(${movieUrl})`

    movieDetailTitle.innerHTML = movie.title
    movieDetailDescription.innerHTML = movie.overview
    movieDetailScore.innerHTML = movie.vote_average.toFixed(1)

    createCategory(movie.genres, movieDetailCategoriesList)
}

export async function getRelatedMoviesId(id) {
    const {data} = await api(`movie/${id}/recommendations`)
    const movies = data.results
    console.log(movies);

    createMovies(movies,relatedMoviesContainer , true)
}